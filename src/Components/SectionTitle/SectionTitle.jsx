import React from 'react';

const SectionTitle = ({Heading, SubHeading}) => {
    return (
        <div className='md:w-4/12 mt-20 mx-auto text-center'>
            <p className=' text-yellow-500 text-2xl italic mb-4'>{SubHeading}</p>
            <p className='uppercase text-4xl border-y-4 py-4'>{Heading}</p>
        </div>
    );
};

export default SectionTitle;