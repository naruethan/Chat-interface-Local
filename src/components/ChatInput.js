import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (text.trim()) {
      try {
        // let para = {
        //   model: "qwen2:0.5b",
        //   messages: [
        //     {
        //       role: "user",
        //       content: text,
        //     },
        //   ],
        //   stream: false,
        // };

        // const response = await axios.post("http://localhost:11434/api/chat", {
        //   model: "qwen2:0.5b",
        //   messages: [
        //     {
        //       role: "user",
        //       content: text,
        //     },
        //   ],
        //   stream: false,
        // });

        const response = await axios.post("/api/sendMessage", {
          message: text,
        });

        console.log(response.data);
        onSend(response.data);
        setText("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        variant="outlined"
        onKeyPress={handleKeyPress}
        sx={{ mr: 2 }}
      />
      <IconButton color="primary" onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default ChatInput;
