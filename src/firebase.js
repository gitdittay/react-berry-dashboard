// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef =firebase.database().ref();
export const vedashRef = databaseRef.child('dash');

export const analytics = getAnalytics(firebaseApp);

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => useSelector((state) => state.account);
const firebaseApp = initializeApp({ firebaseConfig });
const db = getFirestore(firebaseApp);

export const UserInfo {
  /**
   * The display name of the user.
   */
  readonly displayName: string | null;
  /**
   * The email of the user.
   */
  readonly email: string | null;
  /**
   * The phone number normalized based on the E.164 standard (e.g. +16505550101) for the
   * user.
   *
   * @remarks
   * This is null if the user has no phone credential linked to the account.
   */
  readonly phoneNumber: string | null;
  /**
   * The profile photo URL of the user.
   */
  readonly photoURL: string | null;
  /**
   * The provider used to authenticate the user.
   */
  readonly providerId: string;
  /**
   * The user's unique ID, scoped to the project.
   */
  readonly uid: string;
}

export default firebase;
