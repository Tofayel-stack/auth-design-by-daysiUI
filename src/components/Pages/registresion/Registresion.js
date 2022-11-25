import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Registresion = () => {
    let {createUserByRegister,updateUserProfileInfo,userEmailVarification} = useContext(AuthContext)
    let [error,setError] = useState('')
    let navigate = useNavigate()
    let [active,setActive] = useState(false)


    const notify = () => toast('hy, u got an error!!')

    const handleCheckBtn = (event) =>{
      let activeORdiactive = event.target.checked
      setActive(activeORdiactive)
    }

    const handleRegisterBtn = (event)=> {
        event.preventDefault()
        let form = event.target;
        let email = form.email.value;
        let password = form.password.value;
        let name = form.name.value;
        let photoURL = form.photo.value;
        createUserByRegister(email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            setError('')
            form.reset()
            handleUpdateUserProfileInfo (name,photoURL)
            handleUserEmailVarification()
            if(user.emailVerified){
              navigate('/')
            }else{
              alert('please verify ur email')
            }
          })
          .catch((error) => {
           console.error(error)
           let errorMessage = error.message;
           setError(errorMessage)
           form.reset()
           notify()
            // ..
          })
    }

    const handleUpdateUserProfileInfo =(name,photoURL)=>{
      let profile = {
          displayName: name,
          photoURL: photoURL
      }
      updateUserProfileInfo(profile)
      .then(() => {})
      .catch((error) => {})
    }

    const handleUserEmailVarification =()=>{
      userEmailVarification()
      .then(()=>{})
    }





    return (
        <div>
            <h2>Are u a new commer .please register</h2>
            <Form onSubmit={handleRegisterBtn} className='text-start'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Write your name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Your photo</Form.Label>
          <Form.Control type="text" placeholder="photo URL" name="photo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

      {/* check box */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* ata level ta dianamic kore er modde level er vitore Link bosano jabe */}
          <Form.Check type="checkbox" label="accept our terms and conditions" onClick={handleCheckBtn} />
        </Form.Group>


        <Button variant="primary" type="submit" disabled={!active}>
          Register
        </Button> <span className='text-danger'>{error}</span>
      </Form>
      <ToastContainer/>
        </div>
    );
};

export default Registresion;