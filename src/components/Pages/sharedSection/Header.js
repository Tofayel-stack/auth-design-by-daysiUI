import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSiteNav from './LeftSiteNav';

import { FaUserCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Button, Image } from 'react-bootstrap';

const Header = () => {

    const {user,logOut} = useContext(AuthContext)
    // console.log(user);





    const handleLogOutBtn = ()=> {
        logOut()
        .then(() => {
            // Sign-out successful.
           
          }).catch((error) => {
            // An error happened.
            console.error(error);
          });
          
      }





    return (
        <div className='sticky-top'>
                   <Navbar bg="dark" variant="dark" expand="lg"  >
                        <Container>
                            <Navbar.Brand href=""><Link to='/' className='text-warning text-decoration-none'>NewsToday</Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                           
                            
                                <div className='d-lg-none d-sm-block'>
                                <LeftSiteNav></LeftSiteNav>
                                </div>
                                
                            </Nav>
                            



                            <div className='d-flex align-items-center'>
                              <div className='text-warning '>welcome  : {user?.email}</div>

                                    {
                                        user ? 
                                        <div><Image roundedCircle style={{height:'40px' , width:'40px'}} src={user?.photoURL}></Image></div>  
                                        : 
                                        <div className='text-warning fs-2  ' ><FaUserCircle/></div>
                                    }
                                    
                              </div>
                              {
                                (!user) ?  
                                <Button className='my-1 mx-3'>  <Link to='/login' className='text-light'><FiLogIn/> logIn</Link></Button>
                                : 
                                <Button className='my-1 mx-3' onClick={handleLogOutBtn}> <FiLogOut/>  Log Out</Button>
                              }
                              
                                    

                              </Navbar.Collapse>
                        </Container>
                        </Navbar>
   
   
        </div>
    );
};

export default Header;