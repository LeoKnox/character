export const CharacterMenu = ({ onAttack, onMagic, onHeal }) => {
  //<button onClick={onAttack}>Attack</button>
  return (
    <>
      <select>
        <option>Attack</option>
        <option onChange={onAttack}>{onAttack[0]}</option>
      </select>
      <button onClick={onMagic}>Magic</button>
      <button onClick={onHeal}>Heal</button>
    </>
  );
};
