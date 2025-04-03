import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBJoYnWbgcB6ymRSCP8tXILtTTWBNwGNv0",
  authDomain: "reactjs-coder-7e9c2.firebaseapp.com",
  projectId: "reactjs-coder-7e9c2",
  storageBucket: "reactjs-coder-7e9c2.firebasestorage.app",
  messagingSenderId: "589552932791",
  appId: "1:589552932791:web:f1be10c957c213cda37a32",
  measurementId: "G-41582YRZFG"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
