import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { useSelector } from 'react-redux';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

function Routers() {
  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      {!user && (<PublicRoutes />)}
      {
        user && (
          <PrivateRoutes />

        )
      }
    </BrowserRouter >
  )
}

export default Routers;