import { reactive } from "vue";
import type { User } from "@/api/entities/User";

interface UseUser {
  user: User;
  setUser: (User: User) => void;
  clearUserData: () => void;
  USER_KEY: string;
}

const USER_KEY = "user";

const getUserFromLocalStorage = (): User =>
  JSON.parse(localStorage.getItem(USER_KEY) || "{}");

let user = reactive(getUserFromLocalStorage());

const setUser = (payload: User) => {
  console.log('User got set')
  user = payload;

  localStorage.setItem(USER_KEY, JSON.stringify(payload));
};

const clearUserData = () => {
  user = {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    role: 0,
    confirmedAt: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
  };
  localStorage.removeItem(USER_KEY);
};

export const useUser = (): UseUser => ({
  user,
  setUser,
  clearUserData,
  USER_KEY,
});
