import { createContext, useContext } from 'react';

export interface Session {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
}

interface SessionContextType {
  session: Session | null;
  setSession: (session: Session) => void;
  loading: boolean;
}

export const SessionContext = createContext<SessionContextType>({
  session: null,
  setSession: () => {},
  loading: true,
});

export const useSession = () => useContext(SessionContext);
