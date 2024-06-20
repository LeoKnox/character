export const CharacterSummary = ({ name, level, health, hp }) => {
  return (
    <div>
      <p>Character Name: {name}</p>
      <p>lvl: {level}</p>
      <p>
        {health}/{hp}
      </p>
    </div>
  );
};
