import Inventory from "./Inventory.js";
import {
  getName,
  getClass,
  getInventory,
  attackAlpha,
} from "./characterData.js";

export default Character = () => {
  console.log(attackAlpha(2));
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
        <div className="abilities">
          <button>Attack</button>
        </div>
      </div>
    </>
  );
};
