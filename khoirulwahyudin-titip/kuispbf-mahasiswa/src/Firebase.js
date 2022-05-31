import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import firebase from "firebase";


const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyB3vJ4ToypDa2px0Eu9z8AMjjkyHxGbDQc",
  authDomain: "pbf2022-792c0.firebaseapp.com",
  projectId: "pbf2022-792c0",
  storageBucket: "pbf2022-792c0.appspot.com",
  messagingSenderId: "450870180772",
  appId: "1:450870180772:web:1e44b17dd966d8c611df31",
  measurementId: "G-NB3LTKT8VP"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
// const init = firebase.initializeApp(config);
// export const firebaseAuthentication = init.auth();

export default firebase;
