import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// change this in to a class instance like axios later.

const firebaseConfig = {
  apiKey: "AIzaSyCQyotXqJAiEMfwnzNpXRneTZyGJHvZh7U",
  authDomain: "postit-22dfb.firebaseapp.com",
  projectId: "postit-22dfb",
  storageBucket: "postit-22dfb.appspot.com",
  messagingSenderId: "901025833098",
  appId: "1:901025833098:web:3d91fd6dd51258ef39cd73",
};

// Initialize Firebase app and database
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore();

//get collection ref
// const colRef = collection(db, "Posts");
// // get collection data
// getDocs(colRef).then((snapshot) => {
//   let posts: Array<object> = [];
//   snapshot.docs.forEach((doc) => {
//     posts.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(posts);
// });
