import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase/firebase.config';
export const AuthContext = createContext(null);

// create user
const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)

}

const FirebaseProvider = ({children}) => {

    const allValue = {
        createUser
    };
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;