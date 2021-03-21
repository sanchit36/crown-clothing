import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwkr1qmg786dbmrw-P2OWZYpoN3NToxB0",
  authDomain: "crown-db-95bfc.firebaseapp.com",
  projectId: "crown-db-95bfc",
  storageBucket: "crown-db-95bfc.appspot.com",
  messagingSenderId: "833739393726",
  appId: "1:833739393726:web:cfb9d46253f3f978eaecef",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
