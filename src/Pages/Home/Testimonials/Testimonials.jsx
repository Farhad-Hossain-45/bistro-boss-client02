import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { RiDoubleQuotesL} from 'react-icons/ri';


const Testimonials = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    console.log(review)
    return (
        <div>
            <SectionTitle SubHeading={'---What Our Clients Say---'} Heading={'TESTIMONIALS'}>

            </SectionTitle>
            <div className=' max-w-screen-lg mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(review => <SwiperSlide key={review._id} re>
                            <div className='flex flex-col justify-center items-center py-10'>
                                <div>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <p className='text-8xl'><RiDoubleQuotesL /></p>
                                <p className='text-sm md:w-[500px] w-72'>{review.details}</p>
                                <p className='text-xl text-orange-500 mt-2'>{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;