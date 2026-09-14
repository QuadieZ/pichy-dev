// One-off migration: public/work-posts/*.mdx + hardcoded testimonials -> Sanity.
// Uploads the referenced local image files as real Sanity image assets.
// Run with: node scripts/migrate-to-sanity.mjs
// Requires SANITY_API_WRITE_TOKEN in the environment (a token with Editor access).
// Safe to re-run for text fields (documents use deterministic _ids and are
// upserted with createOrReplace), but each run re-uploads images as new
// assets - only run this once against a given dataset.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createClient } from "@sanity/client";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    const [, key, rawValue = ""] = match;
    const value = rawValue.replace(/^["']|["']$/g, "");
    process.env[key] = value;
  }
}

loadEnvFile(".env");
loadEnvFile(".env.local");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET");
}
if (!token) {
  throw new Error("Missing SANITY_API_WRITE_TOKEN. Create one at sanity.io/manage (Editor permission) and set it in .env.local");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-09-13",
  token,
  useCdn: false,
});

function slugify(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Cache uploads by public path so the same file referenced twice is only sent once.
const assetCache = new Map();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uploadImage(publicPath, attempt = 1) {
  if (assetCache.has(publicPath)) return assetCache.get(publicPath);

  const filePath = path.join(process.cwd(), "public", publicPath);
  if (!fs.existsSync(filePath)) {
    console.warn(`  skipping missing file: ${publicPath}`);
    return null;
  }

  try {
    const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
      filename: path.basename(filePath),
    });
    assetCache.set(publicPath, asset);
    console.log(`  uploaded ${publicPath}`);
    return asset;
  } catch (err) {
    if (attempt < 4) {
      console.warn(`  upload failed for ${publicPath} (attempt ${attempt}), retrying...`);
      await sleep(1000 * attempt);
      return uploadImage(publicPath, attempt + 1);
    }
    throw err;
  }
}

function imageField(asset) {
  return {
    _type: "image",
    _key: asset._id,
    asset: { _type: "reference", _ref: asset._id },
  };
}

async function migrateWorkPosts() {
  const postsDir = path.join(process.cwd(), "public/work-posts");
  const fileNames = fs.readdirSync(postsDir);

  for (const fileName of fileNames) {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const imagePaths = Array.isArray(data.image)
      ? data.image
      : data.image
      ? [data.image]
      : [];

    console.log(`Migrating work post: ${id}`);
    const assets = [];
    for (const imagePath of imagePaths) {
      const asset = await uploadImage(imagePath);
      if (asset) assets.push(asset);
    }

    await client.createOrReplace({
      _id: `workPost-${id}`,
      _type: "workPost",
      title: data.title,
      slug: { _type: "slug", current: id },
      tag: data.tag,
      date: data.date,
      ...(data.startDate ? { startDate: data.startDate } : {}),
      images: assets.map(imageField),
      content: content.trim(),
    });
  }

  console.log(`Work posts migrated (${fileNames.length}).`);
}

async function migrateTestimonials() {
  const testimonials = [
    {
      name: "Tobias Meixner, Co-Founder @ Hubql & Brikl",
      review:
        "Putter is one of the few rare, young talents - smart, motivated and result-oriented as a developer. Even as a part-time student she has worked well along others delivering measurable outcomes for our team.",
      image: "/review/tobias.jpeg",
    },
    {
      name: "Vitaya (Top) Jealwarakun, UI Engineer @ Brikl",
      review:
        "I have worked with Putter for a year as a UI Engineer. Putter is eager to learn and tackles even the biggest challenges head-on. She effectively solves any issues she encounters and excels in communicating with many people, a crucial skill for a UI Engineer.",
      image: "/review/top.jpeg",
    },
    {
      name: "DevA Founders",
      review:
        "You're great at multitasking and managing time, even under stress. Your tech skills and quick learning have been a huge help, and you always deliver on time. Plus, your humor, responsibility, and clear communication in English make you an awesome team member.",
      image: "/review/deva.png",
    },
  ];

  for (const [index, t] of testimonials.entries()) {
    console.log(`Migrating testimonial: ${t.name}`);
    const asset = await uploadImage(t.image);

    await client.createOrReplace({
      _id: `testimonial-${slugify(t.name)}`,
      _type: "testimonial",
      order: index,
      name: t.name,
      review: t.review,
      ...(asset ? { image: imageField(asset) } : {}),
    });
  }

  console.log(`Testimonials migrated (${testimonials.length}).`);
}

await migrateWorkPosts();
await migrateTestimonials();
