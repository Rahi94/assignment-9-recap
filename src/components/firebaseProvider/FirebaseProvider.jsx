import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, TwitterAuthProvider, FacebookAuthProvider } from "firebase/auth";
import auth from '../../firebase/firebase.config';
export const AuthContext = createContext(null);


// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();



const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user)

// create user
const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

}

const signInUser = (email, password)=>{

    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)

}

// google login
const googleLogin = ()=>{
    setLoading(true)
 return signInWithPopup(auth, googleProvider)

}
// github login
const githubLogin = ()=>{
    setLoading(true)

    return signInWithPopup(auth, githubProvider)
   
   }
// twitter login
const twitterLogin = ()=>{
    setLoading(true)

    return signInWithPopup(auth, twitterProvider)
   
   }
// facebook login
const facebookLogin = ()=>{
    setLoading(true)

    return signInWithPopup(auth, facebookProvider)
   
   }

//    logout user
const logout = ()=>{
    signOut(auth)
    setUser(null)
    setLoading(true)

}

// observer
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          setLoading(false)
        } 
      });
},[])



    const allValue = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        loading,
        user,
        twitterLogin,
        facebookLogin
    };
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;