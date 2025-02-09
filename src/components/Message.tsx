import { auth } from "../firebase";

type MessageProps = {
  text: string;
  user: string;
  userId: string;
  profileUrl: string;
  createdAt: {
    seconds: number;
  };
};

function Message({ text, user, userId, profileUrl, createdAt }: MessageProps) {
  const isCurrentUser = auth.currentUser?.uid === userId;
  const formattedDate = new Date(createdAt.seconds * 1000).toLocaleString();

  if (isCurrentUser) {
    return (
      <div className="flex items-end justify-end gap-2.5 mb-4">
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-l-sm rounded-tr-sm dark:bg-gray-700">
          <span className="font-semibold text-on-surface-strong dark:text-on-surface-dark-strong">
            {user}
          </span>
          <div className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {text}
          </div>
          <span className="ml-auto text-xs">{formattedDate}</span>
        </div>
        <img
          src={profileUrl}
          alt={user}
          className="size-8 rounded-full object-cover"
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-2.5 mb-4">
        <img
          src={profileUrl}
          alt={user}
          className="size-8 rounded-full object-cover"
        />
        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <span className="font-semibold text-on-surface-strong dark:text-on-surface-dark-strong">
            {user}
          </span>
          <div className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {text}
          </div>
          <span className="ml-auto text-xs">{formattedDate}</span>
        </div>
      </div>
    </>
  );
}

export default Message;
