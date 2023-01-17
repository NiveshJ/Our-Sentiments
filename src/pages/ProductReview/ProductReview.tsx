import { Grid } from "@src/components";
import { axiosInstance } from "@src/helpers";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface apiData {
  reviewerName: string;
  reviewTitle: string;
  reviewBody: string;
  reviewStars: string;
}

export const ProductReview = () => {
    const { productName, productId } = useParams();
    const [productData, setProductData] = useState<apiData[]>( [] );
    const fetchData = useCallback( async () => {
        try {
            console.log( "hiii", productId );

            const data = await axios( `http://localhost:5000/reviews/${productId}` );
            console.log( productId, data );

            // setProductData( data );
        } catch ( error ) {
            console.log( error );
        }
    }, [productId] );

    useEffect( () => {
        fetchData();
    }, [] );

    return (
        <Grid>
            {productData &&
        productData?.map( ( product, key ) => {
            const { reviewerName, reviewTitle, reviewBody, reviewStars } =
            product;
            return (
                <div>
                    <div>{reviewTitle}</div>
                    <div>{reviewBody}</div>
                </div>
            );
        } )}
        </Grid>
    );
};
