import { useQuery } from "@tanstack/react-query";
import { axiosInstance, ProductReviewData } from "@src/helpers";

const getReviewsFn = async ( productId: string ) => {
    const { data: reviews } = await axiosInstance.get(
        `products/${productId}/reviews`
    );
    return reviews;
};

export const useGetReviews = ( productId: string ) => {
    return useQuery<ProductReviewData[]>( [ "getReviews", productId ], () =>
        getReviewsFn( productId )
    );
};
