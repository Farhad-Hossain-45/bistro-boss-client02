import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image,  price } = item
    // console.log(item)
    return (
        <div>
            <div className='flex space-x-4'>
                <img style={{borderRadius: "0 200px 200px 200px"}} className='w-[100px]' src={image} alt="" />
                <div>
                    <p className='text-black text-xl'>{name}-----------</p>
                    <p className='text-sm'>{recipe}</p>
                </div>
                <p className='text-yellow-500'>${price}</p>
            </div>
        </div>
    );
};


export default MenuItem;