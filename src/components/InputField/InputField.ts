import { css, styled } from "@styles";

export const inputFieldCss = css( {
    backgroundColor: "White",
    border: "none",
    borderBottom: "1px solid Black",
    outline: "none",
    padding: "$inputFieldPadding1",
    width: "$full"
} );

export const InputField = styled( "input", inputFieldCss );
