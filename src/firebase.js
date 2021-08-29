import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDe5lGQrMCchrDIrJ0vC8MGZ_WYOsnxm4Q",
	authDomain: "disney-clone-a814b.firebaseapp.com",
	projectId: "disney-clone-a814b",
	storageBucket: "disney-clone-a814b.appspot.com",
	messagingSenderId: "395466466937",
	appId: "1:395466466937:web:e14ba2c40d377a15b416a8",
	measurementId: "G-LP3JM6DG6P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
