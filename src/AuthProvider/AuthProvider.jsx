import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/Firsebase';



export let AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    let [user, setuser] = useState('')


    let SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    let authinfo = {
        user,
        SignUpUser,
        setuser,
        auth

    }


    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;