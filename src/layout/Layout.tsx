import { Outlet } from 'react-router-dom';
import NavBar from '../components/SideNav';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%'
      }}
    >
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
