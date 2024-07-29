import { Box, Paper, Typography } from "@mui/material";

// const Message = ({ message }) => {
const Message = ({ message }) => {
  const isUserMessage = message.sender === "user";
  return (
    <Box
      className={`message ${
        isUserMessage ? "user-message" : "backend-message"
      }`}
    >
      <Paper>
        <Typography>{message}</Typography>
      </Paper>
    </Box>
  );
};

export default Message;
