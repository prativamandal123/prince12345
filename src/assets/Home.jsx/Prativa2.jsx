import React from 'react'

const Prativa2 = () => {
  return (
    <>
    <div className='about py-5'>
        <div className='container '>
         <div className='row align-items-center '>
            {/* Text Section */}
            <div className='col-12 col-md-6 '>
                <h2 className='fw-bold fs-1'>Jane Doe</h2>
              <p className='fs-4'>Surgeon</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit sunt quod optio illo, id minus reiciendis minima maxime a accusantium, recusandae praesentium cupiditate expedita quo non facere officia etc. more details/</span>
            </div>

            {/* Image Section */}
            <div className='col-12 col-md-6'>
              <div className='image-container'>
                <img 
                  src="https://img.freepik.com/free-photo/walking-white-model-paper-cup-girl_1303-3233.jpg" 
                  alt="IT Concept" 
                  className="img-fluid" 
                  style={{ height: '400px', width:'600px', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Prativa2