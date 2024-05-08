import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  return (
    <>
      <h3>Adventure Home</h3>
      <p>{dungeonData.roomName}</p>
    </>
  );
};
