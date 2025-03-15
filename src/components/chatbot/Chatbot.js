import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]); // Add user message to state

    setInput(""); // Clear input field

    try {
      const response = await fetch(
        "http://localhost:5678/webhook/405f9ec2-30a7-4cdf-b4d1-a2fb2f878bc6?query=" +
          input,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );
      const data = await response.json();
      const botMessage = { sender: "bot", text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot response
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        sender: "bot",
        text: "Oops! Something went wrong.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatbox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#007bff" : "#ccc",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    fontFamily: "Arial",
  },
  chatbox: {
    height: "300px",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    padding: "5px",
  },
  message: {
    maxWidth: "80%",
    padding: "8px",
    borderRadius: "10px",
    margin: "5px 0",
    color: "white",
  },
  inputContainer: { display: "flex", marginTop: "10px" },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    marginLeft: "5px",
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Chatbot;
