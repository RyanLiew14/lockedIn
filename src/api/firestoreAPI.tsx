import { postDetailsInterface } from "../components/common/modal/startPostModal";
import { firestore } from "../firebaseConfig";
import { addDoc, collection, auth } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const dbRef = collection(firestore, "posts");

export const postData = (data: postDetailsInterface) => {
  addDoc(dbRef, data)
    .then(() => {
      toast.success("Post has been added!");
    })
    .catch((err) => {
      console.log(err);
    });
};
