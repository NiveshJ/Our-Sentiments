import { css, PropsWithCSS, styled } from "@src/styles";
import { CardTitle, CardImageContainer, Flex } from "@src/components";
import { VariantProps } from "@stitches/react";
import { useNavigate } from "react-router-dom";

export const cardContainerCss = css( {
    margin: "$4",
    variants: {
        size: {
            small: {
                size: "$productCard",
            },
        },
    },
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
            <CardTitle>{title}</CardTitle>
        </CardContainer>
    );
};
