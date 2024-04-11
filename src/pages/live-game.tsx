import { useParams } from "react-router";
import { useLiveGame } from "../api/stats";
import Header from "../components/header";
import LineScoreTable from "../tables/line-score-table";

function LiveGame() {
  const { id } = useParams();

  const { data } = useLiveGame(id ?? "");

  return (
    <div style={{ display: "flex", paddingRight: "200px" }}>
      <Header></Header>
      {data && (
        <div style={{ flexGrow: 1 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {data.gameData.teams.away.name} @ {data.gameData.teams.home.name}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {data.liveData.linescore.teams.away.runs} -{" "}
            {data.liveData.linescore.teams.home.runs}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <LineScoreTable
              tableData={data.liveData.linescore.innings}
            ></LineScoreTable>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveGame;
