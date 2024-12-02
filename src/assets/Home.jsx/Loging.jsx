import React,{useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Loging = () => {
    const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const navgite=useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
    });
    // Reset form fields after submission (optional)
    setName("");
    setEmail("");
    toast.success("summit");
    navgite("/")
  };
  return (
    <>
  <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-6">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h1 className="text-center mb-4 fs-2 loginheader" style={{color:'rgba(0, 128, 0, 0.596)'}}>CONTACT US</h1>
          <form  onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required  value={name}
                      onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required   value={email}
                      onChange={(e) => setEmail(e.target.value)}/>
            </div>
           
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn logbtn ">Send Message</button>
            </div>
          </form>
          <Toaster/>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Loging