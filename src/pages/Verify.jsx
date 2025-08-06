import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVerifyPaymentMutation } from "../redux/services/paymentApi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { CircularProgress, Button, Container, Box, Typography } from "@mui/material";

function PaymentStatusPage() {
  const { txnId } = useParams(); // Extract transaction ID from URL
  const navigate = useNavigate(); // For navigation
  const [verifyPayment, { isLoading, isError, data }] = useVerifyPaymentMutation();
  const [status, setStatus] = useState("pending"); // Local status for display
  const [message, setMessage] = useState(""); // User-friendly message

  useEffect(() => {
    // Verify payment when the component loads
    const verify = async () => {
      try {
        const response = await verifyPayment({ txnId }).unwrap();
        if (response.success) {
          setStatus("success");
          setMessage("Your payment was successful! You are now enrolled in the courses.");
        } else {
          setStatus("failed");
          setMessage(response.message || "Payment verification failed.");
        }
      } catch (error) {
        setStatus("failed");
        setMessage(error.data?.message || "An error occurred while verifying the payment.");
      }
    };

    verify();
  }, [txnId, verifyPayment]);

  const handleRetry = () => {
    navigate("/checkout"); // Redirect user to retry payment
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 6 }}>
      {isLoading ? (
        <Box>
          <CircularProgress color="primary" size={80} />
          <Typography variant="h5" mt={3}>
            Verifying Payment...
          </Typography>
        </Box>
      ) : (
        <Box>
          {status === "success" ? (
            <Box>
              <AiOutlineCheckCircle size={100} color="green" />
              <Typography variant="h4" mt={3} fontWeight="bold">
                Payment Successful!
              </Typography>
              <Typography variant="body1" mt={2} color="textSecondary">
                {message}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard
              </Button>
            </Box>
          ) : (
            <Box>
              <AiOutlineCloseCircle size={100} color="red" />
              <Typography variant="h4" mt={3} fontWeight="bold" color="error">
                Payment Failed
              </Typography>
              <Typography variant="body1" mt={2} color="textSecondary">
                {message}
              </Typography>
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{ mt: 3, mr: 2 }}
                onClick={handleRetry}
              >
                Retry Payment
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
                onClick={() => navigate("/support")}
              >
                Contact Support
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
}

export default PaymentStatusPage;
