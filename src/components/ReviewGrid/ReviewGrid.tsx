import { ProductReviewData } from "@src/helpers";
import { Avatar } from "../Avatar";
import { CardContainer, CardTitle } from "../Card";
import { Flex } from "../Flex";
import { Grid } from "../Grid";

export interface ReviewGridProps {
    reviews: ProductReviewData[];
}

export const ReviewGrid = ( { reviews }: ReviewGridProps ) => {
    return (
        <Grid>
            {reviews &&
                reviews?.map(
                    (
                        { reviewBody, reviewStars, reviewTitle, reviewerName },
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
    );
};
