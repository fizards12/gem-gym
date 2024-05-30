import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import Root from "./pages/root"
import lazyLoadPage from "./hoc/lazyLoadPage";
import ErrorPage from "./pages/error";

const Home = lazyLoadPage(()=>import("./pages/home.jsx"))
const About = lazyLoadPage(()=>import("./pages/about-us.jsx"))
const RoutesRoot = lazyLoadPage(()=>import("./components/root.jsx"));
const ClassDetails = lazyLoadPage(()=>import("./pages/classes/class-details.jsx"));
const Services = lazyLoadPage(()=>import("./pages/services.jsx"));
const TeamPage = lazyLoadPage(()=>import("./pages/our-team.jsx"));
const Contact = lazyLoadPage(()=>import("./pages/contact.jsx"));
const Blog = lazyLoadPage(()=>import("./pages/our-blog.jsx"));
const BlogPost = lazyLoadPage(()=>import("./pages/blog-post.jsx"));
function App() {
  
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Root/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about-us" element={<About/>}/>
            <Route path="classes" element={<RoutesRoot title={"CLASSES"}/>}>
              <Route path="" element={<Navigate to={"class-details"}/>}/>
              <Route path="class-details" element={<ClassDetails/>}/>
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
