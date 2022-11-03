import { reactive } from "vue";
import type { Auth } from "@/entities/Auth";
import { useAdmin } from "./useAdmin";
import router from "@/router";

const { ADMIN_KEY } = useAdmin();
const AUTH_TOKEN_KEY = "auth_token";

const getAuthTokenFromLocalStorage = (): string =>
  localStorage.getItem(AUTH_TOKEN_KEY) || "";

const defaultAuth = {
  authToken: getAuthTokenFromLocalStorage(),
};

const auth: Auth = reactive(defaultAuth);

const setAuth = (payload: Auth): void => {
  auth.authToken = payload.authToken;
  localStorage.setItem(AUTH_TOKEN_KEY, payload.authToken);
};

const logout = (): void => {
  auth.authToken = "";
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(ADMIN_KEY);
  router.push({ name: "login" });
};

export const useAuthenticate = () => ({
  auth,
  setAuth,
  logout,
});
