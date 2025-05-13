// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD8Dpuj-toPmcrAgSa1fm_umoRD0Qa3MSg',
  authDomain: 'enlista-2469f.firebaseapp.com',
  projectId: 'enlista-2469f',
  storageBucket: 'enlista-2469f.appspot.com',
  messagingSenderId: '579535498112',
  appId: '1:579535498112:android:8b3782e480b8e68377af65',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
