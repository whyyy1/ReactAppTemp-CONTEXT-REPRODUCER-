import React from 'react';
import { useAuthContext } from '../Authorize/AuthContext';

import AuthStack from '../Authorize/AuthStack';
import AppStack from '../Authorize/AppStack';
import { Routes, Route } from 'react-router-dom';

function AppNav() {
  const { state, dispatch } = useAuthContext();

  return (
    <Routes>
      {/* Render AuthStack when the user is not logged in */}
      {!state.user ? <Route path="/*" element={<AuthStack />} /> : null}
      {/* Render AppStack when the user is logged in */}
      {state.user ? <Route path="/*" element={<AppStack />} /> : null}
    </Routes>
  );
}

export default AppNav;
