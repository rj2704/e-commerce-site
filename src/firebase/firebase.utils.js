import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMHjm6hQ6sLENBdZkDBTyG8-e50qKBw3A",
    authDomain: "shoppers-point-20bd3.firebaseapp.com",
    projectId: "shoppers-point-20bd3",
    storageBucket: "shoppers-point-20bd3.appspot.com",
    messagingSenderId: "947857143950",
    appId: "1:947857143950:web:6b2edf313d1e43f1a5f1df",
    measurementId: "G-SRTL8D3N9D"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;

      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
