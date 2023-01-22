import { Homepage, SearchResult, ProductReview, Sentiments } from "@src/pages";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@src/components";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/">
                    <Route index element={<Homepage />} />
                    <Route
                        path="search-results/:productName"
                        element={<SearchResult />}
                    />
                    <Route path="review-results/:productId" element={<ProductReview />} />
                    <Route
                        path="review-results/:productId/sentiments"
                        element={<Sentiments />}
                    />
                </Route>
            </Route>
        </Routes>
    );
};
