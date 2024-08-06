// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBNRe8L39w0onEPD2WvEYeWAZPJpXtFyTc',
  authDomain: 'realproton-340e3.firebaseapp.com',
  projectId: 'realproton-340e3',
  storageBucket: 'realproton-340e3.appspot.com',
  messagingSenderId: '967420379280',
  appId: '1:967420379280:web:285cb31ac9b83212f3d815',
  measurementId: 'G-XWPFM7JHCP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

export { auth, provider, fbProvider };
