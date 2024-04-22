import { useState } from "react";
import "./styles.css";
import "./components/Home.js";

export default function App() {
  const [page, setPage] = useState(<Home />);
  return <div className="App">{page}</div>;
}
