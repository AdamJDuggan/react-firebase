import app from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCItUbpNkGjqQalKTte9thgqCE-qzJWTU0",
    authDomain: "react-firebase-c98eb.firebaseapp.com",
    databaseURL: "https://react-firebase-c98eb.firebaseio.com",
    projectId: "react-firebase-c98eb",
    storageBucket: "react-firebase-c98eb.appspot.com",
    messagingSenderId: "562336940185",
    appId: "1:562336940185:web:5e290bb7d6bcfe6ce37808",
    measurementId: "G-9TWD822N8V"
}

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
    }

    // *** Auth API- define auhentication functions as class methods ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)

    // Set up the login/sign-in function
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)

    // For sign out we don’t need to pass any argument to it, because Firebase knows about the currently authenticated user. 
    //If no user is authenticated, nothing will happen when this function is called
    doSignOut = () => this.auth.signOut()

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password)

}

export default Firebase
