import { Card } from "@src/components/Card";
import { axiosInstance } from "@src/helpers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

interface apiData {
  id: string;
  title: string;
  image: string;
}

export const SearchResult = () => {
    const { productName } = useParams();

    useEffect( () => {
        const fetchData: Promise<unknown> = async () => {
            const { data } = await axiosInstance( `/search/${productName}` );
            console.log( data );
            return data;
        };
        fetchData();
    }, [] );

    return (
        <Card
            size={"small"}
            imageSrc="https://images.pexels.com/photos/6633071/pexels-photo-6633071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title={"Some Product"}
        />
    );
};
