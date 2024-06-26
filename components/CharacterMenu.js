export const CharacterMenu = ({ onAttack, onMagic, onHeal }) => {
  return (
    <>
      <button onClick={onAttack}>Attack</button>
      <button onClick={onMagic}>Magic</button>
      <button onClick={onHeal}>Heal</button>
    </>
  );
};
