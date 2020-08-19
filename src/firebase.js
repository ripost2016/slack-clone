import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDbjdOhH7qsywZuJ-O0dtGlcmeiqTf7KJI',
  authDomain: 'slack-clone-2f8cc.firebaseapp.com',
  databaseURL: 'https://slack-clone-2f8cc.firebaseio.com',
  projectId: 'slack-clone-2f8cc',
  storageBucket: 'slack-clone-2f8cc.appspot.com',
  messagingSenderId: '1045855008998',
  appId: '1:1045855008998:web:394724aae94d1ef933a327',
  measurementId: 'G-N670KQM0LF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
