import { postDetailsInterface } from "../components/common/modal/startPostModal";
import { firestore } from "../firebaseConfig";
import { addDoc, onSnapshot, collection } from "firebase/firestore";
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

export interface returnedPostDetailsInterface {
  id: string;
  blog: string;
}

export const getPosts = (): returnedPostDetailsInterface[] => {
  const posts: returnedPostDetailsInterface[] = [];
  onSnapshot(dbRef, (response) => {
    response.docs.map((doc) => {
      posts.push({ ...doc.data(), id: doc.id, blog: doc.data().blog });
    });
  });

  return posts;
};

export const getPostsTest = (
  setAllPosts: (arr: returnedPostDetailsInterface[]) => void
) => {
  onSnapshot(dbRef, (response) => {
    setAllPosts(
      response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id, blog: doc.data().blog };
      })
    );
  });
};
