import { useState } from "react";

const hitoA = () => {
  const [hp, setHp] = useState("50");

  return (
    <div>
      <p>{hp}</p>
    </div>
  );
};

export default hitoA;
