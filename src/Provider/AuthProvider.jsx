import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Singin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout
    const Logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            // console.log(loggedUser)

            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
            // if user exist then Issue a token

            if (currentUser) {
                axios.post("https://car-doctor-server-ruddy-kappa.vercel.app/jwt", loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log("token Response on AuthProvider", res.data);
                    })
            }
            else {
               
                // Cookies.remove('Token',)
                // fetch("https://car-doctor-server-ruddy-kappa.vercel.app/singout")
                //     .then(res => {
                //         return res.json();
                //     })
                //     .then(result => {
                //         console.log(result);
                //     })

            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])





    const value = {
        user, loading,
        CreateUser,
        Singin,
        Logout,

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider >
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;




