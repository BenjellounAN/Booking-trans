// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, writeBatch } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh8ssk6K7_LXDPpG3X85Z7VlUwDa_0_Og",
  authDomain: "deliverymarrakech.firebaseapp.com",
  projectId: "deliverymarrakech",
  storageBucket: "deliverymarrakech.firebasestorage.app",
  messagingSenderId: "543072772322",
  appId: "1:543072772322:web:468d0c047e06c86bde7ebb",
  measurementId: "G-YMXBJFJ9N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Collection reference
const paymentsCollection = collection(db, "payments");

// Export everything needed
export { 
    db, 
    paymentsCollection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    doc, 
    query, 
    orderBy, 
    writeBatch,
    collection
};
