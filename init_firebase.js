import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyAfYv4j5m5NLaPZX4QxNc8bolfwMW2ZX3I",
    authDomain: "storyverse-app.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: "storyverse-app",
    storageBucket: "storyverse-app.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    measurementId: "G-MEASUREMENT_ID",
  };
const app = initializeApp(firebaseConfig);