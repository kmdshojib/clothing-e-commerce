import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCWN_0bTsE6PnYnOl_-NJQ3bP2UHeo9HIE",
    authDomain: "cloth-db-2edf6.firebaseapp.com",
    projectId: "cloth-db-2edf6",
    storageBucket: "cloth-db-2edf6.appspot.com",
    messagingSenderId: "574778663658",
    appId: "1:574778663658:web:db13774db5bf38522a6d93",
    measurementId: "G-MV51687S4Y"
  };

export const createUserProfileDocument = async (userAuth,additonalData)=>{
  if(!userAuth)return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const{displayName, email} =userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additonalData
      })
    }catch(error){
      console.log('error creating user',error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;