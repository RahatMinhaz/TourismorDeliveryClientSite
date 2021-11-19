import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.config";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError,setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email,password,name,location,history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) =>{
                setAuthError('');
                const newUser = {email,displayName: name};
                setUser(newUser);
                updateProfile(auth.currentUser,{
                    displayName:name
                }).then(() =>{

                }).catch(() =>{

                });
                const destination = location?.state?.from || '/';
                history.replace(destination);
                
        })
        .catch((error) =>{
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
    }

    const loginUser = (email,password,location,history) =>{
        setLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
            
        })
        .catch((error) =>{
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
    }

    const signInUsingGoogle = (location,history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) =>{
            const user = result.user;
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) =>{
            setAuthError(error.message);
        })
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loading,
        authError,
        registerUser,
        loginUser,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;