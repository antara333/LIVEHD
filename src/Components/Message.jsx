// Message.js

import React from "react";

const Message = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>{/* Added marginBottom for spacing */}
          {message}
        </div>
      ))}
    </div>
  );
};

export default Message;
