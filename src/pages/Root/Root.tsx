import { ThemeProvider } from "styled-components";
import { ProductCard } from "../../ui/components";
import { Carousel } from "../../ui/components/Carousel";
import { CarouselItemProp } from "../../ui/components/Carousel/Carousel.types";
import { Navbar } from "../../ui/components/Navbar";
import './Root.styles.scss'
import { theme } from "../../shared";

const data: CarouselItemProp[] = [
    { id: 1, imgLink: '/img-copaflora-amazonia-01.jpg', alt: 'Teste', linkNav: '' },
    { id: 2, imgLink: '/img-copaflora-slide-produtos-03.jpg', alt: '', linkNav: '' },
]

export function Root() {
    return (

        <div className="root">
            <Navbar />
            <ProductCard />
            {/* <Carousel images={data} />
            <Carousel images={data} />
            <Carousel images={data} />
            <Carousel images={data} /> */}
        </div>

    )
}
