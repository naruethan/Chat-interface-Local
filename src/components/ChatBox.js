import { Box } from "@mui/material";
import Message from "./Message";

const ChatBox = ({ messages }) => {
  return (
    <Box className="chat-box">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </Box>
  );
};

export default ChatBox;
