import { useState } from "react";

export default Character = ({ getInventory }) => {
  const [type, setType] = useState("weapons");
  return (
    <>
    <table>
      {Object.keys(getInventory).map((key) => (
        <th><button onClick={() => setType(key)}>{key}</button></th>
      ))}
        {getInventory[type].map((item) => (
          <tr>
            <td>{item}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
