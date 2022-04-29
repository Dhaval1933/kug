import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBVMfLI1uqviGZG_fglIkQQ3a3ZY0VdIeA",
  authDomain: "gfzs-44941.firebaseapp.com",
  projectId: "gfzs-44941",
  storageBucket: "gfzs-44941.appspot.com",
  messagingSenderId: "65336589180",
  appId: "1:65336589180:web:ef5780591a88b16dd682f9"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
