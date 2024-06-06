"use client"
import React from "react";
import { Container, Typography, TextField, Button, CircularProgress, Box } from "@mui/material";
import { useState } from "react";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handlePayment = () => {
    setLoading(true);
    // Simulate payment processing delay
    setTimeout(() => {
      setLoading(false);
      alert("Payment processed successfully!");
    }, 2000);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Payment Page
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Card Number"
          name="cardNumber"
          variant="outlined"
          margin="normal"
          value={paymentDetails.cardNumber}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Expiry Date (MM/YY)"
          name="expiryDate"
          variant="outlined"
          margin="normal"
          value={paymentDetails.expiryDate}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="CVV"
          name="cvv"
          variant="outlined"
          margin="normal"
          value={paymentDetails.cvv}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          label="Cardholder Name"
          name="cardholderName"
          variant="outlined"
          margin="normal"
          value={paymentDetails.cardholderName}
          onChange={handleInputChange}
        />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {loading ? <CircularProgress /> : (
            <Button
              variant="contained"
              color="primary"
              onClick={handlePayment}
            >
              Process Payment
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentPage;
