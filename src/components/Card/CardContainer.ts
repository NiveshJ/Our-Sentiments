import { css, styled } from "@src/styles";
import { Flex } from "@src/components";

export const cardContainerCss = css( {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    borderRadius: "$1",
    overflow: "hidden",
    margin: "$4",
    variants: {
        size: {
            small: {
                size: "$productCard"
            },
            shadowStyle: {}
        }
    }
} );
export const CardContainer = styled( Flex, cardContainerCss );
