import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/Firebase.init';

// firebase initialization function called here 
initializeAuthentication();

const useFirebase = () => {

    // states are here 
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    // auth and providers here 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // create user with email and password here 
    const createUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateUserProfile(name);
                setUser(result.user);
                setError('');
                history.push('/home');
                saveUser(email, name, 'POST')
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

    // google sign in here 
    const signInWithGoogle = history => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
                history.push("/home");
                saveUser(result.user.email, result.user.displayName, 'PUT');
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // save user 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://lit-lake-52047.herokuapp.com/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
    }

    // user admin data loading 
    useEffect(() => {
        fetch(`https://lit-lake-52047.herokuapp.com/user/${user.email}`)
            .then(response => response.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // log out user here 
    const logoutUser = () => {
        signOut(auth)
            .then(() => console.log('successfullll'))
            .catch(error => setError(error.message))
    }

    // returning here all the necessary things
    return {
        admin,
        user,
        error,
        setUser,
        setError,
        createUser,
        signIn,
        loading,
        logoutUser,
        signInWithGoogle,
    }
}

export default useFirebase;