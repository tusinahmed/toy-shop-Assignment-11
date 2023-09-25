import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firsebase';



export let AuthContext = createContext();

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    let [loader, setloader] = useState(true)
    let [errorMessage, seterrorMessage] = useState('');

    let [user, setuser] = useState('')


    let SignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    let logout = () => {
        return signOut(auth)


    }

    let googlesing = () => {
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        let unsubcribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloader(false)
            console.log(currentUser)
        })

        return () => {
            unsubcribe();
        }
    }, [])

    let authinfo = {
        user,
        SignUpUser,
        setuser,
        auth,
        signIn,
        logout,
        loader,
        googlesing,
        errorMessage, seterrorMessage

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