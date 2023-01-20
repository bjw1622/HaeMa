import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3FeIl2plQFBpnqltN_et7rGdOblNvqgE",
  authDomain: "hae-ma.firebaseapp.com",
  projectId: "hae-ma",
  storageBucket: "hae-ma.appspot.com",
  messagingSenderId: "831224162773",
  appId: "1:831224162773:web:4e4fe2dd466094ff23b55c",
  measurementId: "G-8L8N9D12SF",
  databaseUrl:
    "https://hae-ma-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const firebaseApp = app;
export const fbAuth = getAuth(app);
export const db = getFirestore(app);
