import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import app from "../firebase/Firebase.config";
import PropTypes from 'prop-types';
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [nameAndPhoto, setNameAndPhoto] = useState({});
    

    //email and password authentication
    const createUser = (email, password) => {  
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //login authentication
    const signIn = (email, password,) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

     //Update Name after register
    //As per firebase doc user logged in when register complete
    //So updateProfile method need to use to update displayName
    updateProfile(auth.currentUser, nameAndPhoto)
        .then()
        .catch((error) => {
            console.log(error);
          });
    
    


    const userDetails = auth.currentUser;
        console.log(userDetails);


    //log out authentication
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("done", currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = { user, createUser, signIn, userDetails, logOut, setNameAndPhoto }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}