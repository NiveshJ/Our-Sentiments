import { Flex } from "../Flex";
import { css, styled } from "@src/styles";
import { PropsWithChildren } from "react";

export const styledSearchBarCss = css( {
    margin: "auto",
    variants: {
        type: {
            productSearchBar: {
                width: "$half",
                height: "$3",
                borderRadius: "$inputFieldBorderRadius",
                boxShadow: "$inputFieldShadow",
                padding: "$3",
                "@bp1": {
                    height: "$5"
                }
            }
        }
    }
} );

export const StyledSearchBar = styled( Flex, styledSearchBarCss );

interface SearchBarProps extends PropsWithChildren {
    handleClick: () => void;
}

export const SearchBar = ( { children, handleClick }: SearchBarProps ) => {
    return (
        <StyledSearchBar type={"productSearchBar"} align={"center"}>
            {children}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
                opacity="75%"
                onClick={handleClick}
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </StyledSearchBar>
    );
};
