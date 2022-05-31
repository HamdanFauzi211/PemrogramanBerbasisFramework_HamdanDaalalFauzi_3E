import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCDhZij4mLcjE8A47WmC5hPYH8N3IqPrM4",
  authDomain: "pbf-modul10-1dd9d.firebaseapp.com",
  databaseURL: "https://pbf-modul10-1dd9d-default-rtdb.firebaseio.com",
  projectId: "pbf-modul10-1dd9d",
  storageBucket: "pbf-modul10-1dd9d.appspot.com",
  messagingSenderId: "230489933670",
  appId: "1:230489933670:web:aaae30a2a74ddcc22d6aa7",
  measurementId: "G-4X09MLQKG3"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
