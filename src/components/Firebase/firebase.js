< !--The core Firebase JS SDK is always required and must be listed first-- >
    <script src="https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js"></script>

    <!--TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
import app from 'firebase/app'

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
    }
}
export default Firebase
