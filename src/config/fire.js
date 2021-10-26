import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDaH9S0kem-TwC43dDEyC24ArbLmLr5s5g",
  authDomain: "bagcampus-candiate.firebaseapp.com",
  projectId: "bagcampus-candiate",
  storageBucket: "bagcampus-candiate.appspot.com",
  messagingSenderId: "1011095132021",
  appId: "1:1011095132021:web:d7df95500c7b6d8052e53c",
  measurementId: "G-MZB6KNSSMP",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);

export default fire;
