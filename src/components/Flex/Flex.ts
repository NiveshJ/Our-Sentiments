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
        }
    }
} );
export const Flex = styled( Box, boxCss, flexCss );
