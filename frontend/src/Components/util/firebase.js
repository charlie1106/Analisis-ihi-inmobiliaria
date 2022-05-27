import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJieief_yz8UP6cw5U8bHPVpT8ayUXYk4",
  authDomain: "inmobiliaria-2021-2.firebaseapp.com",
  databaseURL: "https://inmobiliaria-2021-2-default-rtdb.firebaseio.com",
  projectId: "inmobiliaria-2021-2",
  storageBucket: "inmobiliaria-2021-2.appspot.com",
  messagingSenderId: "246707203278",
  appId: "1:246707203278:web:b25f5fb1abf8e03b91749f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
