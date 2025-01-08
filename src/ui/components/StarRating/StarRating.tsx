import { Box, Rating } from "@mui/material";
import type { StarRatingType } from "./StarRating.types";

export function StarRating({ readRating, ratingValue, changeRatingValue, sx, size }: StarRatingType) {

    function changeValue(event: React.SyntheticEvent<Element, Event>, newValue: number | null) {
        const updatedValue = newValue ?? 0;
      
        if (changeRatingValue) {
            changeRatingValue(updatedValue);
        }
    }

    return (
        <Box
            sx={{ ...sx }}
            component="fieldset"
            mb={3}
            borderColor="transparent">

            <Rating
                name="half-rating"
                value={ratingValue}
                onChange={changeValue}
                precision={0.5}
                readOnly={readRating === true ? true : false}
                size={size}
            />
        </Box>
    );
}
