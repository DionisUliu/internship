import * as firebase from 'firebase/app'
import 'firebase/database' 
import 'firebase/auth' 
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaKtAIyuxY2s8DMnnkUv4sj5JRTiWDrEc",
    authDomain: "books-store-f586a.firebaseapp.com",
    databaseURL: "https://books-store-f586a-default-rtdb.firebaseio.com",
    projectId: "books-store-f586a",
    storageBucket: "books-store-f586a.appspot.com",
    messagingSenderId: "208872802262",
    appId: "1:208872802262:web:8f2908e6686c773976c677",
    measurementId: "G-G8ZW29QT5N"
  };

  console.log(firebase.database)


 
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth()
  const storage =firebase.storage();
  const database=firebase.database()

  export {storage,database, firebase as default } 