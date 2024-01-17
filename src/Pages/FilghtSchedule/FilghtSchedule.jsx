import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { RiRadioButtonFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
const FilghtSchedule = () => {
    return (
        <div className='mt-20 container mx-auto'>
            
<div className='shadow-xl px-8 relative'>
<div className='flex gap-4 font-light text-xl'>
<h1 className='flex items-center gap-2'> <RiRadioButtonFill className='text-red-600' />
 One Way</h1>
<h1 className='flex items-center gap-2'>  <RiRadioButtonFill />
 Round Trip</h1>
<h1 className='flex items-center gap-2'> <RiRadioButtonFill />
 Multi City</h1>
</div>



<div className='grid md:grid-cols-2 gap-6 mt-4'>
<div className='border grid md:grid-cols-2'>


<div className='border border-gray-300 rounded p-2' >
<h4>From</h4>
<h5 className='text-2xl font-sans mb-2'>Dhaka</h5>
<small className='font-sans'>Hazarat Shahjalal International Airport</small>


</div>
<div className='flex items-center'>
<GoArrowSwitch className=' text-3xl text-red-600 font-bold' />
<div className='border border-gray-300 rounded p-2 '>
<h4>To</h4>
<h5 className='text-2xl font-sans mb-2 flex items-center'> Chittagong</h5>
<small className='font-sans'>Hazarat Shahjalal International Airport</small>

</div>

</div>



<div className='flex gap-2 justify-between w-full mb-4'>
<h1>Free Types:</h1>
<h1 className='flex items-center gap-2 bg-red-200 p-2 rounded'> <FaCircleCheck className='text-red-600' /> Regular</h1>
 <h1 className='flex items-center gap-2 bg-red-200 p-2 rounded'> <RiRadioButtonFill />
 Seaman </h1>

</div>

</div>


{/* part2 */}
<div className=' grid md:grid-cols-3 '>


<div  className='border border-gray-300 h-[110px] p-2'>
<h4 className='flex items-center'>Departure <IoMdArrowDropdown className='text-2xl'></IoMdArrowDropdown> </h4>
<h5 className='text-xl font-semibold mt-2'>13 jan 2024</h5>
<p className='mt-2'>Saturday</p>
</div>

<div className='border border-gray-300 h-[110px] p-2'>
<h4 className='flex items-center'>Return <IoMdArrowDropdown className='text-2xl'></IoMdArrowDropdown> </h4>
<h5 className='font-sans mt-2'>Tap to book return</h5>
<p className=' mt-2'>Ticket</p>
</div>


<div className='ml-4 border border-gray-300 h-[110px] p-2'>
<small>Travelars & booking classes</small>
<h5>1 Traveler</h5>
<small>Economy</small>

</div>


</div>
</div>







</div>


<div class='absolute ml-[450px] -mt-7 hidden lg:block'>
  <button class='btn bg-red-600 text-white hover:bg-red-600 border-none'>Modify Search</button>
</div>




        </div>
    );
};

export default FilghtSchedule;