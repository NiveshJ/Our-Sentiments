import {
    Avatar,
    Box,
    Button,
    CardContainer,
    CardTitle,
    Flex,
    Grid
} from "@src/components";
import { ReviewGrid } from "@src/components/ReviewGrid";
import { ReviewType } from "@src/helpers/types.d";
import { useGetProduct, useGetReviews } from "@src/hooks";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Sentiments } from "../Sentiments";

interface apiData {
    reviewerName: string;
    reviewTitle: string;
    reviewBody: string;
    reviewStars: string;
}

export const ProductReview = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [ showSentiments, setShowSentiments ] = useState( false );

    const { data: product } = useGetProduct( productId! );
    const { data: reviews } = useGetReviews(
        productId!,
        ReviewType.AllReviews,
        50
    );

    const handleClick = () => {
        setShowSentiments( !showSentiments );
    };

    return (
        <Box id="graph-canvas" size={"full"}>
            {!showSentiments ? (
                <ReviewGrid reviews={reviews!} />
            ) : (
                <Sentiments reviews={reviews!} />
            )}
            <Button variant={"floatingButton"} onClick={handleClick}>
                {`${
                    showSentiments
                        ? `Show Product Reviews`
                        : `Get Sentiment Analysis`
                }`}
            </Button>
        </Box>
    );
};
