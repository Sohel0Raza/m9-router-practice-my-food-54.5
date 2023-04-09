import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const data = useLoaderData()
    const foods= data.categories
    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-3xl text-center p-3 my-5 font-bold'>All Food For You</h3>
            <div className='md:grid grid-cols-3 gap-5'>
                {
                    foods.map(food  => <Food
                    key={food.idCategory}
                    food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;