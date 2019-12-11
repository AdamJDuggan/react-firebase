import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import Firebase, { FirebaseContext } from './components/Firebase'

ReactDOM.render(
    // Doing it this way, we can be assured that Firebase is only instantiated once and that it is injected via
    //React’s Context API to React’s component tree. Now, every component that is interested in using
    //Firebase has access to the Firebase instance with a FirebaseContext.Consumer component.
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'))

serviceWorker.unregister()
