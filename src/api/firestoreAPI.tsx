import { postDetailsInterface } from "../components/common/modal/startPostModal";
import { firestore } from "../firebaseConfig";
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
import { CareerInterface } from "../components/common/cards/experienceCard";
import { CommentInterface } from "../components/common/modal/commentPostModal";

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
  author: AuthorInterface;
  likes: string[];
  comment: CommentInterface[];
}

export interface AuthorInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  alias: string;
  imageLink: string;
  headline: string;
}

export const likePost = async (postId: string, userId: string) => {
  const postDocumentRef = doc(firestore, "posts", postId);

  await updateDoc(postDocumentRef, {
    likes: arrayUnion(userId),
  });
};

export const unlikePost = async (postId: string, userId: string) => {
  const postDocumentRef = doc(firestore, "posts", postId);

  await updateDoc(postDocumentRef, {
    likes: arrayRemove(userId),
  });
};

export const deleteComment = async (
  postId: string,
  comment: CommentInterface
) => {
  const postDocumentRef = doc(firestore, "posts", postId);

  await updateDoc(postDocumentRef, {
    comment: arrayRemove(comment),
  });
};

// export const likeComment = async (
//   commentId: string,
//   userId: string,
//   postId: string
// ) => {
//   const commentDocumentRef = doc(firestore, "posts", postId);

//   await updateDoc(commentDocumentRef, {
//     likes: arrayUnion(userId),
//   });
// };

export const commentPost = async (
  postId: string,
  comment: CommentInterface
) => {
  const postDocumentRef = doc(firestore, "posts", postId);

  await updateDoc(postDocumentRef, {
    comment: arrayUnion(comment),
  });
};

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
          author: doc.data().author,
          likes: doc.data().likes,
          comment: doc.data().comment,
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
  info:
    | AchievementInterface
    | EditUserInterface
    | ProfileImageInterface
    | CareerInterface,
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
    toast.success("Highlight added successfully");
    toast.dismiss("highlight-loading-toast-id");

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
  achievements:
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
  career:
    | [
        {
          organization: string;
          roleList: [{ role: string; year: string }];
        }
      ]
    | null
    | undefined;
  incomingInvitation: string[] | null | undefined;
  outgoingInvitation: string[] | null | undefined;
  connections: string[] | null | undefined;
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
          achievements: doc.data().achievements,
          imageLink: doc.data().imageLink,
          videoUrl: doc.data().videoUrl,
          career: doc.data().career,
          incomingInvitation: doc.data().incomingInvitation,
          outgoingInvitation: doc.data().outgoingInvitation,
          connections: doc.data().connections,
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
          achievements: doc.data().achievements,
          imageLink: doc.data().imageLink,
          videoUrl: doc.data().videoUrl,
          career: doc.data().career,
          incomingInvitation: doc.data().incomingInvitation,
          outgoingInvitation: doc.data().outgoingInvitation,
          connections: doc.data().connections,
          ...doc.data(),
        });
      }
    });
  });
};

export interface AllUserInterface {
  id: string;
  email: string | null | undefined;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  location: string | null | undefined;
  headline: string | null | undefined;
  alias: string | null | undefined;
  imageLink: string;
  incomingInvitation: string[] | null | undefined;
  outgoingInvitation: string[] | null | undefined;
  connections: string[] | null | undefined;
}

export const getAllUsers = async (
  setAllUsers: (arr: AllUserInterface[]) => void
) => {
  onSnapshot(dbRefUsers, (response) => {
    setAllUsers(
      response.docs.map((doc) => {
        return {
          id: doc.id,
          email: doc.data().email,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          location: doc.data().location,
          headline: doc.data().headline,
          alias: doc.data().alias,
          imageLink: doc.data().imageLink,
          incomingInvitation: doc.data().incomingInvitation,
          outgoingInvitation: doc.data().outgoingInvitation,
          connections: doc.data().connections,
        };
      })
    );
  });
};

export const sendConnectionInvite = async (
  senderId: string,
  receiverId: string
) => {
  const senderDocRef = doc(firestore, "users", senderId);
  const receiverDocRef = doc(firestore, "users", receiverId);

  await updateDoc(receiverDocRef, {
    incomingInvitation: arrayUnion(senderId),
  });

  await updateDoc(senderDocRef, {
    outgoingInvitation: arrayUnion(receiverId),
  });

  toast.success("Invitation Sent!");
};

export const acceptInvite = async (senderId: string, receiverId: string) => {
  const senderDocRef = doc(firestore, "users", senderId);
  const receiverDocRef = doc(firestore, "users", receiverId);

  await updateDoc(receiverDocRef, {
    connections: arrayUnion(senderId),
    incomingInvitation: arrayRemove(senderId),
  });

  await updateDoc(senderDocRef, {
    connections: arrayUnion(receiverId),
    outgoingInvitation: arrayRemove(receiverId),
  });

  toast.success("Request Accepted!");
};
