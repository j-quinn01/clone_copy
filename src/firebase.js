// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1oqxk1BouEUBZqlJUHR85MK2jhyCB2QE",
  authDomain: "clone-copy-c7b4c.firebaseapp.com",
  projectId: "clone-copy-c7b4c",
  storageBucket: "clone-copy-c7b4c.appspot.com",
  messagingSenderId: "474096167799",
  appId: "1:474096167799:web:0a3dac3acd4d6241844f72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
