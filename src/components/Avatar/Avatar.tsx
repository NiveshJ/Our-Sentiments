import { Box } from "../Box";
import { Flex } from "../Flex";
import { FlexBox } from "../FlexBox";

interface AvatarProps {
    name: string;
}

export const Avatar = ( { name }: AvatarProps ) => {
    const [ firstName, lastName ] = name.split( " " );

    const avatarText = `${firstName ? firstName.substring( 0, 1 ) : ""} ${
        lastName ? lastName?.substring( 0, 1 ) : ""
    }`;

    return (
        <FlexBox
            center
            size={"6"}
            css={{
                backgroundColor: "Black",
                borderRadius: "$circle",
                color: "White",
                p: "$1"
            }}
        >
            <h2>{avatarText}</h2>
        </FlexBox>
    );
};
