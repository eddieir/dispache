import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messageSenderId: process.env.messageSenderId
};
const firebaseConfig = firebase.initializeApp(config);

/*const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyB-Lb1ZJ6WM2_ZMuAA-eJadVMeq7NuSKz0',
  authDomain: 'dispache-4b5a7.firebaseapp.com',
  databaseURL: 'https://dispache-4b5a7.firebaseio.com',
  projectId: 'dispache-4b5a7',
  storageBucket: 'dispache-4b5a7.appspot.com',
  messageSenderId: '827819004463',
  apiId: '1:827819004463:web:f1866d64c38265b28c6cda',




});
*/
export { firebaseConfig as firebase };