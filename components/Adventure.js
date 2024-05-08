import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        {() => {
          for (var i = 0; i < dungeonData.x; i++) {
            <p>tt</p>;
          }
        }}
      </div>
    </>
  );
};
