import { useSchedule } from "../api/stats";
import Header from "../components/header";
import DataTable from "../tables/home-table";

function Home() {
  const { data, isFetching } = useSchedule();

  return (
    <div>
      <Header></Header>
      {!isFetching && data && (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            Todays Games ({data.dates[0].date})
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>Total Games: {data.totalGames}</div>
            <div>Games In Progress: {data.totalGamesInProgress}</div>
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
