"use client";
import { useState } from "react";
import { Container, Box } from "@mui/material";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import "../styles/globals.css";
export default function Home() {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <Container maxWidth="100vh" className="chat-container">
      <ChatBox messages={messages} />
      <ChatInput onSend={handleSend} />
    </Container>
  );
}
