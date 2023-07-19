export const environment = {
    production: false,
    APP_ID: '46f85330',
    APP_KEY: '39acb22fea92153f6dcc90a9ad66adea'
  };


  // Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseApp } from '@angular/fire/compat';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurationexport 
export const firebaseConfig = {
    apiKey: 'AIzaSyAdHWS1QJm2tNocui1odkmtEuA47pP9VVo',
    authDomain: 'recipefinderappdev.firebaseapp.com',
    projectId: 'recipefinderappdev',
    storageBucket: 'recipefinderappdev.appspot.com',
    messagingSenderId: '231883793964',
    appId: '1:231883793964:web:aa23e6a5108f3321155389'
}

export const environmentFirebase = {
    production: false,
    firebaseConfig
};

// Initialize Firebase
export const firebaseApp = initializeApp(environmentFirebase.firebaseConfig);
/* Check connection status
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('Connection established');
  } else {
    console.log('Connection not established');
  }
});
*/

// Check connection status
const firestore = getFirestore();
const testDocRef = doc(firestore, 'your-collection', 'your-document');

getDoc(testDocRef)
  .then(() => {
    console.log('Connection established');
  })
  .catch((error) => {
    console.log('Connection not established:', error);
  });