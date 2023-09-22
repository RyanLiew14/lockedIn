import React from "react";
import { returnedPostDetailsInterface } from "../../../api/firestoreAPI";

export default function Post({ id, blog }: returnedPostDetailsInterface) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 h-48 border-slate-300 border-2 bg-slate-500 items-center mt-4 flex-col rounded-md">
        <div className="mt-4 text-black font-sans font-semibold">{id}</div>

        <div className="mt-4 text-black font-sans">{blog}</div>
      </div>
    </div>
  );
}
