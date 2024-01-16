import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const FilghtSchedule = () => {
    return (
        <div className='mt-20 container mx-auto'>
            
<div className='shadow px-8 relative'>
<h2 className='gap-4 font-light text-xl'>
  <label>
    <input type="radio"  name="tripType" value="oneWay"/> One Way
  </label>
  <label>
    <input className='ml-6' type="radio" name="tripType" value="roundTrip"/> Round Trip
  </label>
  <label>
    <input className='ml-6' type="radio" name="tripType" value="multiCity"/> Multi City
  </label>
</h2>



<div className='grid md:grid-cols-2 gap-6 mt-4'>
<div className='border grid md:grid-cols-2 gap-2'>


<div >
<h4>From</h4>
<h5 className='text-2xl font-sans mb-2'>Dhaka</h5>
<small className='font-sans'>Hazarat Shahjalal International Airport</small>


</div>


<div>
<h4>To</h4>
<h5 className='text-2xl font-sans mb-2'>Chittagong</h5>
<small className='font-sans'>Hazarat Shahjalal International Airport</small>

</div>

<p className=''>
<h3 className='font-semibold'>Free typs:</h3>  
    
     <label>
 <input className='ml-2 text-sm' type="radio" name="tripType" value="Regular Fares"/>  Regular Fares
  </label>

  <label>
 <input className='ml-2 text-sm' type="radio" name="tripType" value="Seaman Fares"/> Seaman Fares</label>
  
  
      </p>

</div>


{/* part2 */}
<div className='border grid md:grid-cols-3 gap-2'>


<div >
<h4 className='flex items-center'>Departure <IoMdArrowDropdown className='text-2xl'></IoMdArrowDropdown> </h4>
<h5 className='text-xl font-semibold mt-2'>13 jan 2024</h5>
<p className='mt-2'>Saturday</p>
</div>

<div >
<h4 className='flex items-center'>Return <IoMdArrowDropdown className='text-2xl'></IoMdArrowDropdown> </h4>
<h5 className='font-sans mt-2'>Tap to book return</h5>
<p className=' mt-2'>Ticket</p>
</div>


<div>
<small>Travelars & booking classes</small>
<h5>1 Traveler</h5>
<small>Economy</small>

</div>


</div>
</div>







</div>


<div className='absolute ml-[450px] -mt-7'>
    <button className='btn bg-red-600 text-white hover:bg-red-600 border-none'>Modify Search</button>
</div>



        </div>
    );
};

export default FilghtSchedule;