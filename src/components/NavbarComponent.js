import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
const NavbarComponent = () => {

    return (
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="text-dark px-5 fw-bold">mealapp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 position-absolute end-0 px-5 py-2"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-dark">Foods</Nav.Link>
            <Nav.Link href="#action2" className="text-dark">Ingredients</Nav.Link>
            <Nav.Link href="#action2" className="text-dark">Local Culinary</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //     <nav className="navbar navbar-expand-lg bg-white">
    //     <div className="container-fluid ">
    //       <a className="navbar-brand fw-bold text-dark px-5" href="#">mealapp</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto  mb-2 mb-lg-0 position-absolute  end-0 px-5 ">
    //           <li className="nav-item ">
    //             <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link text-dark" href="#">Link</a>
    //           </li>
    //         </ul>
            
    //       </div>
    //     </div>
    //   </nav>
    )
}

export default NavbarComponent;