'use client';
import { createContext, ReactNode, useState } from 'react';
import { AuthContextType } from '@/lib/types';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null>(null);
  const [user, setUser] = useState<null>(null);
  const [loading] = useState(false);

  const signOut = async () => {
    // @TODO: Implement supabase login if needed
    setSession(null);
    setUser(null);
  };

  const value = {
    session,
    user,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
