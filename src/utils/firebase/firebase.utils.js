// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBugHTcCd-qYzFXrf6Bqyh_Nx3acVzC45E",
  authDomain: "crown-clothing-db-d8368.firebaseapp.com",
  projectId: "crown-clothing-db-d8368",
  storageBucket: "crown-clothing-db-d8368.appspot.com",
  messagingSenderId: "340226751936",
  appId: "1:340226751936:web:8e5507f0c17240d57a1c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const goggleProvider =  new  GoogleAuthProvider();
goggleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, goggleProvider);
// export const signInwithGoogleRedirect = () => signInWithRedirect(auth, goggleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;
                      //database, users collection, user auth unique id     
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log("userdocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log("usersnapshot", userSnapshot);
  console.log("usersnapshot", userSnapshot.exists());



// is user data not exists
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    }catch(err){
      console.log("error! creating the user", err.message);
    }
  }
  // if user data exists
  return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);