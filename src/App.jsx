import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import Root from "./pages/root"
import lazyLoadPage from "./hoc/lazyLoadPage"
const Home = lazyLoadPage("home")
const About = lazyLoadPage("about-us")
const Classes = lazyLoadPage("classes");
const Services = lazyLoadPage("services");
const Team = lazyLoadPage("our-team");
const Contact = lazyLoadPage("contact");
function App() {
  
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Root/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about-us" element={<About/>}/>
            <Route path="classes" element={<Classes/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="our-team" element={<Team/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<Navigate to={"/"}/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
