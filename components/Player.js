import { useState } from "react";

export default Player = () => {
  const [hp, setHp] = useState(10);
  return (
    <div>
      <p>You have {hp} hitpoints!</p>

      <button onClick={() => setHp((hp) => hp + 1)}>Heal</button>
    </div>
  );
};
