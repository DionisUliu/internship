import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, set,update,child,remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaKtAIyuxY2s8DMnnkUv4sj5JRTiWDrEc",
  authDomain: "books-store-f586a.firebaseapp.com",
  databaseURL: "https://books-store-f586a-default-rtdb.firebaseio.com",
  projectId: "books-store-f586a",
  storageBucket: "books-store-f586a.appspot.com",
  messagingSenderId: "208872802262",
  appId: "1:208872802262:web:8f2908e6686c773976c677",
  measurementId: "G-G8ZW29QT5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebaseConfig.initializeApp(firebaseConfig)
const db = getDatabase(app);

export { db, ref, push, onValue, set ,update,child,remove};
