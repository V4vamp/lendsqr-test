import { AuthToken } from "@/types/types";

export const generateAuthToken = (): AuthToken => ({
  access_token: crypto.randomUUID(),
  token_type: "Bearer",
});
