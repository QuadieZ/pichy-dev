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
            description: "#A6BBD5"
        },
        background: {
            primary: "#F8FBFF",
            item: "#ffffff"
        }
    }
});