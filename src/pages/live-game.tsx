import { Heading } from "@radix-ui/themes";
import { useParams } from "react-router";
import { useLiveGame, usePlayByPlay } from "../api/stats";
import ScoringPlays from "../components/scoring-plays";
import LineScoreTable from "../tables/line-score-table";

function LiveGame() {
  const { id } = useParams();

  const { data } = useLiveGame(id ?? "");
  const { data: playData, isLoading } = usePlayByPlay(id ?? "");

  return (
    <div style={{ display: "flex", color: "white" }}>
      {data && (
        <div style={{ flexGrow: 1 }}>
          <Heading
            size="4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {data.gameData.teams.away.name} @ {data.gameData.teams.home.name}
          </Heading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {data.liveData.linescore.teams.away.runs} -{" "}
            {data.liveData.linescore.teams.home.runs}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1, paddingLeft: "15px" }}>Current Play</div>
            <div>
              <LineScoreTable
                tableData={data.liveData.linescore.innings}
              ></LineScoreTable>
              <h4
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingLeft: "40px",
                  lineHeight: "10px",
                  marginBottom: "0",
                }}
              >
                Scoring Plays
              </h4>
              {!isLoading && (
                <ScoringPlays
                  allPlays={playData.allPlays}
                  scoringPlays={playData.scoringPlays}
                ></ScoringPlays>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveGame;
