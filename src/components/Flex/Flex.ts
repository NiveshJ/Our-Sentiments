import { css, styled } from "@styles";
import { Box, boxCss } from "@src/components";

export const flexCss = css( {
    display: "flex",
    variants: {
        direction: {
            column: { flexDirection: "column" },
            row: { flexDirection: "row" }
        },
        justify: {
            start: { justifyContent: "flex-start" },
            center: { justifyContent: "center" },
            end: { justifyContent: "flex-end" },
            between: { justifyContent: "space-between" }
        },
        wrap: {
            noWrap: { flexWrap: "nowrap" },
            wrap: { flexWrap: "wrap" },
            wrapReverse: { flexWrap: "wrap-reverse" }
        },
        align: {
            start: { alignItems: "flex-start" },
            center: { alignItems: "center" },
            end: { alignItems: "flex-end" },
            stretch: { alignItems: "stretch" },
            baseline: { alignItems: "baseline" }
        },
        center: {
            true: {
                justifyContent: "center",
                alignItems: "center"
            }
        },
        gap: {
            1: {
                gap: "$1"
            },
            2: {
                gap: "$2"
            },
            3: {
                gap: "$3"
            },
            4: {
                gap: "$4"
            },
            5: {
                gap: "$5"
            },
            6: {
                gap: "$6"
            },
            7: {
                gap: "$7"
            }
        }
    }
} );
export const Flex = styled( Box, boxCss, flexCss );
