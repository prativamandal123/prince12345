import React from 'react';


const Banner3 = () => {
  return (
    <>
      <div className='about py-5'>
        <div className='container'>
          <h1 className='text-center fs-1 bannretext'>Why we are?</h1>
          <div className='lined my-3 bannretext'></div>

          <div className='row align-items-center py-4'>
            {/* Text Section */}
            <div className='col-12 col-md-6 bannerdescreab'>
              <h2 className='fw-bold fs-4'>
                Information Technology (IT) encompasses all aspects of computing technology, including
              </h2>
              <p className='my-1'>Hardware (physical devices like computers, servers, etc.)</p>
              <p className='my-1'>Software (programs and applications)</p>
              <p className='my-1'>Networks (systems that connect computers and devices)</p>
              <p className='my-1'>Data management (storage, databases, and information systems)</p>
              <p className='my-2'>Cybersecurity (protecting systems from hacking or other threats)</p>
              <span className='my-5'>
                It's a broad field focused on managing and processing information using technology. IT professionals work in various roles, like network administration, software development, database management, and IT support.
              </span>
            </div>

            {/* Image Section */}
            <div className="col-12 col-md-6">
  <div className="d-flex justify-content-between bannerimage3">
    {/* Images displayed in a row */}
    <div className='image-1' style={{ height: '330px', width: '32%' }}>
      <img
      src="https://img.freepik.com/free-photo/indian-man-programmers-testing-application-security-developed_231208-3632.jpg"
      alt="IT Concept"
      className="img-fluid  bannerimage"
      style={{ height: '330px', width: '100%',objectFit: 'cover' }}
    /></div>

  <div className='image-2'style={{ height: '330px', width: '32%' }}> 
     <img
      src="https://img.freepik.com/free-photo/unhappy-indian-programmer-looking-computer-pc-screen_231208-3666.jpg"
      alt="IT Concept"
      className="img-fluid bannerimage"
      style={{ height: '350px', width: '100%',objectFit: 'cover' }}
    /></div>
   <div className='image-3' style={{ height: '330px', width: '32%' }}> 
    <img
      src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg"
      alt="IT Concept"
      className="img-fluid bannerimage"
      style={{ height: '330px', width: '100%',objectFit: 'cover' }}
    /></div>
  </div>
</div>



          </div>
        </div>
      </div>
    </>
  );
};

export default Banner3;
