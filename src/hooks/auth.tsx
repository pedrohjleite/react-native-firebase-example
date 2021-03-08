import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react';

interface AuthContext {
  isAuth: boolean;
  authenticateUser(userInfo: SignInCredentials): void;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface UserData {
  username: string;
  password: string;
}

const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const authenticateUser = useCallback(
    async ({ username, password }: SignInCredentials): Promise<void> => {
      if (username === 'pedro' && password === 'pedro') setIsAuth(true);
    },
    [],
  );

  const value = useMemo(
    () => ({
      isAuth,
      authenticateUser,
    }),
    [isAuth, authenticateUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
}

export { AuthProvider, useAuth };
