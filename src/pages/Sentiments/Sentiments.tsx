import { ReviewData } from "@src/helpers/types.d";

export interface ReviewGridProps {
  reviews: ReviewData[];
}

export const Sentiments = ( { reviews }: ReviewGridProps ) => {
    const df = new dfd.DataFrame( reviews );
    const graphBarCanvas = document.createElement( "div" );
    const graphBarCanvas0 = document.createElement( "div" );
    const graphBarCanvas1 = document.createElement( "div" );
    const graphBarCanvas2 = document.createElement( "div" );
    const graphViolinCanvas = document.createElement( "div" );
    const pieCanvas = document.createElement( "div" );
    const groupByMax = document.createElement( "div" );
    const groupByMean = document.createElement( "div" );
    const groupByMin = document.createElement( "div" );

    graphBarCanvas.setAttribute( "id", "graph-plot" );
    graphBarCanvas0.setAttribute( "id", "graph-plot0" );
    graphBarCanvas1.setAttribute( "id", "graph-plot1" );
    graphBarCanvas2.setAttribute( "id", "graph-plot2" );
    pieCanvas.setAttribute( "id", "pie-canvas" );
    graphViolinCanvas.setAttribute( "id", "graph-Violin" );

    const canvasContainer = document.getElementById( "graph-canvas" );
    canvasContainer?.appendChild( graphBarCanvas );
    canvasContainer?.appendChild( graphBarCanvas0 );
    canvasContainer?.appendChild( graphBarCanvas1 );
    canvasContainer?.appendChild( graphBarCanvas2 );
    canvasContainer?.appendChild( pieCanvas );
    canvasContainer?.appendChild( graphViolinCanvas );

    df.print();

    if ( document.getElementById( "graph-plot" ) )
        df.plot( "graph-plot" ).bar( {
            config: {
                columns: ["positive", "negative", "neutral"],
                displayModeBar: true,
            },
            layout: {
                title: {
                    text: "Graph for no. of reviews and values",
                },
                yaxis: {
                    title: "Range between 0-1",
                },
                xaxis: {
                    title: "Number of Reviews",
                },
            },
        } );

    df.plot( "graph-plot0" ).line( {
        config: {
            columns: ["positive"],
            displayModeBar: true,
        },
        layout: {
            title: {
                text: "Graph for positive values",
            },
            yaxis: {
                title: "Range between 0-1",
            },
            xaxis: {
                title: "Number of Reviews",
            },
        },
    } );

    df.plot( "graph-plot1" ).line( {
        config: {
            columns: ["neutral"],
            fill: {
                color: "#000000",
            },
        },
        layout: {
            title: {
                text: "Graph for neutral values",
            },
            yaxis: {
                title: "Range between 0-1",
            },
            xaxis: {
                title: "Number of Reviews",
            },
            legend: {
                bgcolor: "#fcba03",
                bordercolor: "#444",
                borderwidth: 1,
                font: { family: "Arial", size: 10, color: "#fff" },
            },
        },
    } );

    df.plot( "graph-plot2" ).line( {
        config: {
            columns: ["negative"],
            displayModeBar: true,
        },
        layout: {
            title: {
                text: "Graph for negative values",
            },
            yaxis: {
                title: "Range between 0-1",
            },
            xaxis: {
                title: "Number of Reviews",
            },
        },
    } );

    df.plot( "pie-canvas" ).pie( {
        config: {
            labels: "reviewStars",
            columns: ["positive", "negative"],
            columnPositions: [0, 1],
            rowPositions: [0, 1],
            grid: { rows: 2, columns: 2 },
        },
        layout: { title: "Pie" },
    } );

    df.plot( "graph-Violin" ).violin( {
        config: {
            columns: ["positive", "negative", "neutral"],
        },
        layout: { title: "Violin Plot" },
    } );

    // let df_Pos = new dfd.DataFrame(
    //     { reviews: "reviewTitle" },
    //     { columns: "positive" }
    // );
    // df_Pos.print();
    // df_Pos.max( { axis: 0 } ).print();

    // df.groupby( [ "reviewStars" ] ).col( [ "positive" ] ).max().print();
    // df.max( { axis: 0 } ).print();

    // df.groupby( [ "reviewStars" ] ).col( [ "neutral" ] ).mean().print();
    // df.groupby( [ "reviewStars" ] ).col( [ "negative" ] ).min().print();

    // df.groupby( [ "reviewTitle" ] )
    //     .col( [ "positive", "negative", "neutral" ] )
    //     .cumMin()
    //     .print();

    // df.groupby( [ "reviewTitle" ] )
    //     .col( [ "positive", "negative", "neutral" ] )
    //     .mean()
    //     .print();
    // df.groupby( [ "reviewTitle" ] ).col( [ "positive" ] ).min().print();
    // df.groupby( [ "reviewTitle" ] ).col( [ "negative" ] ).max().print();
    // df.groupby( [ "reviewTitle" ] ).col( [ "negative" ] ).min().print();
    // df.groupby( [ "reviewTitle" ] ).col( [ "neutral" ] ).max().print();
    // df.groupby( [ "reviewTitle" ] ).col( [ "neutral" ] ).min().print();

    return null;
};
