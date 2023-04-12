export type ProductData = {
    id: string;
    title: string;
    imageUrl: string;
};

export interface ProductReviewData {
    reviewerName: string;
    reviewTitle: string;
    reviewBody: string;
    reviewStars: number;
}

export interface ReviewData extends ProductReviewData {
    positive: number;
    neutral: number;
    negative: number;
}

export enum ReviewType {
    AllReviews = "all_reviews",
    VerifiedPurchaseOnly = "avp_only_reviews"
}
