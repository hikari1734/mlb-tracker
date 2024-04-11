import { Plays } from "../utils/types";

interface ScoringPlaysProps {
  allPlays: Plays[];
  scoringPlays: number[];
}

function ScoringPlays(props: ScoringPlaysProps) {
  const scoringPlaysArray = props.allPlays.filter((play, index) =>
    props.scoringPlays.includes(index)
  );
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", color: "white" }}
    >
      {scoringPlaysArray.length > 0 && (
        <div>
          <ul>
            {scoringPlaysArray.map((play) => {
              return (
                <li style={{}}>
                  {play.result.eventType !== "field_error" ? (
                    <div
                      style={{
                        overflow: "wrap",
                        width: "400px",
                      }}
                    >
                      ({play.result.rbi} runs) {play.result.description}
                    </div>
                  ) : (
                    <div
                      style={{
                        overflow: "wrap",
                        width: "400px",
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
