import React from 'react';
import logo from "../assets/images/logo.png"


const Navbar = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className="navbar  flex justify-between items-center">
                <div className='flex items-center justify-center'>
                <img className='w-72 h-full' src={logo} alt="" />
  
                </div>
                <div className='text-xl flex gap-2'>
                <button className='btn bg-red-600 text-white rounded-md hover:bg-red-600'>Sign In</button>
                </div>

</div>


        </div>
    );
};

export default Navbar;