import { ReviewType } from "./../helpers/types.d";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance, ProductReviewData } from "@src/helpers";

const getReviewsFn = async (
    productId: string,
    reviewType: ReviewType = ReviewType.AllReviews,
    noOfReviews: number = 200
) => {
    const { data: reviews } = await axiosInstance.get(
        `products/${productId}/reviews`,
        {
            params: {
                reviewType,
                noOfReviews
            }
        }
    );
    return reviews;
};

export const useGetReviews = (
    productId: string,
    reviewType?: ReviewType,
    noOfReviews?: number
) => {
    return useQuery<ProductReviewData[]>( [ "getReviews", productId ], () =>
        getReviewsFn( productId, reviewType, noOfReviews )
    );
};
