import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';

interface NavigationDrawerContextProps {
  isNavigationDrawerOpen: boolean;
  openLeftDrawer(): void;
}

const NavigationDrawerContext = createContext<NavigationDrawerContextProps>(
  {} as NavigationDrawerContextProps,
);

const NavigationDrawerProvider: React.FC = ({ children }) => {
  const [isNavigationDrawerOpen, setIsNavigationDrawerOpen] = useState(false);

  const openLeftDrawer = useCallback(() => {
    setIsNavigationDrawerOpen(!isNavigationDrawerOpen);
  }, [isNavigationDrawerOpen]);

  const value = useMemo(
    () => ({
      isNavigationDrawerOpen,
      openLeftDrawer,
    }),
    [isNavigationDrawerOpen, openLeftDrawer],
  );

  return (
    <NavigationDrawerContext.Provider value={value}>
      {children}
    </NavigationDrawerContext.Provider>
  );
};

function useNavigationDrawer(): NavigationDrawerContextProps {
  const context = useContext(NavigationDrawerContext);

  if (!context) {
    throw new Error(
      'useNavigationDrawer must be used within a NavigationDrawerProvider',
    );
  }

  return context;
}

export { NavigationDrawerProvider, useNavigationDrawer };
