import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';




const PrivateRoutes = ({children}) => {

    let location = useLocation()
    let { user,loading } = useContext(AuthContext);


    if(loading){
             return <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                     </div>
    }
    if (!user) {
                 return <Navigate to='/login' state={{from:location}} replace ></Navigate>

        } else {
                    
                    return children;
    }


  
};

export default PrivateRoutes;