import { ReviewData } from "@src/helpers/types.d";

export interface ReviewGridProps {
    reviews: ReviewData[];
}

export const Sentiments = ( { reviews }: ReviewGridProps ) => {
    const df = new dfd.DataFrame( reviews );
    const graphCanvas = document.createElement( "div" );
    graphCanvas.setAttribute( "id", "graph-plot" );
    const canvasContainer = document.getElementById( "graph-canvas" );
    canvasContainer?.appendChild( graphCanvas );
    df.print();
    if ( document.getElementById( "graph-plot" ) )
        df.plot( "graph-plot" ).bar( {
            config: {
                columns: [ "positive", "negative", "neutral" ]
            }
        } );

    return null;
};
