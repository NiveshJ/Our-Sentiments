import { axiosInstance, ProductData } from "@src/helpers";
import { useQuery } from "@tanstack/react-query";

const getProductsFn = async ( productName: string ) => {
    const { data: products } = await axiosInstance.get(
        `products/${productName}`
    );
    return products;
};

export const useGetProducts = ( productName: string ) => {
    return useQuery<ProductData[]>( [ productName ], () =>
        getProductsFn( productName )
    );
};
