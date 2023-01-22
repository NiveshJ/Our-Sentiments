import { css, styled } from "@src/styles";

export const buttonCss = css( {
    variants: {
        variant: {
            primaryButton: {
                borderRadius: "$1",
                padding: "$1",
                color: "$accentColor",
                backgroundColor: "$complentaryColor",
                border: "none",
            },
        },
    },
} );

export const Button = styled( "button", buttonCss );
