import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center bg-slate-200 p-3'>
            <div className='md:ml-12'>
                <Link to="/" className='text-gray-900 text-2xl font-bold  inline-flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-green-700'></ShoppingBagIcon>
                    <span>Food Point</span></Link>
            </div>
            <div className='items-center space-x-8 md:mr-10'>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                }>Home</NavLink>
                <NavLink to="/foods" className={({ isActive }) =>
                    isActive ? 'active' : 'default'
                }>Food</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? 'active' : 'default'}
                >About Us</NavLink>
            </div>
        </div>
    );
};

export default Header;