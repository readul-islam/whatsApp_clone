// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAb_UrYMBiu7WpgY9LiZVOSGFPeYNGASD4',
  authDomain: 'real-app-215b6.firebaseapp.com',
  projectId: 'real-app-215b6',
  storageBucket: 'real-app-215b6.appspot.com',
  messagingSenderId: '791856827901',
  appId: '1:791856827901:web:107e855d20c43087bf9d94',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
