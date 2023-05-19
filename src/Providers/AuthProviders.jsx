import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logInUser = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInWithGoogle = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)

        })

        return () => {
            return unsubscribe()
        }

    }, [])

    const logOut = () => {

        setLoading(true)
        return signOut(auth)
    
    }

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;