import { Box } from "@src/components";
import { css, styled } from "@src/styles";

export const styledImageCss = css( {
    width: "$full",
    height: "$full",
    objectFit: "cover"
} );

export const StyledImage = styled( "img", styledImageCss );

export interface CardImageContainerProps {
    src: string;
}

export const CardImageContainer = ( { src }: CardImageContainerProps ) => {
    return (
        <Box width={"full"} css={{ height: "90%" }}>
            <StyledImage src={src} />
        </Box>
    );
};
