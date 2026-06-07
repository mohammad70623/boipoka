import React from 'react';
import bookImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full'>
           <div>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, modi?</h1>
            <button className='btn btn-primary'>test test</button>
            </div>
            <div>
                <img className='w-3/12' src={bookImage} alt="" />
                </div> 
        </div>
    );
};

export default Banner;