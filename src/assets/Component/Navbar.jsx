import React from 'react';
import { IoHome } from 'react-icons/io5'; 
import { Link } from 'react-router-dom'; 

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-center">
        {/* Navbar Toggler for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Offcanvas menu */}
        <div 
          className="offcanvas offcanvas-end" 
          tabIndex={-1} 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close" 
            />
          </div>

          {/* Navbar links centered */}
          <div className="offcanvas-body d-flex justify-content-center align-items-center">
            <ul className="navbar-nav text-center gap-5">
              {/* Home Link */}
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/" aria-current="page">
                  <IoHome style={{ fontSize: '1.2rem', marginRight: '8px', marginBottom: '5px' }} />
                  Home
                </Link>
              </li>

              {/* About Link */}
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/about">About</Link>
              </li>

              {/* Project Dropdown */}
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link fs-5 dropdown-toggle" 
                  to="/project" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  aria-label="Projects menu"
                >
                  Project
                </Link>
                <ul className="dropdown-menu text-start shadow-lg border-0">
                  <li>
                    <Link className="dropdown-item" to="/Completed">Completed</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/GoingProject"> On Going Project </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" to="/UpComingProjec">Up Comeing Project</Link>
                  </li>
                </ul>
              </li>

              {/* Vacancy Link */}
             




               {/*  Vacancy Dropdown */}
               <li className="nav-item dropdown">
                <Link 
                  className="nav-link fs-5 dropdown-toggle" 
                  to="/vacancy" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  aria-label="Projects menu"
                >
                 Vacancy
                </Link>
                <ul className="dropdown-menu text-start shadow-lg border-0">
                  <li>
                    <Link className="dropdown-item" to="/Job">Job</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Internship"> Internship </Link>
                  </li>
                 
                </ul>
              </li>


              {/* Login Link */}
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/Loging">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
