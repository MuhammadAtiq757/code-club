import React, { useEffect, useState } from 'react';
import './styles.css';
import { TbSunset2 } from "react-icons/tb";
import { PiSunBold } from "react-icons/pi";
import { BsFillSunsetFill } from "react-icons/bs";
import { GoTriangleLeft } from "react-icons/go";
import { FaCaretRight } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";


const FlightFunction = () => {

    const [rangeValue, setRangeValue] = useState(2500);

    const handleRangeChange = (event) => {
        setRangeValue(Number(event.target.value));
    };
    const isRanged = rangeValue !== 1000;




    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = () => {
        fetch('./data.json')
          .then(response => response.json())
          .then(result => setData(result));
      };
  
      fetchData();
    }, []);



    return (
        <div className='container mt-20 mx-auto flex flex-col items-center lg:flex-row'>

            {/* sidbar */}
            <div className='w-full lg:w-[350px] mr-0 pr-0 mb-4 lg:mb-0 px-6'>
                <h2 className='text-center font-semibold text-xl mr-8'>seasson Timeout In</h2>
                <div className='flex items-center justify-center gap-4 mt-8 mr-12'>
                    <p className='bg-red-600 p-4 text-white w-[50px] rounded'>17</p>
                    <p className='bg-red-600 p-4 text-white w-[50px] rounded'>51</p>
                </div>

                <div className='mt-6'>
                    <h1>One Way Price</h1>

                  
     
                    <input
    type="range"
    min={3.202}
    max={6.202}
    value={rangeValue}
    className={`range w-[300px] h-[5px] ${isRanged ? 'red' : 'black'}`}
    step={1}
    onChange={handleRangeChange}
/>


                    <div className='flex  mt-1 '>
                        <button className='bg-[#f7f7f7]  p-3'>3.202 k</button>
                        <button className='bg-[#f7f7f7]  p-3'>{rangeValue} k</button>
                    </div>


                </div>
<div>
<h1 className='text-xl font-semibold mt-12'>Deperture Time in Dhaka</h1>

<div className='grid md:grid-cols-2 mt-6'>


<div className=' border-2  px-6 py-2 rounded-xl border-black text-center w-[150px]'>
<TbSunset2 className='text-3xl mx-auto' />
<p className='text-xl font-semibold'>Morning</p>
<p>0.60-11.59(5)</p>

</div>
<div className=' border-2  px-6 py-2 rounded-xl border-black text-center w-[150px]'>
<PiSunBold className='text-3xl mx-auto' />
<p className='text-xl font-semibold'>Afternoon</p>
<p>12.00-17.59(3)</p>

</div>
<div className='  border-2  px-6 py-2 rounded-xl  border-black text-center w-[150px] mt-4'>
<BsFillSunsetFill className='text-3xl mx-auto' />
<p className='text-xl font-semibold'>Morning</p>
<p>18.00-23.59(7)</p>

</div>
</div>

</div>

{/* checkout form */}
<div className='w-[350px]'>
    
<div className='mt-12'>
<h1 className='mb-4 font-semibold'>Stops From Dhaka</h1>
<label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> Non stop 15
 <small className='pl-36'>BDT 3.202</small>
</label>
</div>


<div className='mt-12 border p-2'>
<h1 className='mb-4 font-semibold'  >Cheak in baggage Allownence</h1>
<label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> 20 kg (15)
</label>
</div>


<div className='mt-12 border p-2'>
<h1 className='mb-4 font-semibold' >Refoundable</h1>
<label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> Partialy Refoundable (15)
</label>
</div>

<div className='mt-12 border p-2'>
<div className='flex justify-between'>
<h1 className='mb-4 font-semibold' >Departing Form</h1>
<h1 className='mb-4 font-semibold' >Arriving At</h1>
</div>
<div className='flex justify-between'>
<label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> DAC
</label>
<label className='pl-28'>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> CGP
</label>
</div>
</div>


<div className='mt-12'>
<h1  >Airlence</h1>

<div className='flex justify-between mt-2'>
<label className=''>
 <input className='ml-2 text-sm' type="checkbox" name="tripType" value="Seaman Fares"/> Biman bangladesh 
 <small className='ml-28'>BDT 3.202</small>
</label>
</div>

 <hr />
 <div className='flex justify-between mt-2'>
<label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> US Bangla Airlence
 <small className='ml-28'>BDT 3.202</small>
</label>
</div>  

<hr />

<div className='flex justify-between mt-2'>
<label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> Air Astra
 <small className='ml-44'>BDT 3.202</small>
</label>
</div> 

 <hr />

 <div className='flex justify-between mt-2'>
<label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> Novo Air
 <small className='ml-44'>BDT 3.202</small>
</label>
</div> 


</div>

<div className='mt-12'>
<h1  className='mb-4 font-semibold'>Transit Time in (Dhaka-Chattogram)</h1>
<label>
 <input className='ml-2' type="checkbox" name="tripType" value="Seaman Fares"/> Non transit Time (15)

</label>
</div>

<button className="btn btn-outline border-red-600  mt-12 w-80 hover:bg-red-600">Clear Filters</button>

</div>
            </div>


            {/* main part */}


            <div className=' lg:block container mx-auto'> 

            <div className='shadow-xl py-6 px-4 w-full md:w-[600px] mx-auto'>
  <h1 className='flex items-center justify-center text-center text-3xl font-semibold mb-4'>
    <GoTriangleLeft className='text-red-600 text-5xl' />
    Flights From Dhaka to Chittagong
    <FaCaretRight className='text-red-600 text-4xl' />
  </h1>

  <div className='grid md:grid-cols-2 gap-2'>
    <div className='bg-indigo-50 p-2 md:p-4'>
      <h1 className='text-xl font-sans'>Cheapest</h1>
      <p>to get the cheapest available flights</p>
    </div>

    <div className='border-2 p-2 md:p-4 border-l-indigo-200'>
      <h1 className='text-xl font-sans'>Shortest</h1>
      <p>to get the cheapest available flights</p>
    </div>
  </div>
</div>


                 

{
data.map(flight => (
<div key={flight.id} className="card w-full md:w-[600px] mx-4 md:mx-auto bg-base-100 shadow-xl mt-12">
  <div className="card-body grid md:grid-cols-4 gap-6 p-4">
    <div className="md:col-span-1">
      <img className='w-8 md:w-24 h-12 md:h-24 mx-auto md:mx-0' src={flight.image} alt="" />
      <p className='font-sans mt-2 text-center md:text-left'>{flight.airlineName}</p>
      <h5 className='mt-6 text-center md:text-left'>Price</h5>
      <p className='mt-2 text-xl font-semibold text-center md:text-left'>BDT {flight.price}</p>
      <p className='mt-2 text-sm text-green-600 text-center md:text-left'>Partially Refundable</p>
    </div>

    <div className="md:col-span-1">
      <h4>Depart</h4>
      <h5>{flight.time}</h5>
      <h5>{flight.date}</h5>
      <h5>{flight.location}(DAC)</h5>
    </div>

    <div className="md:col-span-1 text-center">
      <h3>{flight.arriveTime}</h3>
      <p className='text-center '>Non Stop</p>
    </div>

    <div className="md:col-span-1">
      <h4>Depart</h4>
      <h5>{flight.time}</h5>
      <h5>{flight.date}</h5>
      <h5>{flight.location}(DAC)</h5>
      <button className='btn hover:bg-red-600 font-semibold bg-red-600 text-white rounded-lg mt-4 md:mt-16'>Book Now</button>
      <h3 className='text-red-500 font-semibold flex items-center mt-4 md:mt-0'>Flight Details <IoMdArrowDropdown className='text-2xl' /></h3>
    </div>
  </div>
</div>

  ))

}




            </div>




        </div>
    );
};

export default FlightFunction;