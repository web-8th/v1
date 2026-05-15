import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

type AuthError = { message: string };
type AuthResult = { data: null; error: AuthError | null };

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export async function signInWithEmail(email: string, password: string) {
  void email;
  void password;
  // @TODO: Implement supabase login if needed
  return {
    data: null,
    error: { message: 'Login is currently disabled.' },
  } satisfies AuthResult;
}

export async function signUpWithEmail(email: string, password: string) {
  void email;
  void password;
  // @TODO: Implement supabase login if needed
  return {
    data: null,
    error: { message: 'Signup is currently disabled.' },
  } satisfies AuthResult;
}

export async function signOut() {
  // @TODO: Implement supabase login if needed
  return { error: null };
}
