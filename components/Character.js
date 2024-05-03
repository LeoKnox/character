import { useState } from "react";
import Inventory from "./Inventory.js";
import {
  getName,
  getClass,
  getInventory,
  attackAlpha,
} from "./characterData.js";

export default Character = () => {
  const [dialogue, setDialogue] = useState(["ready for adventure"]);
  const attackButton = () => {
    console.log(...dialogue, attackAlpha(2));
  };
  let myCharacter = {};
  return (
    <>
      <h1>Character Page</h1>
      <div className="character">
        <div className="stats">
          {getName}
          <p>{getClass}</p>
        </div>
        <div className="inventory">
          <Inventory getInventory={getInventory} />
        </div>
      </div>
      <div className="dialogue">
        <div className="abilities">
          <button onClick={() => attackButton()}>Attack</button>
        </div>
        {dialogue.map((statement) => (
          <p>{statement}</p>
        ))}
      </div>
    </>
  );
};
