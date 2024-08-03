// import React from 'react'

import ProjectAdd from "./components/ProjectAdd"
import ProjectDetail from "./components/ProjectDetail"
// import ProjectLists from "./components/ProjectLists"
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import UpdateProject from "./components/UpdateProject"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"



function App() {
  return (
    <div className='text-2xl'>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-project" element={<ProjectAdd />} />
          <Route path="/detail/:id" element={<ProjectDetail />} />
          <Route path="/update/:id" element={<UpdateProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
