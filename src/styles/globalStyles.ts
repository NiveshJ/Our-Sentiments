import { globalCss } from "./stitches.config";

export const globalStyles = globalCss( {
    "@import": [
        "url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;500;600;700;800&display=swap')"
    ],
    "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        "@bp2": {
            fontSize: "18px"
        },
        "@bp3": {
            fontSize: "20px"
        },
        "@bp4": {
            fontSize: "22px"
        }
    },
    "*:before": {
        boxSizing: "border-box"
    },
    "*:after": {
        boxSizing: "border-box"
    },
    "html, body, #root": {
        height: "$full",
        width: "$full"
    },
    body: {
        // typography: "$bodyMedium",
        // color: "$appText",
        // fontFamily: "$fonts$sans",
        // WebkitFontSmoothing: "antialiased",
        // MozOsxFontSmoothing: "grayscale",
        // WebkitTextSizeAdjust: "100%",
        // "&::-webkit-scrollbar": {
        //     "@bp1": {
        //         display: "none"
        //     }
        // }
    }
} );
