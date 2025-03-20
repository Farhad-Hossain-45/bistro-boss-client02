import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import saladsImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SaladsItem from './SaladsItem/SaladsItem';

const Salads = () => {
    const [menu] = useMenu()
    const filterSalads = menu.filter(item => item.category === 'salad')
    return (
        <div>
            <Cover img={saladsImg} title={'salads'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>

            </Cover>
            <div>
                <div className='grid md:grid-cols-2 gap-10 mb-20 mx-auto md:w-[1000px]'>
                    {
                        filterSalads.map(item => <SaladsItem key={item._id} item={item}></SaladsItem>)
                    }


                </div>
                <button className='btn btn-outline border-0 border-b-4 flex justify-center mx-auto mb-20 -mt-10'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Salads;