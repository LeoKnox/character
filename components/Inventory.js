export default Character = ({ getInventory }) => {
  return (
    <>
      {Object.keys(getInventory).map((key) => (
        <button>{key}</button>
      ))}
      <dl>
        <dt>Weapons</dt>
        <dd>Sword</dd>
        <dd>Axe</dd>
      </dl>
    </>
  );
};
