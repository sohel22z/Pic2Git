import { extendTheme } from "@chakra-ui/react";

const AppTheme = extendTheme({
    fonts: {
        body: "Lexend, 'sans-serif'",
        heading: "Lexend, 'sans-serif'",
    },
    styles: {
        global: {
            "html, body": {
                fontFamily: "Lexend, 'sans-serif'",
            },
        },
    }
})

export default AppTheme;