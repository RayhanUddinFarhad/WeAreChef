import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">

            <h1 className="font-extrabold normal-case text-3xl"> WeAre<span className='text-green-600'>Chef</span></h1>

  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Resturant</a>
    <a className="link link-hover">Cooking</a>
    <a className="link link-hover">Hiring</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;