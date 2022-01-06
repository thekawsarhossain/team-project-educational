import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, sendEmailVerification, deleteUser, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/Firebase.init';

// firebase initialization function called here 
initializeAuthentication();

const useFirebase = () => {

    // states are here 
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // auth and providers here 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // create user with email and password here 
    const createUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateUserProfile(name);
                setUser(result.user);
                setError('');
                history.push('/home');
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }

    // sign in existing user here 
    const signIn = (email, password, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                history.push('/home');
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }

    // getting the current user here 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError('')
            } else { setUser({}) }
            setLoading(false);
        });
    }, [auth])

    // update user profile || name here 
    const updateUserProfile = name => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => { })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }

    // verify email here 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => console.log('sendddd'))
            .catch(error => setError(error.message))
            ;
    }

    // delete user here 
    const userDelete = () => {
        deleteUser(auth.currentUser)
            .then(() => { })
            .catch(error => setError(error.message))
    }

    // google sign in here 
    const signInWithGoogle = history => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
                history.push("/home");
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // facebook sign in here 
    const signInWithFacebook = history => {
        setLoading(true)
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                setError('');
                history.push("/home");
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // log out user here 
    const logoutUser = () => {
        signOut(auth)
            .then(() => console.log('successfullll'))
            .catch(error => setError(error.message))
    }

    // returning here all the necessary things
    return {
        user,
        error,
        setUser,
        setError,
        createUser,
        signIn,
        loading,
        verifyEmail,
        userDelete,
        logoutUser,
        signInWithGoogle,
        signInWithFacebook
    }
}

export default useFirebase;