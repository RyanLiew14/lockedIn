import { BsFillPersonFill } from "react-icons/bs";

interface PersonalPostInterface {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  alias: string | null | undefined;
  headline: string | null | undefined;
  imageLink: string | null | undefined;
}

export default function PersonalPost({
  firstName,
  lastName,
  alias,
  headline,
  imageLink,
}: PersonalPostInterface) {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-9/12 h-52 bg-white dark:bg-gray-600 items-center mt-4 flex-col rounded-md text-gray-800 dark:text-white">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 mt-4 border-teal-400 p-1">
          <div className="h-full rounded-full overflow-hidden flex items-center justify-center">
            {imageLink ? (
              <img className="object-cover h-36 w-36" src={imageLink} />
            ) : (
              <BsFillPersonFill className="h-12 w-12"></BsFillPersonFill>
            )}
          </div>
        </div>

        <div className="mt-4 font-sans font-semibold">
          {firstName} {alias ? `"${alias}"` : ""} {lastName}
        </div>

        <div className="mt-4 font-sans">{headline}</div>
      </div>
    </div>
  );
}
