import { css, PropsWithCSS, styled } from "@src/styles";
import { CardTitle, CardImageContainer, Flex } from "@src/components";
import { VariantProps } from "@stitches/react";

export const cardContainerCss = css( {
    margin: "$4",
    variants: {
        size: {
            small: {
                size: "$productCard"
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
}

export const Card = ( { imageSrc, title, ...props }: CardProps ) => {
    return (
        <CardContainer direction={"column"} {...props}>
            <CardImageContainer src={imageSrc} />
            <CardTitle>{title}</CardTitle>
        </CardContainer>
    );
};
