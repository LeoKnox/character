import { useState } from "react";

export default Page = () => {
  const [player, setPlayer] = useState({ name: "hito", class: "fighter" });
  return (
    <div>
      <h3> {player.name}</h3>
      <p> {player.class}</p>
    </div>
  );
};
