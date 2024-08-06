// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBgBxMnUXj7UrKUj7NYdBEhbYqEez7-b8g',
  authDomain: 'proton-4088a.firebaseapp.com',
  projectId: 'proton-4088a',
  storageBucket: 'proton-4088a.appspot.com',
  messagingSenderId: '988328984566',
  appId: '1:988328984566:web:7687d8d514664f99f751d7',
  measurementId: 'G-2FQSVLYZEC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

export { auth, provider, fbProvider };
