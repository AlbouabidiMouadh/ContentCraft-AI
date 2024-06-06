import * as React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

interface SubscriptionModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (subscription: Subscription) => void;
  subscription?: Subscription;
}

interface Subscription {
  _id?: string;
  name: string;
  type: string;
  price: number;
  userId: string;
  startDate: string;
  endDate: string;
}

export default function SubscriptionModal({
  open,
  handleClose,
  handleSave,
  subscription,
}: SubscriptionModalProps) {
  const [formData, setFormData] = React.useState<Subscription>(
    subscription || {
      name: '',
      type: '',
      price: 0,
      userId: '',
      startDate: '',
      endDate: '',
    }
  );

  React.useEffect(() => {
    if (subscription) {
      setFormData(subscription);
    }
  }, [subscription]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    handleSave(formData);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{subscription ? 'Edit Subscription' : 'Add Subscription'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="type"
          name="type"
          label="Type"
          type="text"
          fullWidth
          value={formData.type}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="price"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={formData.price}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="userId"
          name="userId"
          label="UserId"
          type="text"
          fullWidth
          value={formData.userId}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="startDate"
          name="startDate"
          label="Start Date"
          type="date"
          fullWidth
          value={formData.startDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          margin="dense"
          id="endDate"
          name="endDate"
          label="End Date"
          type="date"
          fullWidth
          value={formData.endDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {subscription ? 'Save' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
