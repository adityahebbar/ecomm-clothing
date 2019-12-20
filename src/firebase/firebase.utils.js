import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD9jtDGSCUuWLP3Ldwps2TyQCp6V0HrTC8",
    authDomain: "ecomm-clothing.firebaseapp.com",
    databaseURL: "https://ecomm-clothing.firebaseio.com",
    projectId: "ecomm-clothing",
    storageBucket: "ecomm-clothing.appspot.com",
    messagingSenderId: "947105402579",
    appId: "1:947105402579:web:2af1bc8df2b85e95ed0e26"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log(err);
        }

    }

    return userRef;
}