import firebase from "firebase/app";
import "firebase/auth";

let config;
try {
  config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };
} catch (e) {
  console.error(e);
}

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (firebase.apps.length === 0 && config) {
      instance = firebase.initializeApp(config);
      instance.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      return instance;
    }
    return instance;
  }
  return null;
}
