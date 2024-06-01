import { useState } from "react";
import { pagePlayer } from "./pagePlayer.js";

export default Player = () => {
  const [player, setPlayer] = useState({ name: "hito", class: "fighter" });
  return <label>{pagePlayer.icon}</label>;
};
