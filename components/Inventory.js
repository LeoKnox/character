export default Character = ({ getInventory }) => {
  return (
    <>
      {Object.keys(getInventory).map((key) => (
        <button>{key}</button>
      ))}
      {getInventory["weapons"].map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};
