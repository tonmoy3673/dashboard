import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../../../firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider=({children})=>{

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
const authInfo={
    createUser,
    loading,
    setLoading,
    user

}
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )



};


export default AuthProvider;
