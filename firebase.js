import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDSGxlI_DrLMlVmPfzw-uj6QiK3qa2GQeM",
  authDomain: "control-de-leds.firebaseapp.com",
  databaseURL: "https://control-de-leds-default-rtdb.firebaseio.com",
  storageBucket: "control-de-leds.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);


