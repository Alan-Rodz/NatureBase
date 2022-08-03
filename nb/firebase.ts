import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// ********************************************************************************
// == Config ======================================================================
const firebaseConfig = {
    apiKey: "AIzaSyDVzf1_u4Eq2beZqUdUdg36UpzzXMhWuoE",
    authDomain: "naturebase-82118.firebaseapp.com",
    projectId: "naturebase-82118",
    storageBucket: "naturebase-82118.appspot.com",
    messagingSenderId: "790845881773",
    appId: "1:790845881773:web:d1703db348c43d922a7524"
};
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}/* else -- firebase already initialized */

// == Constant ====================================================================
export const storage = firebase.storage();
export const firestore = firebase.firestore();

// == Util ========================================================================
export function postToJSON(doc) {
    const data = doc.data();
    return { ...data };
}