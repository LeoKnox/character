import { useState } from "react";
import { pagePlayer } from "./pagePlayer.js";

export default Player = () => {
  const [player, setPlayer] = useState({ name: "hito", class: "fighter" });
  return (
    <div>
      <td>{pagePlayer.icon}</td>
    </div>
  );
};
