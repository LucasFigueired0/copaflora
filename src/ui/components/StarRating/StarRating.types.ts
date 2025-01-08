export type StarRatingType = {
  readRating: boolean;
  ratingValue: number | null;
  changeRatingValue?: (value: number) => void;
  sx?: object;
  size?: "large" | "small" | "medium";
};
