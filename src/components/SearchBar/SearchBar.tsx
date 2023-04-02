import { css, styled } from "@src/styles";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "../Flex";
import { InputField } from "../InputField";

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

interface SearchBarProps {
    defaultValue: string;
    getSearchedValue?: ( v: string ) => void;
    redirectToSearchPage?: boolean;
    placeholder?: string;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
    (
        { defaultValue, getSearchedValue, placeholder, redirectToSearchPage },
        forwardedRef
    ) => {
        const [ inputValue, setInputValue ] = useState( defaultValue );
        const navigate = useNavigate();

        const handleAction = () => {
            if ( getSearchedValue ) getSearchedValue( inputValue );
            if ( redirectToSearchPage ) navigate( `/search-results/${inputValue}` );
        };

        const handleChange = ( e: any ) => {
            const { value } = e.target;
            setInputValue( value );
        };

        useEffect( () => {
            const handleEvent = ( e: KeyboardEvent ) => {
                if ( e.key === "Enter" ) {
                    handleAction();
                }
            };
            document.addEventListener( "keydown", handleEvent );

            return () => {
                document.removeEventListener( "keydown", handleEvent );
            };
        } );

        return (
            <StyledSearchBar type={"productSearchBar"} align={"center"}>
                <InputField
                    ref={forwardedRef}
                    onChange={handleChange}
                    value={inputValue}
                    type={"search"}
                    placeholder={placeholder}
                />
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
                    onClick={handleAction}
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </StyledSearchBar>
        );
    }
);
