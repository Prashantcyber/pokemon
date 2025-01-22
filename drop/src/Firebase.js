
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkj174TAI_ApTHUkRtpeRKhXivtbm2rrI",
  authDomain: "data-4b685.firebaseapp.com",
  databaseURL: "https://data-4b685-default-rtdb.firebaseio.com",
  projectId: "data-4b685",
  storageBucket: "data-4b685.appspot.com",
  messagingSenderId: "883848951319",
  appId: "1:883848951319:web:c7ab3d4368f1748ec38e52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;