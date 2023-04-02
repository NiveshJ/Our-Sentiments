import Rive from "@rive-app/react-canvas";
import { CSS } from "@src/styles";
import { CSSProperties } from "react";

const riveCanvasCss: CSS = {
    size: "full"
};

export const Loader = () => {
    return (
        <Rive
            src="/loader_animation.riv"
            style={riveCanvasCss as CSSProperties}
        />
    );
};
