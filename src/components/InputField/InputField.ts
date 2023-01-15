import { css, styled } from "@styles";

export const inputFieldCss = css( {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    padding: "$inputFieldPadding1",
    width: "$full",
} );

export const InputField = styled( "input", inputFieldCss );
