import {BrowserRouter as Router, Routes, Route } from "react-route-dom";
import Home from "../../views/Home";
import About from "../../views/About";
import Contact from "../../views/Contact";
import NoPage from "../../views/NoPage";


function PublicRouter() {
    return (
        <Router>
    <Routes>
    <Route path="/" index element={<Home/>}/>
    <Route path="/about" element ={<About/>}/>
    <Route path="/contact" element = {<Contact/>}/>
    <Route path="*" element = {<NoPage/>}/>
    
   </Routes>
   </Router>
    );
}
export default PublicRouter;