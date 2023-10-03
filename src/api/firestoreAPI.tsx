import { postDetailsInterface } from "../components/common/modal/startPostModal";
import { firestore, storage } from "../firebaseConfig";
import {
  addDoc,
  onSnapshot,
  collection,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { AchievementInterface } from "../components/common/cards/achievementsCard";
import { ref } from "firebase/storage";

const dbRefPosts = collection(firestore, "posts");
const dbRefUsers = collection(firestore, "users");

export const postData = (data: postDetailsInterface) => {
  addDoc(dbRefPosts, data)
    .then(() => {
      toast.success("Post has been added!");
    })
    .catch((err) => {
      toast.error("Something went wrong");
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

export const insertUser = async (
  credentials: InsertUserInterface
): Promise<string> => {
  const ref = await addDoc(dbRefUsers, credentials);
  return ref.id;
};

export interface EditUserInterface {
  email: string | null | undefined;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  location: string | null | undefined;
  headline: string | null | undefined;
  alias: string | null | undefined;
}

export interface ProfileImageInterface {
  imageLink: string | null | undefined;
}

export const editUser = async (
  info: AchievementInterface | EditUserInterface | ProfileImageInterface,
  id: string
) => {
  const userDocumentRef = doc(firestore, "users", id);
  await updateDoc(userDocumentRef, { ...info });
};

export const addVideos = async (
  info: string[],
  setVideoUrl: (arr: string[]) => void,
  videoArray: string[] | null | undefined,
  setVideoArray: (arr: string[]) => void,
  id: string
) => {
  const userDocumentRef = doc(firestore, "users", id);

  if (info[0] !== "") {
    setVideoUrl(info);
    if (videoArray) {
      setVideoArray([...info, ...videoArray]);
    } else {
      setVideoArray([...info]);
    }

    await updateDoc(userDocumentRef, {
      videoUrl: arrayUnion(info[0]),
    });
  }
};

export const deleteVideos = async (
  vidUrl: string,
  setVideoArray: (arr: string[]) => void,
  videoArray: string[],
  id: string
) => {
  const userDocumentRef = doc(firestore, "users", id);

  setVideoArray(videoArray.filter((x) => x !== vidUrl));
  await updateDoc(userDocumentRef, {
    videoUrl: arrayRemove(vidUrl),
  });
};
export interface getUserInterface {
  id: string;
  email: string | null | undefined;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  location: string | null | undefined;
  headline: string | null | undefined;
  alias: string | null | undefined;
  items:
    | [
        {
          game: string;
          achievementList: [{ achievement: string; year: string }];
        }
      ]
    | null
    | undefined;
  imageLink: string;
  videoUrl: string[] | null | undefined;
}

export const getUserByEmail = (
  email: string | null,
  setUserInfo: (details: getUserInterface) => void
) => {
  onSnapshot(dbRefUsers, (response) => {
    response.docs.forEach((doc) => {
      if (doc.data().email === email) {
        setUserInfo({
          id: doc.id,
          email: doc.data().email,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          alias: doc.data().alias,
          headline: doc.data().headline,
          location: doc.data().location,
          items: doc.data().items,
          imageLink: doc.data().imageLink,
          videoUrl: doc.data().videoUrl,
          ...doc.data(),
        });
      }
    });
  });
};

export const getUserById = (
  id: string | null,
  setUserInfo: (details: getUserInterface) => void
) => {
  onSnapshot(dbRefUsers, (response) => {
    response.docs.forEach((doc) => {
      if (doc.id === id) {
        setUserInfo({
          id: doc.id,
          email: doc.data().email,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          alias: doc.data().alias,
          headline: doc.data().headline,
          location: doc.data().location,
          items: doc.data().items,
          imageLink: doc.data().imageLink,
          videoUrl: doc.data().videoUrl,
          ...doc.data(),
        });
      }
    });
  });
};
