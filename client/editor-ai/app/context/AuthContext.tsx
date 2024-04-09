
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { User, UserCredential,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

interface AuthContextProps {
  user: User | null;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Handle successful sign up
        console.log("Sign up successful:", userCredential.user);
        return userCredential;
    } catch (error) {
        // Handle sign up error
        console.error("Sign up error:", error);
        throw error;
        
    }
    
};

const signIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Handle successful sign in
        console.log("Sign in successful:", userCredential.user);
        return userCredential;
    } catch (error) {
        // Handle sign in error
        console.error("Sign in error:", error);
        throw error;
    }
};

  const signOut = () => {
    return auth.signOut();
  };

  const value: AuthContextProps = {
    user,
    signUp,
    signIn,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
