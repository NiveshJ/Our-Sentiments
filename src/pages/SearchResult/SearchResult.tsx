import { Box, Grid, InputField, SearchBar } from "@src/components";
import { Card } from "@src/components/Card";
import { axiosInstance } from "@src/helpers";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
interface ApiData {
    id: string;
    title: string;
    image: string;
}

type Params = {
    productName: string;
};

export const SearchResult = () => {
    const { productName: searchedProduct } = useParams<Params>();
    const [ productData, setProductData ] = useState<ApiData[]>( [] );
    const [ productName, setProductName ] = useState<string | undefined>(
        searchedProduct
    );
    const navigate = useNavigate();

    const fetchData = useCallback( async () => {
        try {
            const { data, status } = await axiosInstance.get(
                `/search/${searchedProduct}`
            );
            setProductData( data );
        } catch ( error ) {
            console.log( error );
        }
    }, [ searchedProduct ] );

    const handleInputChange = ( e: any ) => {
        const { value } = e.target;
        setProductName( value );
    };

    const handleClick = () => {
        navigate( `/search-results/${productName}` );
    };

    useEffect( () => {
        fetchData();
    }, [ searchedProduct ] );

    return (
        <Box css={{ py: "$2" }}>
            <SearchBar handleClick={handleClick}>
                <InputField
                    value={productName}
                    onChange={handleInputChange}
                    placeholder="Search for products"
                    type={"searchBarInput"}
                />
            </SearchBar>
            <Grid columns={4}>
                {productData &&
                    productData?.map( ( product, key ) => {
                        const { id, image, title } = product;
                        return (
                            <Card
                                productId={id}
                                size={"small"}
                                animate={"scale"}
                                key={id}
                                title={title}
                                imageSrc={image}
                            />
                        );
                    } )}
            </Grid>
        </Box>
    );
};
