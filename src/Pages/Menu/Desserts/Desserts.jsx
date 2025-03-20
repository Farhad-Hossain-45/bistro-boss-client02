import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import dessertsImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import DessertsItem from './DessertsItem/DessertsItem';

const Desserts = () => {
    const [menu] = useMenu()
    const filterDesserts = menu.filter(item => item.category === 'dessert')
    return (
        <div>
            <Cover img={dessertsImg} title={'DESSERTS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>

            </Cover>
            <div className='grid md:grid-cols-2 gap-10 mt-20 mb-20 mx-auto md:w-[1000px]'>
                {
                    filterDesserts.map(item => <DessertsItem key={item._id} item={item}>

                    </DessertsItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 flex justify-center mx-auto mb-20 -mt-10'>ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default Desserts;