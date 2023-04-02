export type ProductData = {
    id: string;
    title: string;
    imageUrl: string;
};

export type ProductReviewData = {
    reviewerName: string;
    reviewTitle: string;
    reviewBody: string;
    reviewStars: number;
};

export enum ReviewType {
    AllReviews = "all_reviews",
    VerifiedPurchaseOnly = "avp_only_reviews"
}
