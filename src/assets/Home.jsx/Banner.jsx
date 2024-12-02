import React from 'react'

const Banner = () => {
  return (
    <>
<div className="about py-5">
  <div className="container">
    <h1 className="text-center fs-1 bannretext">What is IT?</h1>
    <div className="lined my-3 bannretext"></div>

    <div className="row align-items-center py-4">
      {/* Text Section */}
      <div className="col-12 col-md-6 bannerdescreab">
        <h2 className="fw-bold fs-4">Information Technology (IT) encompasses all aspects of computing technology, including</h2>
        <p className="my-1">Hardware (physical devices like computers, servers, etc.)</p>
        <p className="my-1">Software (programs and applications)</p>
        <p className="my-1">Networks (systems that connect computers and devices)</p>
        <p className="my-1">Data management (storage, databases, and information systems)</p>
        <p className="my-2">Cybersecurity (protecting systems from hacking or other threats)</p>
        <span className="my-5">It's a broad field focused on managing and processing information using technology. IT professionals work in various roles, like network administration, software development, database management, and IT support.</span>
      </div>

      {/* Image Section */}
      <div className="col-12 col-md-6">
        <div className="imageban-container">
          <div className="bannerimage-card" style={{ height: '350px', width:'600px' }} >
            <img 
              src="https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252473.jpg" 
              alt="IT Concept" 
              className="bannerimage"
              style={{ height: '350px', width:'600px', objectFit: 'cover'  }} 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Banner;
