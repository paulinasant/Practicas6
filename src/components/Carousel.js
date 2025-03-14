import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Carousel = () => {
    return(
    <Swiper
    modules ={[Navigation,Pagination,Autoplay]}
    spaceBetween = {50}
    navigation
    pagination ={{clickable: true}}
    autoplay ={{ delay:3000}}
    style={{width: "60%", height: "60%"}}
    >

    <SwiperSlide >
        <img src ="dispositiva1.jpg"  alt="Slide 1" className ="slide"/>
    </SwiperSlide>

        <SwiperSlide>
            <img src ="dispositiva2.jpg"  alt="Slide 2" className ="slide"/>
        </SwiperSlide>

        <SwiperSlide>
            <img src ="dispositiva3.jpg"  alt="Slide 3" className ="slide"/>
        </SwiperSlide>

</Swiper>

    )
};

export default Carousel;