export type CarouselItemProp = {
  id: number;
  imgLink: string;
  alt: string;
  linkNav: string;
};

export type CarouselProps = {
  images: CarouselItemProp[];
};
