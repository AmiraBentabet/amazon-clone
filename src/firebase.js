import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIQPC06NsF1VrfboJ_vuOxe-VsthZtopM",
  authDomain: "challange-f5f90.firebaseapp.com",
  databaseURL: "https://challange-f5f90.firebaseio.com",
  projectId: "challange-f5f90",
  storageBucket: "challange-f5f90.appspot.com",
  messagingSenderId: "483454226485",
  appId: "1:483454226485:web:7f86fc835b11e7c16da17c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
