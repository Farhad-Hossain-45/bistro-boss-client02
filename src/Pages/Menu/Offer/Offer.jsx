import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import OfferItem from './OfferrItem/OfferItem';

const Offer = () => {
    const [menu] = useMenu()
    const filterMenuOffer = menu.filter(item=>item.category === 'offered')
    return (
        <div>
            <SectionTitle SubHeading={"---Don't miss---"} Heading={"TODAY'S OFFER"}>

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mt-20 mb-20 mx-auto md:w-[1000px]'>
                {
                    filterMenuOffer.map(item => <OfferItem key={item._id} item={item}></OfferItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 flex justify-center mx-auto mb-20 -mt-10'>ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default Offer;