import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBAGDrjPQ6t8LEehihWgargfYT8-VRIhMw",
    authDomain: "muso-ninjas-bcc85.firebaseapp.com",
    projectId: "muso-ninjas-bcc85",
    storageBucket: "muso-ninjas-bcc85.appspot.com",
    messagingSenderId: "478800601060",
    appId: "1:478800601060:web:8936856c3722272e9a31f1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }