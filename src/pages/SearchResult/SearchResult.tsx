import { Box, Grid, SearchBar } from "@src/components";
import { Card } from "@src/components/Card";
import { useGetProducts } from "@src/hooks";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
interface ApiData {
    id: string;
    title: string;
    image: string;
}

type Params = {
    productName: string;
};

export const SearchResult = () => {
    const { productName } = useParams<Params>();
    const searchInputRef = useRef<HTMLInputElement>( null );
    const { data: products, isLoading, error } = useGetProducts( productName! );

    return (
        <Box css={{ py: "$2" }}>
            <SearchBar
                ref={searchInputRef}
                defaultValue={productName!}
                redirectToSearchPage={true}
            />
            <Grid align={"center"} columns={"auto"} justify={"center"}>
                {products &&
                    products?.map( ( product, index ) => {
                        const { id, imageUrl, title } = product;
                        return (
                            <Card
                                productId={id}
                                size={"small"}
                                animate={"scale"}
                                key={index}
                                title={title}
                                imageSrc={imageUrl}
                            />
                        );
                    } )}
            </Grid>
        </Box>
    );
};
