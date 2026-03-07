
export type UserInfo = {
    name: string;
    age?: number;
    occupation?: string;
    location?: string;
    favoriteGenres?: string[];
    favoriteAuthors?: string[];
}

export type BookInformation = {
    title: string;
    description: string;
    genres: string[];
    authors: string[];
}

export type BookRecommendation = {
    fit_with_preferences: boolean;
    match_score: number;
    reason_for_fit: string;
}

export type InferenceResult = {
    book_information: BookInformation;
    recommendation: BookRecommendation;
}