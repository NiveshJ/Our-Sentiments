import { Box, Grid } from "@src/components";
import { Card } from "@src/components/Card";
import { axiosInstance } from "@src/helpers";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface apiData {
  id: string;
  title: string;
  image: string;
}

export const SearchResult = () => {
    const { productName } = useParams();
    const [productData, setProductData] = useState<apiData[]>( [] );
    const fetchData = useCallback( async () => {
        try {
            const { data, status } = await axiosInstance( `/search/${productName}` );
            setProductData( data );
        } catch ( error ) {
            console.log( error );
        }
    }, [productName] );

    useEffect( () => {
        fetchData();
    }, [] );

    return (
        <Grid columns={4}>
            {productData &&
        productData?.map( ( product, key ) => {
            const { id, image, title } = product;
            return (
                <Card
                    productId={id}
                    size={"small"}
                    key={id}
                    title={title}
                    imageSrc={image}
                />
            );
        } )}
        </Grid>
    );
};
