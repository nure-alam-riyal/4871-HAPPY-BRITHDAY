import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [wrongStep, setWrongStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [gameStartedAt, setGameStartedAt] = useState(null);

  const info = {
    score,
    setScore,
    wrongStep,
    setWrongStep,
    totalSteps,
    setTotalSteps,
    gameStartedAt,
    setGameStartedAt,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};