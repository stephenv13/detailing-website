import {Paper} from '@mui/material'
import Image from 'next/dist/client/image';

// SWIPER CAROUSEL
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
        return (
            <Paper elevation={1} sx={{mx: 5, mt: 1}}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
  
              <SwiperSlide>
                <Image src={'/bmw2.jpg'} width={1920/2} height={1080/2} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/tesla.jpg'} width={1920/2} height={1080/2} alt='image here' ></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/lambo.jpg'} width={1920/2} height={1080/2} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/mercedes.jpg'} width={1920/2} height={1080/2} alt='image here'></Image>
              </SwiperSlide>
            </Swiper>   
          </Paper> 
        );
}