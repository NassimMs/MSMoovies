import React,{useContext,useState,useEffect} from 'react'
import {auth} from "../firebase"

const Authcontext = React.createContext()

export function useAuth(){
    return useContext(Authcontext)
}

export function  AuthProvider({children}){
    const [CurrentUser,setCurrentUser] = useState()
    const [Loading,setLoading] = useState(true)

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)

    }
    
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)

    }

    function logout(){
        return auth.signOut()

    }


    useEffect(()=>{
       const unsubscribe =  auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
            
        })
        return unsubscribe
    },[])

    const value = {
        CurrentUser,
        login,
        signup,
        logout
    }
    return (
        <Authcontext.Provider value={value}>
            {!Loading && children}
        </Authcontext.Provider>
    )
}

export default AuthProvider
