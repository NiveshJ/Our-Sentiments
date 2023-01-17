import { Box } from "@src/components";
import { css, styled } from "@src/styles";

export const styledImageCss = css( {
    width: "$full",
    height: "$full",
    objectFit: "contain"
} );

export const cardImageContainerCss = css( {
    boxShadow: "$shadowtype1",
    borderRadius: "$1",
    height: "90%",
    overflow: "hidden",
    width: "$full",
    padding: "$1"
} );

export const StyledImage = styled( "img", styledImageCss );

export const StyledCardImageContainer = styled( Box, cardImageContainerCss );

export interface CardImageContainerProps {
    src: string;
}

export const CardImageContainer = ( { src }: CardImageContainerProps ) => {
    return (
        <StyledCardImageContainer>
            <StyledImage src={src} />
        </StyledCardImageContainer>
    );
};
