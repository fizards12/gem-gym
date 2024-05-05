import Nav from './UI/navbar'

function Navbar() {
  return (
    <Nav>
        <Nav.Logo />
        <Nav.Offcanvas>
          <Nav.List>
            <Nav.NavLink to={"/"}>
              Home
            </Nav.NavLink>
            <Nav.NavLink to={"/about-us"}>
              About
            </Nav.NavLink>
            <Nav.NavLink to={"/classes"}>
              Classes
            </Nav.NavLink>
            <Nav.NavLink to={"/services"}>
              Services
            </Nav.NavLink>
            <Nav.NavLink to={"/our-team"}>
              Our Team
            </Nav.NavLink>
            <Nav.NavLink to={"/contact"}>
              Contact
            </Nav.NavLink>
          </Nav.List>
          <Nav.SocialIcons />
        </Nav.Offcanvas>
      </Nav>
  )
}

export default Navbar