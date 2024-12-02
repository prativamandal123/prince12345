import React from 'react'

const Project2 = () => {
  return (
    <>
     <div className="project1 py-5">
        <div className="container">
          <div className="row align-items-center py-4">
            {/* Text Section */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold fs-3 mb-3">Project Title</h2>
              <p><strong>Client ID:</strong> 12345</p>
              <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non ea facere enim sequi ipsum maxime vel, explicabo vitae eos corporis quaerat libero fugit ratione necessitatibus voluptatibus illum ad accusamus..</p>
              <p><strong>Client Name:</strong> John Doe</p>
              <p><strong>Details:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat animi recusandae laudantium corrupti in vero, ut labore blanditiis culpa, atque asperiores fuga sunt dolorem quidem nemo, assumenda impedit ipsa harum!</p>
            </div>

            {/* Image Section */}
            <div className="col-12 col-md-6">
              <div className="image-container shadow-sm rounded overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/medium-shot-senior-gentleman-with-laptop_23-2149126961.jpg?ga=GA1.1.1455983656.1731581090&semt=ais_hybrid"
                  alt="Project Image"
                  className="img-fluid"
                  style={{ height: '350px',  width:'350px',objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project2