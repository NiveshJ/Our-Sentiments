import { FlexBox, Grid } from "@src/components";
import { css, styled } from "@src/styles";
export const cardCss = css( {
    variants: {
        variant: {
            standard: {
                width: "16rem",
                padding: "$1",
            },
        },
    },
} );
export const Card = styled( FlexBox, Grid, cardCss );
