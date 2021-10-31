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

export const addCollectionAndDocuments =async (collectionKey, objectsToAdd) =>{
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef)

  const batch = firestore.batch()
  objectsToAdd.forEach(object =>{
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, object)
  })

  return await batch.commit()
}

export const  convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items } = doc.data();

    return{
      routeName:encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accmulator, collection) => {
    accmulator[collection.title.toLowerCase()] = collection
    return accmulator
  }, {})
}

//getting IS USER AUTHENTICATED

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth=> {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;