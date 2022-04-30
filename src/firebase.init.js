import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDK_M4yNF-ORj8VsVEwHhblu__MsPnJyT0",
    authDomain: "dream-electronics-5bda0.firebaseapp.com",
    projectId: "dream-electronics-5bda0",
    storageBucket: "dream-electronics-5bda0.appspot.com",
    messagingSenderId: "842473671698",
    appId: "1:842473671698:web:da839f714f212c3c445ccb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth