import { css, styled } from "@src/styles";

export const buttonCss = css( {
    transition: "0.2s ease-in-out",
    "&:hover": {
        scale: ".98"
    },
    variants: {
        variant: {
            primaryButton: {
                borderRadius: "$1",
                padding: "$2 $3",
                color: "$accentColor",
                cursor: "pointer",
                backgroundColor: "$complentaryColor",
                border: "none"
            },
            floatingButton: {
                borderRadius: "$1",
                padding: "$2 $3",
                color: "$accentColor",
                cursor: "pointer",
                backgroundColor: "$complentaryColor",
                border: "none",
                position: "sticky",
                bottom: "$2",
                left: "50%",
                transform: "translateX(-50%)"
            }
        }
    }
} );

export const Button = styled( "button", buttonCss );
