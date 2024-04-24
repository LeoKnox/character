import Inventory from "./Inventory.js";
import { getName } from "./characterData.js";

export default Character = () => {
  let myCharacter = {};
  return (
    <>
      <h1>Character Page</h1>
      <div className="character">
        <div className="stats">{getName}</div>
        <div className="inventory">
          <Inventory />
        </div>
        <div className="abilities">G</div>
      </div>
    </>
  );
};
