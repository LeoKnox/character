import { useState } from "react";
import "./styles.css";
import "./components/Home.js";
import "./components/Character.js";

export default function App() {
  const [page, setPage] = useState(<Home />);
  return (
    <div className="App">
      <button onClick={() => setPage(<Character />)}>Character</button>
      {page}
    </div>
  );
}
