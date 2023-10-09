
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const auth = getAuth(app)
console.log(auth);

const AuthProvider = ({children}) => {

     // onAuthStateChange 
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

     useEffect(() => {
         const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("from onAuthStateChange",currentUser);
            setUser(currentUser)
            setLoading(false)
         })
         return () => {
             unSubscribe()
         }
     },[])

    // google log in

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logIn user 

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut user 

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user profile update 

    const userProfileUpdate = () => {
        return updateProfile(auth.currentUser, {
            displayName: "", photoURL: ""
        })
    }

   

    // value
    const authInfo = {googleLogIn, createUser,loginUser , user, logOutUser, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    
};

export default AuthProvider;