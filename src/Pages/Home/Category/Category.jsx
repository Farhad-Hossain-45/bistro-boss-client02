import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <div>
            <SectionTitle SubHeading={'---From 11:00am to 10:00pm---'} Heading={'ORDER ONLINE'}>

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper m-20"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <p className='uppercase text-center text-4xl text-white -mt-20'>salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <p className='uppercase text-center text-4xl text-white -mt-20'>pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <p className='uppercase text-center text-4xl text-white -mt-20'>soups</p>

                </SwiperSlide>
                <SwiperSlide>
                <img src={slider4} alt="" />
                <p className='uppercase text-center text-4xl text-white -mt-20'>desserts</p>
                </SwiperSlide>
                

            </Swiper>
        </div>
    );
};

export default Category;