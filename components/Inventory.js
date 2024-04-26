import { useState } from "react";

export default Character = ({ getInventory }) => {
    const [type, setType] = useState("pack");
  return (
    <>
      {Object.keys(getInventory).map((key) => (
        <button>{key}</button>
      ))}
      {getInventory[type].map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};
