import { Typography } from "@/components";
import Head from "next/head";
import { ReactNode } from "react";

type WorkLayoutProps = {
  children: ReactNode;
  frontMatter: any;
};

const Work = (props: WorkLayoutProps) => {
  const { frontMatter } = props;
  const { title } = frontMatter;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Typography variant="h1">{title}</Typography>
      </main>
    </>
  );
};

export default Work;
