import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';


import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import CarouselItem from '../../carousel/CarouselItem';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const RightSiteNav = () => {

const {googleSignIn,logOut} = useContext(AuthContext)


const handleGoogleSignInButton = ()=>{
    googleSignIn()
  .then((result) => {
    const user = result.user;
    
    console.log(user)
   
  }).catch((error) => {
    console.error(error);
  })
}

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
        <div>
            <h2>right site nav....</h2>
            <ButtonGroup vertical>
                <Button className='my-1' onClick={handleGoogleSignInButton}> <BsGoogle/> Log in with Google</Button>
                <Button className='my-1'> <BsGithub/> Log in with Git</Button>
                <Button className='my-1' onClick={handleLogOutBtn}> <FiLogOut/>Log Out</Button>
            </ButtonGroup> 
            <br /><br />

            <ListGroup>
                <h6 className='my-0'>get in touch with</h6>
                <ListGroup.Item className='my-1'><BsFacebook/> Facebook</ListGroup.Item>
                <ListGroup.Item className='my-1'><BsTwitter/> Twitter</ListGroup.Item>
                <ListGroup.Item className='my-1'><FaYoutube/> YouTube</ListGroup.Item>
                <ListGroup.Item className='my-1'><BsWhatsapp/> WhatsApp</ListGroup.Item>
                <ListGroup.Item className='my-1'><FiInstagram/> Instagram</ListGroup.Item>
            </ListGroup>


            <div><br /><br />
                <CarouselItem></CarouselItem>
            </div>
            
        </div>
    );
};

export default RightSiteNav;