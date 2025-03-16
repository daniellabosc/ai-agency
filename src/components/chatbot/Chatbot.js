import React, { useState } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);

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
      console.log(data);
      const botMessage = { sender: "bot", text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot response
    } catch (error) {
      console.log("Error sending message:", error);
      const errorMessage = {
        sender: "bot",
        text: "Oops! Something went wrong.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div>
      {showChat && (
        <div style={styles.container}>
          <div className="chatbot">
            <div className="chatbot__header">
              <button
                className="btn btn-secondary btn-lg btn-close"
                onClick={() => setShowChat(!showChat)}
              >
                X
              </button>
            </div>
            <div style={styles.chatbox}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.message,
                    alignSelf:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                    backgroundColor:
                      msg.sender === "user" ? "#c546a8" : "#1c9ccc",
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div style={styles.inputContainer} className="chatbot__input">
              <input
                style={styles.input}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can I help you?"
              />
              <button
                style={styles.button}
                onClick={sendMessage}
                onKeyDown={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      {!showChat && (
        <button
          className="btn btn-secondary btn-lg btn-chat"
          onClick={() => setShowChat(!showChat)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "40px",
            zIndex: 1000,
          }}
        >
          Chat
        </button>
      )}
    </div>
  );
};

// Simple inline styles
let styles = {
  container: {
    width: "360px",
    border: "1px solid #000",
    borderRadius: "10px",
    padding: "10px",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9",
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
  chatbox: {
    height: "400px",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    marginTop: "40px",
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
    backgroundColor: "var(--accent)",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Chatbot;
