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
// github login
const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
   
   }
// twitter login
const twitterLogin = ()=>{
    return signInWithPopup(auth, twitterProvider)
   
   }
// facebook login
const facebookLogin = ()=>{
    return signInWithPopup(auth, facebookProvider)
   
   }

//    logout user
const logout = ()=>{
    signOut(auth)
    setUser(null)
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
        googleLogin,
        githubLogin,
        logout,
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