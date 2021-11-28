import React from 'react';
import { Routes } from 'react-router-dom';

interface PrivateRoutineProps {
  isLoggedIn: boolean;
}

const PrivateRoutesContainer = ({ isLoggedIn }: PrivateRoutineProps) => {
  return <div>{isLoggedIn && <h3>PrivateRoutes</h3>}</div>;
};

export default PrivateRoutesContainer;
