import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAZWIfdiRy5-PecALmhw-uhTCrN2r2wkQE',
  authDomain: 'snow-86a81.firebaseapp.com',
  databaseURL: 'https://snow-86a81.firebaseio.com',
  projectId: 'snow-86a81',
  storageBucket: 'snow-86a81.appspot.com',
  messagingSenderId: '127629615625',
  appId: '1:127629615625:web:72f259e5728c50fb688ed8',
  measurementId: 'G-8PP6TT97EX',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firestore = firebase.firestore();

export default firestore;
