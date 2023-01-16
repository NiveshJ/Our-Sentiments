import { FlexBox, InputField, SearchBar } from "@src/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Homepage = () => {
    const [productName, setProductName] = useState<string>( "" );

    const handleInputChange = ( e: any ) => {
        const { value } = e.target;
        setProductName( value );
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate( `/search-results/${productName}` );
    };

    return (
        <FlexBox center size={"full"}>
            <SearchBar>
                <InputField
                    value={productName}
                    onChange={handleInputChange}
                    placeholder="***** Search your product here *****"
                    type={"searchBarInput"}
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
                    onClick={handleClick}
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </SearchBar>
        </FlexBox>
    );
};
