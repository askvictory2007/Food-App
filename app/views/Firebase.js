import AppContainer from './src/AppContainer';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Actions } from 'react-native-router-flux';
import Login from './Login';




// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDvDBQM0N5wnh4_QpyUDjUurQa1-3lZC3c",
  authDomain: "restaurantapp-3f27a.firebaseapp.com",
  databaseURL: "https://restaurantapp-3f27a.firebaseio.com",
  projectId: "restaurantapp-3f27a",
  storageBucket: "restaurantapp-3f27a.appspot.com",
  messagingSenderId: "898255848685",
  appId: "1:898255848685:web:7dc3d3d923fe90737bf8e4",
  measurementId: "G-NE6Y1JC9SE"

};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;

