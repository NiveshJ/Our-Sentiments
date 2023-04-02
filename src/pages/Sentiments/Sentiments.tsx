import { ProductReviewData } from "@src/helpers/types.d";

export interface ReviewGridProps {
    reviews: ProductReviewData[];
}

export const Sentiments = ( { reviews }: ReviewGridProps ) => {
    const df = new dfd.DataFrame( reviews );
    const graphCanvas = document.createElement( "div" );
    graphCanvas.setAttribute( "id", "graph-plot" );
    const canvasContainer = document.getElementById( "graph-canvas" );
    canvasContainer?.appendChild( graphCanvas );
    df.print();
    if ( document.getElementById( "graph-plot" ) ) df.plot( "graph-plot" ).scatter();

    return null;
};
