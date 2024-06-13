import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import PageNotFound from "./components/404page";
import Register from "./components/Register";
import CreateCourse from "./components/course/CreateCourse";
import ListCourse from "./components/course/ListCourse";
import AboutUs from "./components/about/AboutUs";
import CoursePage from "./components/course/Index";
import ContactPage from "./components/contact/ContactPage";


function App() {


  return (
<Router>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="*" element={<PageNotFound/>} />
    <Route path="/create-course" element={<CreateCourse/>} />
    <Route path="/list-all-course" element={<ListCourse/>} />
    <Route path="/about-us" element={<AboutUs/>} />
    <Route path="/courses" element={<CoursePage/>} />
    <Route path="/contact-us" element={<ContactPage/>} />

  </Routes>
</Router>
   
  )
}

export default App
