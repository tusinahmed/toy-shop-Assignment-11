import React, { createContext, useState } from 'react';



export let AuthContext = createContext();


const AuthProvider = ({ children }) => {

    let [user, setuser] = useState('tusin')

    let authinfo = {
        user
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