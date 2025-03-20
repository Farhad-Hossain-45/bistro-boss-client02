import React from 'react';
import SoupsImg from '../../../assets/menu/soup-bg.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SoupsItem from './SoupsItem/SoupsItem';

const Soups = () => {
    const [menu] = useMenu()
    const filterSoups = menu.filter(item=> item.category === 'soup')
    return (
        <div>
            <Cover img={SoupsImg} title={'Soups'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>

            </Cover>
            <div>
                <div className='grid md:grid-cols-2 gap-10 mb-20 mx-auto md:w-[1000px]'>
                    {
                        filterSoups.map(item => <SoupsItem key={item._id} item={item}></SoupsItem>)
                    }


                </div>
                <button className='btn btn-outline border-0 border-b-4 flex justify-center mx-auto mb-20 -mt-10'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Soups;