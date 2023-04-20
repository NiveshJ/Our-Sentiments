import { Box, Button } from "@src/components";
import { ReviewGrid } from "@src/components/ReviewGrid";
import { ReviewData, ReviewType } from "@src/helpers/types.d";
import { useGetProduct, useGetReviews, useGetSentiments } from "@src/hooks";
import { useMemo, useState } from "react";
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
    const [showSentiments, setShowSentiments] = useState( false );

    const { data: product } = useGetProduct( productId! );
    const { data: reviews } = useGetReviews(
    productId!,
    ReviewType.AllReviews,
    10
    );

    const arrayTitles: string[] | unknown = useMemo( () => {
        const reviewsT: unknown = reviews?.map( ( { reviewTitle } ) => reviewTitle );
        return reviewsT;
    }, [reviews] );

    const { data: sentiments } = useGetSentiments( arrayTitles as string[] );

    const reviewData: ReviewData[] | unknown = useMemo( () => {
        const data: unknown = reviews?.map( ( review, index ) => {
            return {
                ...review,
                positive: sentiments?.[index][2]?.score,
                neutral: sentiments?.[index][1]?.score,
                negative: sentiments?.[index][0]?.score,
            };
        } );
        return data;
    }, [reviews, sentiments] );

    const handleClick = () => {
        setShowSentiments( !showSentiments );
    };

    return (
        <Box id="graph-canvas" size={"full"}>
            {!showSentiments ? (
                <ReviewGrid reviews={reviews!} />
            ) : reviewData ? (
                <Sentiments reviews={reviewData as ReviewData[]} />
            ) : null}
            <Button variant={"floatingButton"} onClick={handleClick}>
                {`${
                    showSentiments ? `Show Product Reviews` : `Get Sentiment Analysis`
                }`}
            </Button>
        </Box>
    );
};
