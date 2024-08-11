import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../firebase/firebase.config';
export const AuthContext = createContext(null);


// social auth provider
const googleProvider = new GoogleAuthProvider();



const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // console.log(user)

// create user
const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)

}

const signInUser = (email, password)=>{
   return signInWithEmailAndPassword(auth, email, password)

}

// google login
const googleLogin = ()=>{
 return signInWithPopup(auth, googleProvider)

}

// observer
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } 
      });
},[])



    const allValue = {
        createUser,
        signInUser,
        googleLogin
    };
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;