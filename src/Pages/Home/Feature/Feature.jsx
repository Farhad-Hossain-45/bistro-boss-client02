import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
import './Feature.css'
const Feature = () => {
    return (
        <div>
            <div className='mb-20 feature-item text-white pt-1 '>
                <div className=''>
                    <SectionTitle SubHeading={'---Check it out---'} Heading={'Our Featured Item'}>

                    </SectionTitle>
                    <div className='md:flex items-center justify-center space-x-10 py-20 '>
                        <div>
                            <img src={featureImg} className='w-[550px] h-[350px]' alt="" />
                        </div>
                        <div className=''>
                            <p className='text-xl '>March 20, 2023</p>
                            <p className='text-xl mt-2'>WHERE CAN I GET SOME?</p>
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br />
                                voluptate facere, deserunt dolores maiores quod nobis quas quasi. <br />
                                Eaque repellat recusandae ad laudantium tempore consequatur <br />
                                consequuntur omnis ullam maxime tenetur.</p>

                            <button className='btn mt-2 btn-outline border-0 border-b-4 text-white'>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;