
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    // google log in

    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
    }
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logIn user 

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user 

    const logOutUser = () => {
        return signOut(auth)
    }


    // onAuthStateChange 
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
           console.log("from onAuthStateChange",currentUser);
           setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    // value
    const authInfo = {googleLogIn, createUser,loginUser , user, logOutUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    
};

export default AuthProvider;