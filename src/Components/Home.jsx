import React, { useState } from "react";
import shareImage from "./share.jpg";
import User from "./User";
import Message from "./Message";

export default function Home() {
  // Dummy data for users
  const users = [
    { id: 1, name: "Name 1" },
    { id: 2, name: "Name 2" },
    { id: 3, name: "Name 3" },
    { id: 4, name: "Name 4" },
    { id: 5, name: "Name 5" },
    { id: 6, name: "Name 6" },
    { id: 7, name: "Name 7" },
    { id: 8, name: "Name 8" },
    { id: 9, name: "Name 9" },
  ];

  // State to hold messages, initially set to null
  const [messages, setMessages] = useState(null);
  // State to control the visibility of message box
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  // State to hold the admin message
  const [adminMessage, setAdminMessage] = useState("");

  // Function to handle message see action
  const msgSee = () => {
    // If message box is open, close it
    if (isMessageBoxOpen) {
      setIsMessageBoxOpen(false);
    } else {
      // Dummy messages
      const dummyMessages = ["In-call messages :"];
      setMessages(dummyMessages);
      setIsMessageBoxOpen(true);
    }
  };

  // Function to handle admin sending a message
  const sendAdminMessage = () => {
    if (adminMessage.trim() !== "") {
      // Create a new message with the user's name
      const user = users.find((user) => user.id === 1); // Change user id as needed
      const newMessage = `${user.name}: ${adminMessage.trim()}`;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setAdminMessage(""); // Clear the input field after sending the message
    }
  };

  return (
    <>
      <div
        style={{
          height: "6vh",
          background: "#F0F0F0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ paddingLeft: "30px", color: "black", fontSize: "25px"}}>
          Meeting code
        </span>
        <span style={{ paddingRight: "30px", color: "black", fontSize: "25px" }}>
          1:00 AM, Wed, March 22
        </span>
      </div>
      <div style={{ background: "#4f4f4f", height: "85vh", display: "flex", flexWrap: "wrap", overflow: "auto"}}>
        {users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </div>
      {isMessageBoxOpen && (
        <div style={{ position: "absolute", top: 0, right: 0, width: "30%", height: "100%", background: "#f9f9f9", overflow: "auto",marginTop:"45px"}}>
          <h2 style={{ textAlign: "center" }}>Messages</h2>
          <div style={{ padding: "10px", marginBottom: "50px" }}>
            {messages !== null && <Message messages={messages} />}
          </div>
          <div style={{ padding: "10px", position: "absolute", bottom: 0, width: "100%", borderTop: "1px solid #ccc", backgroundColor: "#fff" }}>
            <input
              type="text"
              value={adminMessage}
              onChange={(e) => setAdminMessage(e.target.value)}
              placeholder="Type your message..."
              style={{ width: "70%", marginRight: "10px" }}
            />
            <button onClick={sendAdminMessage}>Send</button>
          </div>
        </div>
      )}
      <div style={{ height: "6vh", background: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span>
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/97-512.png"
            alt="mic"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
          <img
            src="https://th.bing.com/th/id/OIP.5XhYzPtwcY00X1SkP8jRWwHaHa?rs=1&pid=ImgDetMain"
            alt="camera"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
          <img
            src={shareImage}
            alt="share"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
          <img
            src="https://www.pngkey.com/png/detail/13-137208_phone-icon-png.png"
            alt="endcall"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
        </span>
        <span>
          <img
            src="https://www.kindpng.com/picc/m/79-799937_two-users-two-user-icon-png-transparent-png.png"
            alt="people"
            className="pointer"
            style={{ height: "40px", margin: "10px" }}
          />
          <img
            src="https://th.bing.com/th/id/OIP.0h_snZYE2vswVNmt8-c4wwHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
            alt="message"
            className="pointer"
            onClick={msgSee}
            style={{ height: "40px", margin: "10px" }}
          />
        </span>
      </div>
    </>
  );
}
