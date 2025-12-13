import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { Login, LoginSession } from "@/types/types";



export const useLogin = () =>
  useMutation<LoginSession, Error, Login>({
    mutationFn: async (data) => {
      const res = await api.post("/auth/login", data);
      return res.data;
    },
  });