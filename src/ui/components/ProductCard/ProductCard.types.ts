export interface ProductCardType {
  product: {
    productTitle: string;
    oldPrice: string;
    newPrice: string;
    imgUrl: string;
    starRatingValue: number;
    idProduct: string;
  };
  onProductCartSelectionChange: (value: string) => void;
  onFavoriteProductCartSelected: (value: string) => void;
}
