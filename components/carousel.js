import {Paper} from '@mui/material'
import Image from 'next/image';

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
          <Paper elevation={0} sx={{mx: 5, mt: 1}}>
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
                <Image src={'/4runner.jpg'} width={6048/8} height={4032/8} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/DirtySeats.jpg'} width={6048/8} height={4032/8} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/DirtySeats2.jpg'} width={6048/8} height={4032/8} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/DogHair.jpg'} width={6048/8} height={4032/8} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/MercedesExterior.jpg'} width={6048/8} height={4032/8} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/MercedesInterior.jpg'} width={6048/8} height={4032/8} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/MercedesTires.jpg'} width={6048/8} height={4032/8} alt='image here'></Image>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={'/Rav4.jpg'} width={6048/8} height={4032/8} alt='image here'></Image>
              </SwiperSlide>
            </Swiper>   
          </Paper>
        );
}