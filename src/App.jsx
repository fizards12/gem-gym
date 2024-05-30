import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import Root from "./pages/root"
import lazyLoadPage from "./hoc/lazyLoadPage";
import ErrorPage from "./pages/error";

const Home = lazyLoadPage("../pages/home.jsx")
const About = lazyLoadPage("../pages/about-us.jsx")
const RoutesRoot = lazyLoadPage("../components/root.jsx");
const ClassesTable = lazyLoadPage("../pages/classes/time-table.jsx");
const Services = lazyLoadPage("../pages/services.jsx");
const TeamPage = lazyLoadPage("../pages/our-team.jsx");
const Contact = lazyLoadPage("../pages/contact.jsx");
const Blog = lazyLoadPage("../pages/our-blog.jsx");
const BlogPost = lazyLoadPage("../pages/blog-post.jsx");
function App() {
  
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Root/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about-us" element={<About/>}/>
            <Route path="classes" element={<RoutesRoot title={"CLASSES"}/>}>
              <Route path="" element={<Navigate to={"time-table"}/>}/>
              <Route path="time-table" element={<ClassesTable/>}/>
            </Route>
            <Route path="services" element={<Services/>}/>
            <Route path="our-team" element={<TeamPage/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="our-blog">
              <Route path="" element={<Blog/>}/>
              <Route path=":id" element={<BlogPost/>}/>
            </Route>
            <Route path="not-found-page" element={<ErrorPage/>}/>
            <Route path="*" element={<Navigate to={"/not-found-page"}/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
