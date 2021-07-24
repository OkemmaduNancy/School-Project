import firebase from "firebase";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJye4JTFQih7ch6MjzbUDcOoDo_DDOdRI",
    authDomain: "smart-home-d7dab.firebaseapp.com",
    projectId: "smart-home-d7dab",
    storageBucket: "smart-home-d7dab.appspot.com",
    messagingSenderId: "29749257892",
    appId: "1:29749257892:web:fab870231ca5d2fd84e831"
};

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()

const DEV_BASE_URL = process.env.REACT_APP_DEV_BASE_URL;
const PROD_BASE_URL = process.env.REACT_APP_PROD_BASE_URL;
const isDev = process.env.NODE_ENV === "development"

export const BASE_URL = isDev ? DEV_BASE_URL : PROD_BASE_URL
