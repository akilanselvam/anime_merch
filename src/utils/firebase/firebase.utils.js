// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsRmk7Ao3Azr1ZPv7u5kjGqSdqQhAFOG4",
  authDomain: "anime-merchiha.firebaseapp.com",
  projectId: "anime-merchiha",
  storageBucket: "anime-merchiha.appspot.com",
  messagingSenderId: "85385845392",
  appId: "1:85385845392:web:7abbfaf03d5e2904d39615",
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInwithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, addinfo) => {
  const userRefDoc = await doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRefDoc);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = Date();
    try {
      await setDoc(userRefDoc, { displayName, email, createdAt, ...addinfo });
    } catch (error) {
      console.log("Error Happened in Creating User", error.message);
    }
  }
  return userRefDoc;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
