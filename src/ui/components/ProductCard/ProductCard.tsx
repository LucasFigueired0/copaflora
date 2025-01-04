import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, CardMedia, Typography } from "@mui/material";
import { theme } from "../../../shared";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";

export function ProductCard() {

  const [isFavorite, setIsFavorite] = useState(false);

  function onClickFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Card
      sx={{

        width: 280,
        minWidth: 100,
        height: 411,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "revert-layer",
        borderRadius: 2,
        background: "rgba(255, 255, 255, 0.80)"
      }}
    >
      <CardMedia
        component="img"
        alt="Andiroba"
        height="269"
        width="280"
        image="public/img-copaflora-slide-produtos-03.jpg"
        sx={{ borderBottom: `4px solid ${theme.palette.primary.main}` }}
      />
      <CardContent sx={{ width: "100%" }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}>
          Óleo de andiroba
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontSize: 16 }}>
          De <span style={{ textDecoration: 'line-through' }}>R$ 55,65 </span>
          por <strong>R$40,58</strong>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button variant="contained" size="large" sx={
          {
            background: theme.palette.primary.main
          }
        }>Comprar</Button>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={onClickFavorite}>
            <FavoriteIcon sx={{
              color: theme.palette.primary.main,
              display: `${isFavorite && "none"}`
            }} />
            <FavoriteBorderIcon sx={{
              color: theme.palette.primary.main,
              display: `${!isFavorite && "none"}`
            }} />

          </Button>
          <Button>
            <AddShoppingCartIcon sx={{
              color: theme.palette.primary.main
            }} />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
