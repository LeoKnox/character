import Inventory from "./Inventory.js";
import { getName, getClass } from "./characterData.js";

export default Character = () => {
  console.log(getName());
  let myCharacter = {};
  return (
    <>
      <h1>Character Page</h1>
      <div className="character">
        <div className="stats">{getName()}<p>{getClass()}</p></div>
        <div className="inventory">
          <Inventory />
        </div>
        <div className="abilities">G</div>
      </div>
    </>
  );
};