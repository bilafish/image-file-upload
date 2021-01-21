import { useState } from "react";
import "./App.css";
import FileInput from "./components/FileInput.js";

function App() {
  const [base64String, setBase64String] = useState("");
  const [fileType, setFileType] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  console.log(base64String);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image File Upload</h1>
        <FileInput
          setBase64String={setBase64String}
          setFileType={setFileType}
          setFileSize={setFileSize}
        />
        {fileType && <p>File type: {fileType}</p>}
        {fileSize && <p>File size: {Math.round(fileSize * 10) / 10} mb</p>}
        {base64String.length > 0 && (
          <img
            src={`data:${fileType};base64,${base64String}`}
            alt="Uploaded image"
          />
        )}
      </header>
    </div>
  );
}

export default App;
