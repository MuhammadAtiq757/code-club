import React from 'react';

const FilghtSchedule = () => {
    return (
        <div className='mt-20 container mx-auto'>
            
<div className='shadow px-8 relative'>
<h2 gap-4>
  <label>
    <input type="checkbox" name="tripType" value="oneWay"/> One Way
  </label>
  <label>
    <input className='ml-6' type="checkbox" name="tripType" value="roundTrip"/> Round Trip
  </label>
  <label>
    <input className='ml-6' type="checkbox" name="tripType" value="multiCity"/> Multi City
  </label>
</h2>



<div className='grid md:grid-cols-2 gap-6 mt-4'>
<div className='border grid md:grid-cols-2 gap-2'>


<div >
<h4>From</h4>
<h5>Dhaka</h5>
<p>Hazarat Shahjalal International Airport</p>


</div>


<div>
<h4>From</h4>
<h5>Dhaka</h5>
<p>Hazarat Shahjalal International Airport</p>
</div>

<p>Free typs:  
    
     <label>
 <input className='ml-2' type="checkbox" name="tripType" value="Regular Fares"/>  Regular Fares
  </label>

  <label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> Seaman Fares
  </label>
  
  
      </p>

</div>


{/* part2 */}
<div className='border grid md:grid-cols-2 gap-2'>


<div >
<h4>From</h4>
<h5>Dhaka</h5>
<p>Hazarat Shahjalal International Airport</p>


</div>


<div>
<h4>From</h4>
<h5>Dhaka</h5>
<p>Hazarat Shahjalal International Airport</p>
</div>


</div>
</div>







</div>


<div className='absolute ml-[450px] -mt-10'>
    <button className='btn bg-red-600 text-white hover:bg-red-600 border-none'>Modify Search</button>
</div>



        </div>
    );
};

export default FilghtSchedule;