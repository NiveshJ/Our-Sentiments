import { css, PropsWithCSS, styled } from "@src/styles";
import { Flex } from "../Flex";
import { CardTitle, CardImageContainer } from "./";
import { VariantProps } from "@stitches/react";
import { useNavigate } from "react-router-dom";

export const cardContainerCss = css( {
    margin: "$4",
    variants: {
        size: {
            small: {
                width: "$productCardWidth",
                height: "$productCardHeight"
            }
        },
        animate: {
            scale: {
                transition: "scale ease-in-out 0.3s",
                "&:hover": {
                    cursor: "pointer",
                    scale: 1.05
                }
            }
        }
    }
} );
export const CardContainer = styled( Flex, cardContainerCss );

export interface CardProps
    extends PropsWithCSS,
        VariantProps<typeof CardContainer> {
    imageSrc: string;
    title: string;
    productId: string;
}

export const Card = ( { imageSrc, title, productId, ...props }: CardProps ) => {
    const navigate = useNavigate();

    function reviewResults() {
        navigate( `/review-results/${productId}` );
    }
    return (
        <CardContainer onClick={reviewResults} direction={"column"} {...props}>
            <CardImageContainer src={imageSrc} />
            <CardTitle>{`${title.substring( 0, 50 )}...`}</CardTitle>
        </CardContainer>
    );
};
