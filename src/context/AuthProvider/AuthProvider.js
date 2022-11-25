import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../../firebase/Firebase.init';



export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleSignIn = ()=>{
        setLoading(true)
       return signInWithPopup(auth, provider)

    }
    const logOut = ()=> {
        setLoading(true)
        return signOut(auth)
    }


    const userLogIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUserByRegister = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfileInfo =(profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const userEmailVarification=()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }


   


    useEffect (()=>{
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            
            setLoading(false)
          }) 
          return ()=>{
            unsubscribe()
        }
    },[])




    let authInfo = {
        user,
        loading,
        setLoading,
        googleSignIn,
        setUser,
        logOut,
        userLogIn,
        createUserByRegister,
        updateUserProfileInfo,
        userEmailVarification
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;