import { useState } from "react";

export default Character = ({ getInventory }) => {
  const [type, setType] = useState("weapons");
  return (
    <>
      {Object.keys(getInventory).map((key) => (
        <button onClick={() => setType(key)}>{key}</button>
      ))}
      <table>
      {getInventory[type].map((item) => (
        <tr><td>{item}</td></tr>
      ))}
      </table>
    </>
  );
};
