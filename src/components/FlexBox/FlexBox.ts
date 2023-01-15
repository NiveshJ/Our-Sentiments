import { Flex, Box } from "@src/components";
import { css, styled } from "@src/styles";

export const flexBoxCss = css( {
    variants: {
        center: {
            true: {
                justifyContent: "center",
                alignItems: "center",
            },
        },
    },
} );

export const FlexBox = styled( Flex, Box, flexBoxCss );
