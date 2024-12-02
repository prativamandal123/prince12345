import React from 'react'
import Header from './assets/Component/Header'
import { Navbar } from './assets/Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Page from './assets/Home.jsx/Page'
import About from './assets/Home.jsx/About'
import Project from './assets/Home.jsx/Project'
import Footer from './assets/Component/Footer'
import Prativa from './assets/Home.jsx/Prativa'
import Completed from './assets/Component/Completed'
import GoingProject from './assets/Component/GoingProject' 
import Project1 from './assets/Component/Project1'
import Prativa2 from './assets/Home.jsx/Prativa2'
import Prativa3 from './assets/Home.jsx/Prativa3'
import Prativa4 from './assets/Home.jsx/Prativa4'
import UpComingProject from './assets/Component/UpComingProjec'
import Job from './assets/Component/Job'
import Internship from './assets/Component/Internship'
import Project2 from './assets/Component/Project2'
import Project3 from './assets/Component/Project3'
import Project4 from './assets/Component/Project4'
import Loging from './assets/Home.jsx/Loging'






const App = () => {
  return (
    <>
 < Header/>
 < Navbar/>
<Routes>
<Route>
 <Route path="/" element={<Page />} />
 <Route path="/about" element={< About/>} />
 <Route path="/Loging" element={< Loging/>} />
 <Route path="/project" element={< Project/>} />
 <Route path="/prativa" element={< Prativa/>} />
 <Route path="/prativa2" element={< Prativa2/>} />
 <Route path="/prativa3" element={< Prativa3/>} />
 <Route path="/prativa4" element={< Prativa4/>} />
 <Route path="/Completed" element={< Completed/>} />
 <Route path="/GoingProject" element={< GoingProject/>} />
 <Route path="/UpComingProjec" element={< UpComingProject/>} />
 <Route path="/Job" element={< Job/>} />
 <Route path="/Internship" element={< Internship/>} />
<Route path="/Project1" element={< Project1/>} />
<Route path="/Project2" element={< Project2/>} />
<Route path="/Project3" element={< Project3/>} />
<Route path="/Project4" element={< Project4/>} />
 

 

 </Route>
</Routes>
< Footer/>
 



     
   
  
    
    </>
  )
}

export default App