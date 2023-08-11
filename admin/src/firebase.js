import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBfgXYU8wXqIaLS776IJYxNndMTkCYYhM",
  authDomain: "movie-1dbcb.firebaseapp.com",
  projectId: "movie-1dbcb",
  storageBucket: "movie-1dbcb.appspot.com",
  messagingSenderId: "156238422407",
  appId: "1:156238422407:web:95f97b4f31de8a4ffcf322",
  measurementId: "G-8XQR4E97YZ"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export {storage};
