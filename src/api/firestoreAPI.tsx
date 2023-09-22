import { postDetailsInterface } from "../components/common/modal/startPostModal";
import { firestore } from "../firebaseConfig";
import { addDoc, onSnapshot, collection } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { UserCredentialInterface } from "../components/registerComponent";

const dbRefPosts = collection(firestore, "posts");
const dbRefUsers = collection(firestore, "users");

export const postData = (data: postDetailsInterface) => {
  addDoc(dbRefPosts, data)
    .then(() => {
      toast.success("Post has been added!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export interface returnedPostDetailsInterface {
  id: string;
  blog: string;
  postedAt: string;
}

export const getPosts = (
  setAllPosts: (arr: returnedPostDetailsInterface[]) => void
) => {
  onSnapshot(dbRefPosts, (response) => {
    setAllPosts(
      response.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
          blog: doc.data().blog,
          postedAt: doc.data().postedAt,
        };
      })
    );
  });
};

export interface InsertUserInterface {
  email: string;
  firstName: string;
  lastName: string;
  alias: string | null;
}

export const insertUser = (credentials: InsertUserInterface) => {
  addDoc(dbRefUsers, credentials)
    .then(() => {})
    .catch((err) => {
      return err;
    });
};
