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
          {drawRow(3)}
          <tr>
            #
            {[...Array(dungeonData["length"])].map(() => (
              <td>#</td>
            ))}
            #
          </tr>
          {[...Array(dungeonData["width"])].map(() => {
            return (
              <tr>
                #
                {[...Array(dungeonData["length"])].map(() => (
                  <td>+</td>
                ))}
                #
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
