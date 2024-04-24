import Inventory from "./Inventory.js";

export default Character = () => {
  return (
    <>
      <h1>Character Page</h1>
      <div className="character">
        <div className="stats">S</div>
        <div className="inventory">
          <Inventory />
        </div>
        <div className="abilities">G</div>
      </div>
    </>
  );
};
