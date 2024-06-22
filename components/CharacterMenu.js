export const CharacterMenu = ({ onAttack, onMagic, onHeal }) => {
  return (
    <>
      <div onClick={onAttack}>Attack</div>
      <div onClick={onMagic}>Magic</div>
      <div onClick={onHeal}>Heal</div>
    </>
  );
};
