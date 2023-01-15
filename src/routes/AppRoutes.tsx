import { Homepage, SearchResult } from "@src/pages";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@src/components";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/">
                    <Route index element={<Homepage />} />
                    <Route path="search-results" element={<SearchResult />} />
                </Route>
            </Route>
        </Routes>
    );
};
