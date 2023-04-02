import { FlexBox, InputField, SearchBar } from "@src/components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Homepage = () => {
    const [ productName, setProductName ] = useState<string>( "" );

    const navigate = useNavigate();

    const handleInputChange = ( value: string ) => {
        setProductName( value );
        navigate( `/search-results/${productName}` );
    };

    return (
        <FlexBox center size={"full"}>
            <SearchBar
                defaultValue={productName}
                placeholder="Search for products"
                redirectToSearchPage
            />
        </FlexBox>
    );
};
