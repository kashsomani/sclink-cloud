// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY7tWEFAU6gw6tUplC6pScjLvYBJZ1BZ4",
    authDomain: "sclink-6917c.firebaseapp.com",
    projectId: "sclink-6917c",
    storageBucket: "sclink-6917c.appspot.com",
    messagingSenderId: "480742265172",
    appId: "1:480742265172:web:77d84ada16a37a981f38c1",
    measurementId: "G-LL9SGYT8HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addContactInfor = async () => {
    await setDoc(doc(db, "Messages", "Individual"), {
        Name: {Name},
        Email: {Email},
        Subject: {Subject},
        Message: {Message}
    });
}
