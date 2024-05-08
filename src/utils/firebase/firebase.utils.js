import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocFromCache,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCaGCQWU8V7jDdXbaVaWRiTCG1LtJ0S19w',
  authDomain: 'clothing-store-d8ce6.firebaseapp.com',
  projectId: 'clothing-store-d8ce6',
  storageBucket: 'clothing-store-d8ce6.appspot.com',
  messagingSenderId: '744307278181',
  appId: '1:744307278181:web:a027c4f01326187eb5a18c',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
