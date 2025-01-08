import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselProps } from './Carousel.types';
import 'swiper/css/effect-flip'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import './Carousel.styles.scss'

register();
export function Carousel({ images }: CarouselProps) {
    return (
        <section style={{ width: '98%'}} >
            <Swiper
                className="copaflora-carousel-article"
                style={{ width: "100%", height: "350px", marginTop:"none" }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {images.map((item) => (
                    <SwiperSlide key={item.id}>
                        <h2>{item.alt}</h2>
                        <img
                            src={item.imgLink}
                            alt={item.alt}
                            className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
