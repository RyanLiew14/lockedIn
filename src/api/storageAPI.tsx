import {
  deleteObject,
  getDownloadURL,
  list,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../firebaseConfig";
import { v4 } from "uuid";
import { editUser } from "./firestoreAPI";
import { videoName } from "../helper/linkParser";
import { toast } from "react-toastify";

export const uploadImage = async (
  imageUpload: File | undefined,
  setImageUrl: (url: string) => void
) => {
  const uniqueId = imageUpload?.name + v4();
  const imageStorageRef = ref(storage, `images/${uniqueId}`);
  if (imageUpload) {
    uploadBytes(imageStorageRef, imageUpload).then((res) => {
      getDownloadURL(res.ref).then((url) => {
        setImageUrl(url);
      });
    });
  }
};

export const uploadVideo = async (
  videoUpload: File | undefined,
  setVideoUrl: (url: string[]) => void
) => {
  const uniqueId = videoUpload?.name + v4();
  const imageStorageRef = ref(storage, `videos/${uniqueId}`);
  if (videoUpload) {
    uploadBytes(imageStorageRef, videoUpload).then((res) => {
      getDownloadURL(res.ref).then((url) => {
        setVideoUrl([url]);
      });
    });
  }
};

export const deleteVideo = async (videoUrl: string) => {
  const vidName = videoName(videoUrl);
  const imageStorageRef = ref(storage, `videos/${vidName}`);
  deleteObject(imageStorageRef)
    .then(() => {
      toast.success("Deleted successfully");
    })
    .catch((error) => {
      toast.error("Something went wrong");
    });
};
