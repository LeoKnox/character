import { useState } from "react";

const hitoA = () => {
  const [hp, setHp] = useState(50);

  const heal = () => {
    setHp(hp + 1);
  };

  const damage = () => {
    setHp(hp - 1);
  };

  return (
    <div>
      <p>{hp}</p>
    </div>
  );
};

export default hitoA;
