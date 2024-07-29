import { Box, Paper, Typography } from "@mui/material";

const Message = ({ message }) => {
  return (
    <Box className="message">
      <Paper>
        <Typography>{message}</Typography>
      </Paper>
    </Box>
  );
};

export default Message;
