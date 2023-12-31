import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className = "footer py-5 bg-dark">
        <div className = "container">
            <div className = "footer-content text-white grid">
                <div className = "footer-item text-center">
                    <h6 className = "fs-17 fw-6">Links</h6>
                    <ul>
                        <li><a href = "/aboutus" className = "fs-15">About Us</a></li>
                        <li><a href = "/contact" className = "fs-15">Contact Us</a></li>
                    </ul>
                </div>

               

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Contact</h6>
                    <ul>
                        <li>
                            <span><i className = "fas fa-phone"></i></span>
                            <span className = "fs-15">+9093845524</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-envelope"></i></span>
                            <span className = "fs-15">info@buyzone.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer