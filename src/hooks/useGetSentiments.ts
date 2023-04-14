import { useQuery } from "@tanstack/react-query";
import { axiosHuggingFace } from "@src/helpers";

const getSentiments = async ( reviewTitles: string[] ) => {
    const { data: sentiments } = await axiosHuggingFace.post( "", {
        inputs: reviewTitles
    } );
    return sentiments;
};

export const useGetSentiments = ( reviewTitles: string[] ) => {
    return useQuery( [ reviewTitles, "getSentiments" ], () =>
        getSentiments( reviewTitles )
    );
};
