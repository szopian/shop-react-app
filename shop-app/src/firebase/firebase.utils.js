import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDCS7Ipx1aC0sc3-b80R1aovpkpGSs3oQA",
  authDomain: "online-shop-227a0.firebaseapp.com",
  projectId: "online-shop-227a0",
  storageBucket: "online-shop-227a0.appspot.com",
  messagingSenderId: "123174139362",
  appId: "1:123174139362:web:ef71df896d2aea45c775bb",
  measurementId: "G-320X066LR4",
};

firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;

// ====== OUTDATED VERSION 8 =============

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyDCS7Ipx1aC0sc3-b80R1aovpkpGSs3oQA",
//   authDomain: "online-shop-227a0.firebaseapp.com",
//   projectId: "online-shop-227a0",
//   storageBucket: "online-shop-227a0.appspot.com",
//   messagingSenderId: "123174139362",
//   appId: "1:123174139362:web:ef71df896d2aea45c775bb",
//   measurementId: "G-320X066LR4",
// };

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ promt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
