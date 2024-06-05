import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTER } from './constants/Routers';

type Props = {
  isPrivate: boolean;
};

const AuthGuard: React.FC<Props> = ({ isPrivate }) => {
  const location = useLocation();
  const isLogin = true;
  if (isPrivate) {
    if (isLogin) {
      return <Outlet />;
    } else {
      return (
        <Navigate
          to={ROUTER.authentication.login}
          replace
          state={{ from: location }}
        />
      );
    }
  } else {
    return <Outlet />;
  }
};

export default AuthGuard;
