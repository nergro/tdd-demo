import axios from "axios";
import { User } from "types/user";

export const getUsers = async (): Promise<User[]> => {
  const users = await axios.get<User[]>("/users");

  return users.data;
};
