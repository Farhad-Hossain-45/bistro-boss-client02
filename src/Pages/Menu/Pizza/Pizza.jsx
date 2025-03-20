import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import PizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import PizzaItem from './PizzaItem/PizzaItem';
import { ImSteam } from 'react-icons/im';

const Pizza = () => {
    const [menu] = useMenu()
    const filterPizza = menu.filter(item=>item.category === 'pizza')
    return (
        <div>
            <Cover img={PizzaImg} title={'pizza'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>

            </Cover>
            <div className='grid md:grid-cols-2 gap-10 mb-20 mx-auto md:w-[1000px]'>
                {
                    filterPizza.map(item => <PizzaItem key={item._id} item={item}>

                    </PizzaItem>)
                }
            
            
            </div>
            <button className='btn btn-outline border-0 border-b-4 flex justify-center mx-auto mb-20 -mt-10'>ORDER YOUR FAVOURITE FOOD</button>
            
        </div>
    );
};

export default Pizza;