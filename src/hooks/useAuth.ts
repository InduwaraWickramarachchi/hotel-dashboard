'use client';

import { useSession } from 'next-auth/react';

export const useAuth = () => {
  const { data: session, status } = useSession();

  const isLoading = status === 'loading';
  const isAuthenticated = !!session?.user;

  return {
    session,
    user: session?.user,
    isAuthenticated,
    isLoading,
  };
};
