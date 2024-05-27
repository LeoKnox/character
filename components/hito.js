import { useState } from "react";

const hitoStats = () => {
  const [hp, setHp] = useState(50);

  const heal = () => {
    setHp(hp + 1);
  };

  const damage = () => {
    setHp(hp - 1);
  };

  return {
    hp,
    heal,
    damage,
  };
};

const hitoA = () => {
  return (
    <div>
      <p>{hp}</p>
    </div>
  );
};

export default hitoA;
