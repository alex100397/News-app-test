import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='author'>
            News App - Alex Mathew © 2022 
        </div>
        <hr style={{width:"90%"}}/>
        <div className='iconContainer'>
               <a href="https://www.facebook.com/alex.junia/" rel="noopener"> 
                <i class="fa-brands fa-facebook"/></a>
                <a href="https://www.instagram.com/alexjunia/" rel="noopener">
                <i class="fa-brands fa-instagram"/></a>
                <a href="https://www.linkedin.com/in/alex-junia/" rel="noopener">
                <i class="fa-brands fa-linkedin"/></a>
        </div>
    </div>
  )
}

export default Footer