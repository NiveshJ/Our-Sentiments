import {
    Avatar,
    Box,
    CardContainer,
    CardTitle,
    Flex,
    Grid
} from "@src/components";
import { useGetProduct, useGetReviews } from "@src/hooks";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface apiData {
    reviewerName: string;
    reviewTitle: string;
    reviewBody: string;
    reviewStars: string;
}

export const ProductReview = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const { data: product } = useGetProduct( productId! );
    const { data: reviews } = useGetReviews( productId! );

    return (
        <Box>
            <Grid>
                {reviews &&
                    reviews?.map(
                        (
                            {
                                reviewBody,
                                reviewStars,
                                reviewTitle,
                                reviewerName
                            },
                            index
                        ) => {
                            return (
                                <CardContainer
                                    direction={"column"}
                                    key={index}
                                    gap={"1"}
                                >
                                    <Flex align={"center"} gap="2">
                                        <Avatar name={reviewerName} />
                                        <h1>{reviewerName}</h1>
                                    </Flex>
                                    <h3>Rating: {reviewStars}</h3>
                                    <CardTitle>{reviewTitle}</CardTitle>
                                    {reviewBody}
                                </CardContainer>
                            );
                        }
                    )}
            </Grid>
        </Box>
    );
};
