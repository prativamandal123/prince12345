import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";


const doctors = [
  {
    name: "Walter White",
    title: "Officer",
    imgSrc: "https://img.freepik.com/free-photo/portrait-beautiful-brunette-model-summer-city-woman-straw-hat_1157-39801.jpg",
    link: "/prativa4"
   
  },
  {
    name: "Jane Doe",
    title: "Surgeon",
    imgSrc: "https://img.freepik.com/free-photo/walking-white-model-paper-cup-girl_1303-3233.jpg",
    link: "/prativa2"
  
  },
  {
    name: "John Smith",
    title: "Pediatrician",
    imgSrc: "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg",
    link: "/prativa3"
  },
  {
    name: "Prativa Mandal",
    title: "Computer Engineer",
    imgSrc: "https://img.freepik.com/free-photo/girl-park_1157-7636.jpg",
    link: "/prativa"
   
  }
];

const Team = () => {
  return (
    <div className="doctor-text text-center py-5">
      <div className="container doctorcardtext">
        <h1 className="teamheader">Our Creative Team</h1>
        <div className="lined"></div>

        <div className="row">
          {doctors.map((doctor, index) => (
            <div className="col-12 col-md-3 mb-5 mt-4 border-0" key={index}>
              <div className="card shadow-sm teamcard" style={{ position: 'relative', overflow: 'hidden', animationDelay: `${index * 0.2}s` }}>
              <Link to={doctor.link}>
                <div className="image-container">
                  <img src={doctor.imgSrc} alt={doctor.name} className="card-img-top" />
                  
           
                  <div className="social-icons">
                    <FaFacebookF />
                    <FaWhatsapp />
                  </div>
                </div>
                </Link>

                <div className="card-body text-start">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">{doctor.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
