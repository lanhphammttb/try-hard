import { Route, Routes } from 'react-router-dom';
import { ROUTER } from './constants/Routers';
import AuthGuard from './Auth';
import Dashboard from './pages/Dashboard';
import Layout from './layout/Layout';
import TableList from './components/Add/TableList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.home.index} element={<AuthGuard isPrivate={false} />}>
        <Route path={ROUTER.home.index} element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTER.home.add_table} element={<TableList />} />
        </Route>
      </Route>
      <Route
        path={ROUTER.authentication.login}
        element={<AuthGuard isPrivate={false} />}
      >
        <Route index element={<></>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
