import { Plays } from "../utils/types";

interface ScoringPlaysProps {
  allPlays: Plays[];
  scoringPlays: number[];
}

function ScoringPlays(props: ScoringPlaysProps) {
  const scoringPlaysArray = props.allPlays.filter((play, index) =>
    props.scoringPlays.includes(index)
  );
  console.log(scoringPlaysArray);
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      {scoringPlaysArray.length > 0 && (
        <div style={{ border: "1px solid black" }}>
          <ul>
            {scoringPlaysArray.map((play) => {
              return (
                <li style={{}}>
                  {play.result.eventType !== "field_error" ? (
                    <div
                      style={{
                        overflow: "wrap",
                        width: "500px",
                      }}
                    >
                      ({play.result.rbi} runs) {play.result.description}
                    </div>
                  ) : (
                    <div
                      style={{
                        overflow: "wrap",
                        width: "500px",
                      }}
                    >
                      (Field Error) {play.result.description}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ScoringPlays;
