import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteDialog(props) {
  const [open, setOpen] = React.useState(props.isOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const acceptDelete = () => {
    props.confirmDelete(true);
    handleClose();
  }

  const declineDelete = () => {
    props.confirmDelete(false);
    handleClose();
  }

  return (
      <Dialog
        open={props.isOpen}
        onClose={declineDelete}
      >
        <DialogTitle id="alert-dialog-title">"¿Eliminar definitivamente la lista de compras?"</DialogTitle>
        <DialogActions>
          <Button onClick={declineDelete} color="primary">
            Cancelar
          </Button>
          <Button onClick={acceptDelete} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
  );
}
