import React from 'react';
import OrderItem from '../OrderItem';

const OrderTab = ({item}) => {
    return (
        <div className='grid md:grid-cols-3 mb-20 mt-6 gap-5 max-w-screen-lg mx-auto'>
            {
                item.map(item => <OrderItem key={item._id} item={item}></OrderItem>)
            }
        </div>
    );
};

export default OrderTab;