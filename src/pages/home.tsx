import { useSchedule } from "../api/stats";
import Header from "../components/header";
import DataTable from "../tables/home-table";

function Home() {
  const { data } = useSchedule();

  return (
    <div style={{ display: "flex", paddingRight: "200px" }}>
      <Header></Header>
      {data && (
        <div style={{ flexGrow: 1 }}>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            Today's Games ({data.dates[0].date})
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              color: "white",
            }}
          >
            <div>
              Total Games: <b>{data.totalGames}</b>
            </div>
            <div>
              Games In Progress: <b>{data.totalGamesInProgress}</b>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DataTable tableData={data.dates[0].games}></DataTable>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
