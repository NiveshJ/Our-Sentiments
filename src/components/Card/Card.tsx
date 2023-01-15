import { css, PropsWithCSS, styled } from "@src/styles";
import { CardTitle, CardImageContainer, Flex } from "@src/components";
import { VariantProps } from "@stitches/react";

export const cardContainerCss = css( {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    borderRadius: "$1",
    overflow: "hidden",
    margin: "$4",
    variants: {
        size: {
            small: {
                size: "$productCard"
            }
        }
    }
} );
export const CardContainer = styled( "div", cardContainerCss );

export interface CardProps
    extends PropsWithCSS,
        VariantProps<typeof CardContainer> {
    imageSrc: string;
    title: string;
}

export const Card = ( { imageSrc, title, ...props }: CardProps ) => {
    return (
        <CardContainer {...props}>
            <CardImageContainer src={imageSrc} />
            <CardTitle>{title}</CardTitle>
        </CardContainer>
    );
};
