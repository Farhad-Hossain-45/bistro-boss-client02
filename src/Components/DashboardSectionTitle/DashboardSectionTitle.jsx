import React from 'react';

const DashboardSectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center'>
                <p className=' text-yellow-500 text-2xl italic mb-4'>{subHeading}</p>
                <p className='uppercase text-3xl border-y-4 py-4'>{heading}</p>
            </div>
    );
};

export default DashboardSectionTitle;