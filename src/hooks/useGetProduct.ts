import { axiosInstance, ProductData } from "@src/helpers";
import { useQuery } from "@tanstack/react-query";

const getProductFn = async ( id: string ) => {
    const { data: product } = await axiosInstance.get( `products/${id}` );
    return product[ 0 ];
};

export const useGetProduct = ( id: string ) => {
    return useQuery<Partial<ProductData>>( [ "useGetProduct", id ], () =>
        getProductFn( id )
    );
};
