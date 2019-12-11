//The Firebase Context from the Firebase module (folder) is used to provide a Firebase instance to
//the entire application in the src/index.js file.
import FirebaseContext, { withFirebase } from './context'
import Firebase from './firebase'
export default Firebase
export { FirebaseContext, withFirebase }

