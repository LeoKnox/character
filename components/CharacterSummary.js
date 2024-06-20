import Bar from "./Bar.js";

export const CharacterSummary = ({ name, level, health, hp }) => {
  return (
    <div>
      <p>Character Name: {name}</p>
      <p>lvl: {level}</p>
      <p>
        {health}/{hp}
      </p>
      <Bar />
    </div>
  );
};
