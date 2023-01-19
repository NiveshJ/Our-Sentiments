import { FlexBox, InputField, SearchBar } from "@src/components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Homepage = () => {
    const [ productName, setProductName ] = useState<string>( "" );

    const handleInputChange = ( e: any ) => {
        const { value } = e.target;
        setProductName( value );
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate( `/search-results/${productName}` );
    };

    useEffect( () => {
        const handleKeydownEvent = ( e: KeyboardEvent ) => {
            if ( e.key === `Enter` ) handleClick();
        };

        document.addEventListener( "keydown", handleKeydownEvent );

        return () => {
            document.removeEventListener( "keydown", handleKeydownEvent );
        };
    } );

    return (
        <FlexBox center size={"full"}>
            <SearchBar handleClick={handleClick}>
                <InputField
                    value={productName}
                    onChange={handleInputChange}
                    placeholder="Search for products"
                    type={"searchBarInput"}
                />
            </SearchBar>
        </FlexBox>
    );
};
