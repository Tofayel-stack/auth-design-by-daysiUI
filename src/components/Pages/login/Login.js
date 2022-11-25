import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    let {userLogIn,setLoading} = useContext(AuthContext)
    let [error,setError] = useState('')
    let navigate = useNavigate()
    let location = useLocation()


    const notify = () => toast('hy u r wellcome')
    const notifyError = () => toast('hy u got an error !!! ')

    let handleLogin = (event)=>{
        event.preventDefault()
        let form = event.target;
        let email = form.email.value;
        let password = form.password.value;

       
        let from = location.state?.from?.pathname || '/' ;


        userLogIn(email,password)
        .then((res) => {
            // Signed in 
            const user = res.user
            console.log(user)
            notify()
            form.reset()
            navigate(from,{replace:true})
            
            // ...
          })
          .catch((error) => {
            console.error(error)
            const errorMessage = error.message
            setError(errorMessage)
            notifyError()
            form.reset()
            
          })
          .finally(()=>{
            setLoading(false)
          })
    }



    return (
      <Form onSubmit={handleLogin} className='text-start'>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <span>don't have <Link to='/registresion'>account ?</Link></span> <br />
        
        <Button variant="primary" type="submit">
          LogIn
        </Button><span className='text-danger'>{error}</span>
        <ToastContainer />
        
      </Form>
    );
};

export default Login;