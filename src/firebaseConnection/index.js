import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCIA9VGVUb3Puk63x_wPcDQv8f3xQAOiwc",
  authDomain: "aula-01-firebase-c121d.firebaseapp.com",
  projectId: "aula-01-firebase-c121d",
  storageBucket: "aula-01-firebase-c121d.appspot.com",
  messagingSenderId: "511715196092",
  appId: "1:511715196092:web:8215849a2ea259d09664b9",
  measurementId: "G-VF3D0C9F1X"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;