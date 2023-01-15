import { Grid, Separator } from "@src/components";
import { Card } from "@src/components/Card";
import mars from "@src/assets/images/mars.jpg";
export const SearchResult = () => {
    return (
        <Card variant={"standard"}>
            <img src={mars} width="100%" />
            <Grid
                justify={"center"}
                align={"start"}
                columns={"2"}
                gapX={"2"}
                gapY={"1"}
            >
                <p>p1</p>
                <p>p2</p>
                <p>p3</p>
                <p>p4</p>
            </Grid>
        </Card>
    );
};
