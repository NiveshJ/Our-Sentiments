import type {
    CSS as StitchesCSS,
    PropertyValue,
    ScaleValue
} from "@stitches/react";
import { createStitches } from "@stitches/react";

export const {
    config,
    createTheme,
    css,
    getCssText,
    keyframes,
    globalCss,
    prefix,
    styled,
    theme,
    reset
} = createStitches( {
    theme: {
        colors: {
            complentaryColor: "#2C3333",
            accentColor: "#CBE4DE",
            secondaryColor: "#b5c0bc",
            primaryColor: "#ece1e0"
        },
        fonts: {
            // alegreyaSans: "AlegreyaSans', sans-serif",
            // exo2: "Exo2,sans-serif",
            sans: [ "Exo2,sans-serif", "'AlegreyaSans', sans-serif" ].join( "," )
        },
        fontSizes: {
            desktopLarge: ""
        },
        fontWeights: {
            desktopLarge: ""
        },
        letterSpacings: {
            desktopLarge: ""
        },
        lineHeights: {
            desktopLarge: ""
        },
        sizes: {
            0: "0rem",
            1: ".5rem",
            2: "1rem",
            3: "1.5rem",
            4: "2rem",
            5: "2.5rem",
            6: "3rem",
            7: "3.5rem",
            8: "4rem",
            9: "4.5rem",
            10: "5rem",
            11: "5.5rem",
            12: "6rem",
            13: "6.5rem",
            14: "7rem",
            productCardWidth: "15rem",
            productCardHeight: "20rem",
            full: "100%",
            half: "50%"
        },
        space: {
            0: "0rem",
            1: ".5rem",
            2: "1rem",
            3: "1.5rem",
            4: "2rem",
            5: "2.5rem",
            6: "3rem",
            7: "3.5rem",
            8: "4rem",
            9: "4.5rem",
            10: "5rem",
            11: "5.5rem",
            12: "6rem",
            13: "6.5rem",
            14: "7rem",
            inputFieldPadding1: ".3rem"
        },
        radii: {
            0: "0rem",
            1: ".5rem",
            2: "1rem",
            3: "1.5rem",
            4: "2rem",
            5: "2.5rem",
            6: "3rem",
            7: "3.5rem",
            8: "4rem",
            9: "4.5rem",
            10: "5rem",
            11: "5.5rem",
            12: "6rem",
            13: "6.5rem",
            14: "7rem",
            inputFieldBorderRadius: "0.2rem",
            circle: "50%"
        },
        borderWidths: {},
        shadows: {
            inputFieldShadow: "rgba(183,193,189,255) 0 0.18rem 0.5rem",
            shadowtype1:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            shadowtype2: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
            shadowtype3:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        },
        typography: {}
    },
    media: {
        dark: "(prefer-color-scheme: dark)",
        light: "(prefer-color-scheme: light)",
        bp1: "(min-width: 640px)",
        bp2: "(min-width: 768px)",
        bp3: "(min-width: 1024px)"
    },
    utils: {
        p: ( value: ScaleValue<"padding"> | string | number ) => ( {
            padding: value
        } ),
        pt: ( value: ScaleValue<"paddingTop"> | string | number ) => ( {
            paddingTop: value
        } ),
        pr: ( value: ScaleValue<"paddingRight"> | string | number ) => ( {
            paddingRight: value
        } ),
        pb: ( value: ScaleValue<"paddingBottom"> | string | number ) => ( {
            paddingBottom: value
        } ),
        pl: ( value: ScaleValue<"paddingLeft"> | string | number ) => ( {
            paddingLeft: value
        } ),
        px: ( value: ScaleValue<"paddingLeft"> | string | number ) => ( {
            paddingLeft: value,
            paddingRight: value
        } ),
        py: ( value: ScaleValue<"paddingTop"> | string | number ) => ( {
            paddingTop: value,
            paddingBottom: value
        } ),
        m: ( value: ScaleValue<"margin"> | string | number ) => ( {
            margin: value
        } ),
        mt: ( value: ScaleValue<"marginTop"> | string | number ) => ( {
            marginTop: value
        } ),
        mr: ( value: ScaleValue<"marginRight"> | string | number ) => ( {
            marginRight: value
        } ),
        mb: ( value: ScaleValue<"marginBottom"> | string | number ) => ( {
            marginBottom: value
        } ),
        ml: ( value: ScaleValue<"marginLeft"> | string | number ) => ( {
            marginLeft: value
        } ),
        mx: ( value: ScaleValue<"marginLeft"> | string | number ) => ( {
            marginLeft: value,
            marginRight: value
        } ),
        my: ( value: ScaleValue<"marginTop"> | string | number ) => ( {
            marginTop: value,
            marginBottom: value
        } ),
        ta: ( value: ScaleValue<"textAlign"> | string | number ) => ( {
            textAlign: value
        } ),

        fd: ( value: ScaleValue<"flexDirection"> | string | number ) => ( {
            flexDirection: value
        } ),
        fw: ( value: ScaleValue<"flexWrap"> | string | number ) => ( {
            flexWrap: value
        } ),

        ai: ( value: ScaleValue<"alignItems"> | string | number ) => ( {
            alignItems: value
        } ),
        ac: ( value: ScaleValue<"alignContent"> | string | number ) => ( {
            alignContent: value
        } ),
        jc: ( value: ScaleValue<"justifyContent"> | string | number ) => ( {
            justifyContent: value
        } ),
        as: ( value: ScaleValue<"alignSelf"> | string | number ) => ( {
            alignSelf: value
        } ),
        fg: ( value: ScaleValue<"flexGrow"> | string | number ) => ( {
            flexGrow: value
        } ),
        fs: ( value: ScaleValue<"flexShrink"> | string | number ) => ( {
            flexShrink: value
        } ),
        fb: ( value: ScaleValue<"flexBasis"> | string | number ) => ( {
            flexBasis: value
        } ),
        bc: ( value: ScaleValue<"backgroundColor"> | string | number ) => ( {
            backgroundColor: value
        } ),
        br: ( value: ScaleValue<"borderRadius"> | string | number ) => ( {
            borderRadius: value
        } ),
        btrr: (
            value: ScaleValue<"borderTopRightRadius"> | string | number
        ) => ( {
            borderTopRightRadius: value
        } ),
        bbrr: (
            value: ScaleValue<"borderBottomRightRadius"> | string | number
        ) => ( {
            borderBottomRightRadius: value
        } ),
        bblr: (
            value: ScaleValue<"borderBottomLeftRadius"> | string | number
        ) => ( {
            borderBottomLeftRadius: value
        } ),
        btlr: ( value: ScaleValue<"borderTopLeftRadius"> | string | number ) => ( {
            borderTopLeftRadius: value
        } ),
        bs: ( value: ScaleValue<"boxShadow"> | string | number ) => ( {
            boxShadow: value
        } ),

        lh: ( value: ScaleValue<"lineHeight"> | string | number ) => ( {
            lineHeight: value
        } ),
        ox: ( value: ScaleValue<"overflowX"> | string | number ) => ( {
            overflowX: value
        } ),
        oy: ( value: ScaleValue<"overflowY"> | string | number ) => ( {
            overflowY: value
        } ),
        pe: ( value: ScaleValue<"pointerEvents"> | string | number ) => ( {
            pointerEvents: value
        } ),
        us: ( value: ScaleValue<"userSelect"> | string | number ) => ( {
            WebkitUserSelect: value,
            userSelect: value
        } ),
        userSelect: ( value: ScaleValue<"userSelect"> | string | number ) => ( {
            WebkitUserSelect: value,
            userSelect: value
        } ),
        size: ( value: ScaleValue<"width"> | string | number ) => ( {
            width: value,
            height: value
        } ),
        align: ( value: ScaleValue<"justifyContent"> | string | number ) => ( {
            justifyContent: value,
            alignItems: value
        } ),
        appearance: ( value: ScaleValue<"appearance"> | string | number ) => ( {
            WebkitAppearance: value,
            appearance: value
        } ),
        backgroundClip: (
            value: ScaleValue<"backgroundClip"> | string | number
        ) => ( {
            WebkitBackgroundClip: value,
            backgroundClip: value
        } ),
        typography: ( value: ScaleValue<"lineHeight"> | string | number ) => ( {
            fontSize: value,
            fontWeight: value,
            lineHeight: value,
            letterSpacing: value
        } ),
        textOverflow: ( value: PropertyValue<"textOverflow"> ) => ( {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: value
        } )
    }
} );

export type CSS = StitchesCSS<typeof config>;
export type PropsWithCSS = { css?: CSS };
