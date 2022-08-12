import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHzeNvqHuhHfb8IkqO3sYg3QKU-cYrwR4",
  authDomain: "muda-mandiri.firebaseapp.com",
  projectId: "muda-mandiri",
  storageBucket: "muda-mandiri.appspot.com",
  messagingSenderId: "385110701869",
  appId: "1:385110701869:web:f5f527e8100d35357dc5a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)