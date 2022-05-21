import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBOP6uBHT3wQdGZKqkiI-Cn9d5g5p10bX4",
  authDomain: "devops-project-7ae30.firebaseapp.com",
  projectId: "devops-project-7ae30",
  storageBucket: "devops-project-7ae30.appspot.com",
  messagingSenderId: "721689795922",
  appId: "1:721689795922:web:86101159311b6ebdb5ae8b"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}