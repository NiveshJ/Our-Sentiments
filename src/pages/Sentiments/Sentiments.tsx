import { Box } from "@src/components";
import { axiosInstance } from "@src/helpers";
import axiosHuggingFace from "@src/helpers/axiosHuggingFace";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface apiData {
  reviewerName: string;
  reviewTitle: string;
  reviewBody: string;
  reviewStars: string;
}

export const Sentiments = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState<apiData[]>( [] );

    const fetchData = useCallback( async () => {
        try {
            const { data, status } = await axiosInstance.get(
                `reviews/${productId}?maxPageLimit=2`
            );
            setProductData( data );
        } catch ( error ) {
            console.log( error );
        }
    }, [productId] );

    const fetchDataRoberta = useCallback(
        async ( reviewBody: unknown ) => {
            try {
                const response = await axiosHuggingFace.post( "", {
                    data: {
                        inputs: ["hungry"],
                    },
                } );
                console.log( response.data );
            } catch ( error ) {
                console.log( error );
            }
        },
        [productId]
    );

    useEffect( () => {
        fetchData();
        if ( productData ) {
            productData?.map( ( product, index ) => {
                const { reviewerName, reviewTitle, reviewBody, reviewStars } = product;
            } );
            fetchDataRoberta( "i like it" );
        }
        console.log( productData );
    }, [] );

    return;
};
