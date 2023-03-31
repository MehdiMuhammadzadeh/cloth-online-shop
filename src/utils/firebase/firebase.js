// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX4uzBZzQgvp4aHLpist_Upcfi5shY5kM",
  authDomain: "crwn-clothing-db-73fc0.firebaseapp.com",
  projectId: "crwn-clothing-db-73fc0",
  storageBucket: "crwn-clothing-db-73fc0.appspot.com",
  messagingSenderId: "407832608612",
  appId: "1:407832608612:web:2f9a576fc5959a954ec471",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// crwn-clothing-new-web-app

export const auth = getAuth();
export const signInWihGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);
  // console.log(userSnapShot.exists()); //boolean true false


  // if userdata does not exist
  // create // set the document with the data from username in my collection
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user data exits return userDocRef
  return userDocRef;
};
