import { RegisteredUser, AuthSession } from '@/types/types';

const USER_KEY = 'lendsqr_user';
const SESSION_KEY = 'lendsqr_session';

export const saveUser = (user: RegisteredUser) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getStoredUser = (): RegisteredUser | null => {
  const data = localStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
};

export const saveSession = (session: AuthSession) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const getSession = (): AuthSession | null => {
  const data = localStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};
