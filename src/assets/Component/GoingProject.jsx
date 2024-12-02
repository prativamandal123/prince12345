import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const GoingProject = () => {
   // Array of projects
   const projects = [
    { id: 1, title: 'OnGoingProject 1', description: 'Navata Tech', link: '/Project1' },
    { id: 2, title: 'OnGoingProject 2', description: 'Tech Solutions', link: '/Project2' },
    { id: 3, title: 'OnGoingProject 3', description: 'NextGen Innovations', link: '/Project3' },
    { id: 4, title: 'OnGoingProject 4', description: 'AI Development', link: '/Project4' },
    { id: 5, title: 'OnGoingProject 5', description: 'Mobile App', link: '/Project5' },
    { id: 6, title: 'OnGoingProject 6', description: 'Web Services', link: '/Project6' },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentProjects = projects.slice(offset, offset + itemsPerPage);

  
  return (
    <>
    <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {currentProjects.map((project) => (
            <div className="col-12 d-flex justify-content-center" key={project.id}>
              <Link to={project.link} className="text-decoration-none">
                <div className="card project-card"  style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', width:'600px', textAlign:'center' }}>
                  <div className="card-body">
                    <h5 className="card-title project-title">{project.title}</h5>
                    <p className="card-text project-description">Title: {project.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div> 
        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <ReactPaginate
            previousLabel={<FaArrowLeft />} 
            nextLabel={<FaArrowRight />} 
            breakLabel={"..."}
            pageCount={Math.ceil(projects.length / itemsPerPage)}
            marginPagesDisplayed={2} 
            pageRangeDisplayed={5} 
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            activeClassName={"active"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            pageClassName={"page-item"}
            disabledClassName={"disabled"}
            pageLinkClassName={"page-link"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
          />
        </div>
      </div>
    </>

  )
}

export default GoingProject