import api from "./api";
import { User } from "@/types/types";

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await api.get<User[]>("/public/mock/users.json");
  return data;
};

export const fetchUserById = async (id: string): Promise<User> => {
  const { data } = await api.get<User>(`/public/mock/users/${id}.json`);
  return data;
};