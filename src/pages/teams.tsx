import { useParams } from "react-router-dom";
import { useSchedule, useTeams } from "../api/stats";
import Header from "../components/header";
import DataTable from "../tables/home-table";

function Teams() {
  const { id } = useParams();
  const { data } = useTeams(id);

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
            {data.teams[0].name}
          </h4>
        </div>
      )}
    </div>
  );
}

export default Teams;
