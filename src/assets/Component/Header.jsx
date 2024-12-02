import React from 'react'
import { AiOutlineMobile } from 'react-icons/ai';
import { RxClock } from 'react-icons/rx';

const Header = () => {
  return (
    <>
     <header className="text-light " style={{ backgroundColor: 'rgba(0, 128, 0, 0.596)' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center fw-bold py-2 text-md-center ">
            <RxClock className="fs-0 fw-bold" />
            <p className="mb-0 mx-2">Monday - Saturday, 8AM to 10PM</p>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center fw-bold  py-2 justify-content-end  d-none d-md-flex">
            <AiOutlineMobile className="fs-0 fw-bold" />
            <p className="mb-0 text-end">Call us now: +1 5589 55488 55</p>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header