import { IdTokenClaims } from '@logto/rn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

interface UserContextType {
  user: IdTokenClaims | null;
  isAuthenticated: boolean;
  login: (userData: IdTokenClaims) => void;
  logout: () => void;
  updateUser: (userData: Partial<IdTokenClaims>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IdTokenClaims | null>(null);

  // Use useCallback for loadUser to prevent recreation on each render
  const loadUser = useCallback(async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Error loading user:', error);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    const initUser = async () => {
      if (mounted) {
        await loadUser();
      }
    };

    initUser();

    return () => {
      mounted = false;
    };
  }, [loadUser]);

  const login = useCallback(async (userData: IdTokenClaims) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Error removing user:', error);
    }
  }, []);

  const updateUser = useCallback(async (userData: Partial<IdTokenClaims>) => {
    setUser((prev) => {
      try {
        if (!prev) {
          const newUser = { ...userData } as IdTokenClaims;
          AsyncStorage.setItem('user', JSON.stringify(newUser));
          return newUser;
        }
        const updatedUser = { ...prev, ...userData };
        AsyncStorage.setItem('user', JSON.stringify(updatedUser));
        return updatedUser;
      } catch (error) {
        console.error('Error updating user:', error);
        return prev;
      }
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
      updateUser,
    }),
    [user, login, logout, updateUser]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
