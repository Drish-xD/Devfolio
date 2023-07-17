'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

interface TransitionContextType {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export function useTransitionContext(): TransitionContextType {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransitionContext must be used within a Provider');
  }
  return context;
}
