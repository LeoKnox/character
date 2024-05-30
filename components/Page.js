import { useState } from "react";
import { pagePlayer } from "./pagePlayer.js";

export default Page = () => {
  const [player, setPlayer] = useState(pagePlayer);
  return (
    <div>
      <h3> {player.name}</h3>
      <p> {player.class}</p>
    </div>
  );
};
