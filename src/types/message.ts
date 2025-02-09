import { CHAT_ROOMS } from "./constants/app.constants";

export interface IMessage {
  id: string;
  text: string;
  room: CHAT_ROOMS;
  user: string;
  userId: string;
  profileUrl: string;
  createdAt: {
    seconds: number;
  };
}
