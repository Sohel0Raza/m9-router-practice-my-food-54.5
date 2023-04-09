import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Food = ({ food }) => {
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate(-1)
    }
    console.log(food)
    const { strCategory, strCategoryThumb } = food
    return (
        <div className="card w-96 glass">
            <img src={strCategoryThumb} alt="food!" />
            <div className="card-body">
                <h2 className="card-title">{strCategory}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam optio similique amet ipsa iure nulla, deserunt eum iste expedita.</p>
                <h3 className='text-xl font-semibold text-green-800'>Price: $100</h3>
                <div className="card-actions justify-start">
                    <button onClick={handelNavigate} className="btn btn-primary px-7 py-1 mt-3">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Food;