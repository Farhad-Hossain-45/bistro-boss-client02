import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebse/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic';

export const authContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    // const createUser = (email, password) =>{
    //     setLoading(true)
    //   return createUserWithEmailAndPassword(email, password)
    // }
    const createUser = (email, password )=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user', currentUser)
            if(currentUser){
               const userInfo = {email : currentUser.email}
               axiosPublic.post('/jwt', userInfo)
               .then(res=> {
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                }
                
               })

            }else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[]);
    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider >
    );
};

export default AuthProvider;