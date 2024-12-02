import React from 'react'

const Project4 = () => {
  return (
    <>
     <div className="project1 py-5">
        <div className="container">
          <div className="row align-items-center py-4">
            {/* Text Section */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold fs-3 mb-3">Internship detail</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem error quisquam exercitationem tempora, ex, sapiente beatae sunt doloremque quo dignissimos similique corrupti, labore dolorum quod atque. Expedita, quidem rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem error quisquam exercitationem tempora, ex, sapiente beatae sunt doloremque quo dignissimos similique corrupti, labore dolorum quod atque. Expedita, quidem rerum</p>
              
            </div>

            {/* Image Section */}
            <div className="col-12 col-md-6">
              <div className="image-container shadow-sm rounded overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/blonde-woman-pressing-virtual-screen_1134-632.jpg?ga=GA1.1.1455983656.1731581090&semt=ais_hybrid"
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

export default Project4