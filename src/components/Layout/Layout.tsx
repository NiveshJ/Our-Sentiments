import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader";

export const Layout = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    );
};
