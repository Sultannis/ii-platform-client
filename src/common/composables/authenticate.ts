import { reactive, ref } from 'vue';
import type { Auth } from '@/entities/Auth';
import router from '@/router';
import { useUser } from './user';

const AUTH_TOKEN_KEY = 'auth_token';
const { USER_KEY, clearUserData } = useUser();

const getAuthTokenFromLocalStorage = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY) || '';
  return token;
};

const defaultAuth = {
  authToken: getAuthTokenFromLocalStorage(),
};

const auth: Auth = reactive(defaultAuth);

const setAuth = (payload: Auth): void => {
  auth.authToken = payload.authToken;
  localStorage.setItem(AUTH_TOKEN_KEY, payload.authToken);
};

const logout = (): void => {
  clearUserData();
  auth.authToken = '';
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  router.push({ path: '/auth/login' });
};

const loggedIn = ref(!!auth.authToken);

export const useAuthenticate = () => ({
  auth,
  setAuth,
  logout,
  loggedIn,
});
