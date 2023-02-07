import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { nanoid } from "nanoid";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      <Content>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <p className="card-text">Thank you for visiting our website</p>
          </div>
        </div>
      </Content>
      );
    </div>
  );
}

export default App;
