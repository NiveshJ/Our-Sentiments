import { Box } from "../Box";
import { Flex } from "../Flex";

interface AvatarProps {
    name: string;
}

export const Avatar = ( { name }: AvatarProps ) => {
    const [ firstName, lastName ] = name.split( " " );
    const avatarText =
        firstName?.substring( 0, 1 ) + " " + lastName?.substring( 0, 1 );

    return (
        <Box
            size={"5"}
            css={{
                backgroundColor: "Black",
                borderRadius: "$circle",
                color: "White",
                p: "$1"
            }}
        >
            <Flex center css={{ fontSize: ".5rem" }}>
                <h2>{avatarText}</h2>
            </Flex>
        </Box>
    );
};
