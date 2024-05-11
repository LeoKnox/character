import { dungeonData } from "./roomData.js";

export default Adventure = () => {
  const drawRow = (width) => {
    return (
      <>
        #
        {[...Array(width)].map(() => (
          <td>+</td>
        ))}
        #
      </>
    );
  };
  return (
    <>
      <h3>Adventure Home</h3>
      <div>
        <table>
          <tr>
            #
            {[...Array(dungeonData["length"])].map(() => (
              <td>#</td>
            ))}
            #
          </tr>
          {[...Array(dungeonData["length"])].map(() => {
            return (
              <tr>
                {drawRow(dungeonData["width"])}
              </tr>
            );
          })}
          <tr>
            #
            {[...Array(dungeonData["length"])].map(() => (
              <td>#</td>
            ))}
            #
          </tr>
        </table>
      </div>
    </>
  );
};
