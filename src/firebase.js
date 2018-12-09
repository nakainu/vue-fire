import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE.apiKey,
  authDomain: process.env.FIREBASE.authDomain,
  databaseURL: process.env.FIREBASE.databaseURL,
  projectId: process.env.FIREBASE.projectId,
  storageBucket: process.env.FIREBASE.storageBucket,
  messagingSenderId: process.env.FIREBASE.messagingSenderId
});

export const db = app.database();
export const todosRef = db.ref('todos');
