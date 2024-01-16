import React from 'react';
import bank from "../../assets/images/bank.png"
import logo from "../../assets/images/logo.png"

import basis from "../../assets/images/basis.png"
import duns from "../../assets/images/duns.png"
import iata from "../../assets/images/iata.png"
import google from "../../assets/images/google.png"
import { FaFacebook } from "react-icons/fa6";


const Bank = () => {
    return (
        <div className='container mx-auto mt-12 px-12'>
           <footer className="footer gap-6 p-10 bg-base-200 text-base-content">
  <aside>
   <img src={logo} alt="" />
    <p className='text-red-400'>Flight Expert Dhaka (Main branch)

90/1 Motijheel City Centre Level 25-

B-1, Lift 26 Dhaka 1000, Bangladesh</p>
<FaFacebook />
  </aside> 
  <nav>
    <header className="footer-title">About</header> 
    <a className="hover:text-red-500 link link-hover">About Flight Expert</a>
    <a className="hover:text-red-500 link link-hover">Best Price Guarantee</a>
    <a className="hover:text-red-500 link link-hover">Terms and Conditions</a>
    <a className="hover:text-red-500 link link-hover">Privacy Policy</a>
    <a className="hover:text-red-500 link link-hover">Cookie Policy</a>
    <a className="hover:text-red-500 link link-hover">Blog</a>
    
  </nav> 
  <nav>
    <header className="footer-title">HElp</header> 
    <a className="hover:text-red-500 link link-hover">FAQS</a>
    <a className="hover:text-red-500 link link-hover">Easy EMI</a>
    <a className="hover:text-red-500 link link-hover">Payment Methods</a>
    <a className="hover:text-red-500 link link-hover">Contact Us</a>
  </nav> 
  <nav>
    <header className="footer-title">Have Questions?</header> 
    <a className="hover:text-red-500 link link-hover">+8801792454957</a>
    <a className="hover:text-red-500 link link-hover">muhammadatiq757@gmail.com</a>
    <a className="hover:text-red-500 link link-hover">Discounted Customer service</a>
    <a className="hover:text-red-500 link link-hover">Sat-Thurs: 9AM-9PM <hr />
Friday/Govt. Holidays: 10AM-6PM</a>
  </nav> 
  <nav>
    <header className="footer-title">Accepted Payments</header> 
    <img src={bank} alt="" />
  </nav>
</footer>

<div className='mt-12 grid md:grid-cols-4 gap-4 border p-4'>
    <img src={basis} alt="" />
    <img src={duns} alt="" />
    <img src={iata} alt="" />
    <img src={google} alt="" />

</div>


        </div>
    );
};

export default Bank;