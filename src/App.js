import React, { useState } from "react";
import QRCode from "qrcode";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const generateQR = async () => {
    const url = await QRCode.toDataURL(text, {
			width: 900,
			color: {
				dark: '#335383FF',
			}
    });
    setQr(url);
  };
  const clearhandle = () => {
    setText("");
    setQr("");
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
          <div className="input-group">
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={generateQR}>Generate</button>
    </div>

      {qr && (
        <>
          <img src={qr} alt="QR Code" />
          <a href={qr} download="qrcode.png">
            Download
          </a>
          <button onClick={clearhandle}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}
