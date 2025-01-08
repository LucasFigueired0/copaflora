import { useState } from "react";
import { Box, CardMedia, Typography, Card, CardActions, CardContent, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StarRating } from "../StarRating";
import type { ProductCardType } from "./ProductCard.types";
import { theme } from "../../Theme";

export function ProductCard({ product, onProductCartSelectionChange, onFavoriteProductCartSelected }: ProductCardType) {
  const [isFavorite, setIsFavorite] = useState(false);

  function onClickFavoriteItem() {
    setIsFavorite((prev) => !prev);
    onFavoriteProductCartSelected(product.idProduct)
  }
  function onClickCartItem() {
    onProductCartSelectionChange(product.idProduct)
  }

  const primaryColor = theme.palette.primary.main;
  return (
    <Card
      sx={{
        width: 240,
        height: 340,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: 2,
        background: "rgba(255, 255, 255, 0.80)",
      }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <CardMedia
          component="img"
          alt="Produto"
          width="100%"
          image={product.imgUrl}
          sx={{ borderBottom: `4px solid ${primaryColor}` }}
        />
        <Box sx={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
          <StarRating
            readRating={true}
            ratingValue={product.starRatingValue}
            sx={{
              '& .MuiRating-iconFilled': {
                color: '#F9EF00',
              },
              '& .MuiRating-iconEmpty': {
                color: '#F9EF00',
              }
            }}
          />
        </Box>
      </Box>

      <CardContent sx={{ width: "100%" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: primaryColor,
            fontWeight: "bold",
          }}
        >
          {product.productTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: primaryColor, fontSize: 16 }}>
          De <span style={{ textDecoration: "line-through" }}>R$ {product.oldPrice} </span>
          por <strong>{product.newPrice}</strong>
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            background: primaryColor,
          }}
        >
          Comprar
        </Button>

        <Box sx={{
          display: "flex",
          alignItems: "center"
        }} justifyContent="flex-end">
          <Box onClick={onClickFavoriteItem} sx={{ cursor: "pointer" }}>
            <FavoriteIcon
              sx={{
                color: primaryColor,
                display: isFavorite ? "none" : "block",
              }}
            />
            <FavoriteBorderIcon
              sx={{
                color: primaryColor,
                display: isFavorite ? "block" : "none",
              }}
            />
          </Box>
          <Button onClick={onClickCartItem}>
            <AddShoppingCartIcon sx={{ color: primaryColor }} />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
