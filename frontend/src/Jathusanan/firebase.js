import firebase from "firebase/app";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCFY5qkiKELDPOf48DYNpkO3kDMyuzMZjo",
  authDomain: "hotelagoura-63dfc.firebaseapp.com",
  projectId: "hotelagoura-63dfc",
  storageBucket: "hotelagoura-63dfc.appspot.com",
  messagingSenderId: "630221233009",
  appId: "1:630221233009:web:122017d8101411ec7134d0",
  measurementId: "G-JSR7TLQE9Y",
};

firebase.initializeApp(config);
const storage = firebase.storage();

export { storage, firebase };
