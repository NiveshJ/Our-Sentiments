import { Avatar, CardContainer, CardTitle, Flex, Grid } from "@src/components";
import { axiosInstance } from "@src/helpers";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface apiData {
    reviewerName: string;
    reviewTitle: string;
    reviewBody: string;
    reviewStars: string;
}

export const ProductReview = () => {
    const { productId } = useParams();
    const [ productData, setProductData ] = useState<apiData[]>( [] );
    const fetchData = useCallback( async () => {
        try {
            const { data, status } = await axiosInstance.get(
                `reviews/${productId}?maxPageLimit=2`
            );
            setProductData( data );
        } catch ( error ) {
            console.log( error );
        }
    }, [ productId ] );

    useEffect( () => {
        fetchData();
    }, [] );

    return (
        <Grid>
            {productData &&
                productData?.map( ( product, index ) => {
                    const {
                        reviewerName,
                        reviewTitle,
                        reviewBody,
                        reviewStars
                    } = product;
                    return (
                        <CardContainer direction={"column"} key={index}>
                            <Flex align={"center"}>
                                <Avatar name={reviewerName} />
                                <h1>{reviewerName}</h1>
                            </Flex>
                            <h3>Rating: {reviewStars}</h3>
                            <CardTitle>{reviewTitle}</CardTitle>
                            {reviewBody}
                        </CardContainer>
                    );
                } )}
        </Grid>
    );
};
