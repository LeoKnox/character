import { useState } from "react";

export default Character = ({ getInventory }) => {
  let buttonStyle = {
    color: "gold",
    backgroundColor: "black",
    border: "none",
    padding: ".4em",
    textDecoration: "none",
  };
  const [type, setType] = useState(Object.keys(getInventory)[0]);
  return (
    <>
      <table>
        {Object.keys(getInventory).map((key) => (
          <th>
            <button onClick={() => setType(key)} style={buttonStyle}>
              {key}
            </button>
          </th>
        ))}
        {getInventory[type].map((item) => (
          <tr>
            <td>{item["name"] || item}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
