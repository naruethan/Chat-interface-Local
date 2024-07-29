import axios from "axios";

export async function POST(req) {
  const text = await req.json();
  console.log(text.message);
  const response = await axios.post("http://localhost:11434/api/chat", {
    model: "qwen2:0.5b",
    messages: [
      {
        role: "user",
        content: text.message,
      },
    ],
    stream: false,
  });
  console.log(response.data.message.content); //test

  return Response.json(response.data.message.content);
}
