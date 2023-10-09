import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { useState } from "react";
import app from "../firebase/Firebase.config";
import PropTypes from 'prop-types';
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [nameAndPhoto, setNameAndPhoto] = useState({});
    const [loading, setLoading] = useState(true);
    

    //email and password authentication
    const createUser = (email, password) => {  
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //login authentication
    const signIn = (email, password,) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google login authentication
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
     //Update Name after register
    //As per firebase doc user logged in when register complete
    //So updateProfile method need to use to update displayName
    updateProfile(auth.currentUser, nameAndPhoto)
        
        .then()
        .catch((error) => {
            console.error(error);
          });
    
    //log out authentication
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const userDetails = auth.currentUser;
        console.log(userDetails);


    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("done", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = { user,createUser, signIn, userDetails, logOut, setNameAndPhoto, loading, signInGoogle }
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