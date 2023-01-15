import { boxCss, Flex, InputField, SearchIcon } from "@src/components";
import { css, styled } from "@src/styles";

export const styledSearchBarCss = css( {
    variants: {
        type: {
            productSearchBar: {
                width: "$half",
                height: "$3",
                borderRadius: "$inputFieldBorderRadius",
                boxShadow: "$inputFieldShadow",
                padding: "$3",
                "@bp1": {
                    height: "$5",
                },
            },
        },
    },
} );

export const StyledSearchBar = styled( Flex, styledSearchBarCss );

export const SearchBar = ( { children }: any ) => {
    return (
        <StyledSearchBar type={"productSearchBar"} align={"center"}>
            {children}
        </StyledSearchBar>
    );
};
