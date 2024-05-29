import { useState } from "react";

const HitoA = () => {
  const [hp, setHp] = useState("50");

  return (
    <div>
      <p>{hp}</p>
    </div>
  );
};

export default HitoA;
