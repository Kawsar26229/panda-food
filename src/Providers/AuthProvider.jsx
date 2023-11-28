import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (userName) => {
        return updateProfile(auth.currentUser, {
            displayName: userName
        });
    }
    const loggedUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
        });
        return () => {
            unsubscribe();
        }
    },[]);
    const loggedOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        auth,
        user,
        createUser,
        updateUser, 
        loggedUser,
        passwordReset,
        loggedOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;