import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton
} from '@mui/material';
import { useState } from 'react';
import TransferList from './TransferList';
import { Close } from '@mui/icons-material';

const Add = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(!show);

  return (
    <Box
      sx={{
        margin: '40px'
      }}
    >
      <Fab color="primary" aria-label="add" onClick={handleClose}>
        <AddIcon />
      </Fab>
      <Dialog open={show} onClose={handleClose}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Settings
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setShow(!show)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close />
        </IconButton>
        <DialogContent>
          <TransferList />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Add;
