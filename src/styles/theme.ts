import { extendTheme } from "@chakra-ui/react";
import "@fontsource/quicksand";

export const theme = extendTheme({
    fonts: {
        heading: "Quicksand",
        body: "Quicksand",
    },
    colors: {
        brand: {
            primary: "#CFE0F0",
            secondary: "#425E87",
        },
        content: {
            primary: "#000000",
            secondary: "#425E87",
            description: "#A6BBD5",
            highlight: "#E59BBA"
        },
        background: {
            primary: "#F8FBFF",
            secondary: "#7D95B9",
            item: "#ffffff"
        }
    }
});