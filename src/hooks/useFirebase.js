import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";




initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {

                setError(error.message);

            });
    }

    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
    }, [])

    return { signInUsingGoogle, signOutUser, user, error }
}

export default useFirebase;