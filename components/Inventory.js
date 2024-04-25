export default Character = ({getInventory}) => {
  return (
    <>
    {Object.keys(getInventory)}
    <dl>
      <dt>Weapons</dt>
      <dd>Sword</dd>
      <dd>Axe</dd>
    </dl>
    </>
  );
};
