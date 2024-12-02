import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { FaSquareWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
     <div className="footer">
      <div className="container">
        <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-4">
  <h2 className="footer-titlefrist" style={{ color: 'rgba(255, 0, 0, 0.651)' }}>
    Medicio
  </h2>
  <ul className="footer-list" style={{ display: 'flex', gap: '10px', listStyleType: 'none', paddingLeft: '0' }}>
    <li>
      <BsFacebook style={{ fontSize: '1.8rem' }} />
    </li>
    <li>
      <FaInstagramSquare style={{ fontSize: '1.8rem' }} />
    </li>
    <li>
      <FaTwitterSquare style={{ fontSize: '1.8rem' }} />
    </li>
    <li>
      <FaSquareWhatsapp style={{ fontSize: '1.8rem' }} />
    </li>
  </ul>
</div>


          <div className="col-12 col-md-4">
            <h2 className="footer-title">Useful Links</h2>
            <ul className="footer-list">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h2 className="footer-title">Our Services</h2>
            <ul className="footer-list">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          

          
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Footer