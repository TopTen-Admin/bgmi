// Firebase console > Project settings > Your apps > Web app se config yahan paste karein
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCce_ItA7OUiYHZI64PCyIDAAXz1w4L9y0",
  authDomain: "topten-ee2ba.firebaseapp.com",
  projectId: "topten-ee2ba",
  appId: "1:697121737530:web:cd31ed53d7490f2687de03"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
