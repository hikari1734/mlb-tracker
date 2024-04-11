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
      <ul>
        {scoringPlaysArray.map((play) => {
          return (
            <li>
              <div
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  width: "500px",
                  whiteSpace: "nowrap",
                }}
              >
                ({play.result.rbi} runs) {play.result.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ScoringPlays;
