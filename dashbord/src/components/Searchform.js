import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 4,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Searchform() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const inputField = document.getElementById('email-address-icon');
    inputField.addEventListener('input', () => {
      inputField.style.border = 'none';
    });
  }, []);

  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen} className="cursor-pointer">
        <div class="relative cursor-pointer">
          <div class="absolute inset-y-0  flex items-center pl-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06l-5.156-5.155Zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004Z"
                clip-rule="evenodd"
                className="text-blue-500"
              />
            </svg>
          </div>
          <input
            type="text"
            id="email-address-icon"
            class="cursor-pointer border border-blue-500 text-sm rounded-lg outline-none block w-full pl-10 p-2.5  dark:bg-blue-700 dark:border-blue-600 placeholder-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search"
          />
        </div>
      </span>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
       

        <div className="h-96 w-96">
        <div class="relative w-full">
  <div class="absolute inset-y-0 flex items-center border-none pl-3 right-0">

    <BootstrapDialogTitle onClose={handleClose} className="ml-24"></BootstrapDialogTitle>
  </div>
  <input
    type="text"
    id="email-address-icon"
    class="w-full  border border-b-blue-500 py-4 placeholder:text-blue-500  text-black text-lg outline-none block pl-10 p-2.5"
    placeholder="Search here"
  />
</div>


          <div className="text-gray-400 text-lg px-10 py-4">Recents</div>
        </div>
      </BootstrapDialog>
    </div>
  );
}
