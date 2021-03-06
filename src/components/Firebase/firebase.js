import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBbpIK2qYIpsiwRauXYsgWWu4vEyd0jFN8",
  authDomain: "workout-tracker-89c43.firebaseapp.com",
  databaseURL: "https://workout-tracker-89c43.firebaseio.com",
  projectId: "workout-tracker-89c43",
  storageBucket: "workout-tracker-89c43.appspot.com",
  messagingSenderId: "590075298141",
  appId: "1:590075298141:web:3f03dfae0e5068189ea8b4",
  measurementId: "G-CGK5NW8J2R",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  /*** Authentication  ***/
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  /*** Database ***/
  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");

  addActivity = (uid, activity) => {
    const ref = this.db.ref().child(`users/${uid}/activities`);
    ref.push(activity);
  };

  updateActivity = (uid, activity, activityKey) => {
    const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
    ref.update(activity);
  };
}

export default Firebase;
