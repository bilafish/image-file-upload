import { useState } from "react";
import "./App.css";
import FileInput from "./components/FileInput.js";

function App() {
  const [base64String, setBase64String] = useState("");
  console.log(base64String);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image File Upload</h1>
        <FileInput setBase64String={setBase64String} />
        {base64String.length > 0 && (
          <img src={`data:image/png;base64,${base64String}`} />
        )}
      </header>
    </div>
  );
}

export default App;
