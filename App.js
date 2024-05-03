import { useState } from "react";
import "./styles.css";
import "./components/Home.js";
import "./components/Build.js";
import "./components/Character.js";
import "./components/Adventure.js";

export default function App() {
  const [page, setPage] = useState(<Character />);
  return (
    <div className="App">
      <button
        style={{ color: "Blue" }}
        disabled={page === <Home />}
        onClick={() => setPage(<Home />)}
      >
        Home
      </button>
      <button onClick={() => setPage(<Adventure />)}>Adventure</button>
      <button onClick={() => setPage(<Build />)}>Build</button>
      <button onClick={() => setPage(<Character />)}>Character</button>
      {page}
    </div>
  );
}
