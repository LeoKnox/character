import { useState } from "react";

export default Character = ({ getInventory }) => {
  const [type, setType] = useState("weapons");
  return (
    <>
      {Object.keys(getInventory).map((key) => (
        <button onClick={() => setType(key)}>{key}</button>
      ))}
      {getInventory[type].map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};
