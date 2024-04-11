import TeamsList from "../functions/teamsList";
import {
  ALCentral,
  ALEast,
  ALWest,
  NLCentral,
  NLEast,
  NLWest,
} from "../utils/constants/teams";

function SideNav() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        border: "1px solid black",
      }}
    >
      {/* <h4 style={{ margin: "10px 0 0 0" }}>Teams</h4> */}
      <h4 style={{ margin: "10px 0 5px 0" }}>American League</h4>
      <TeamsList team={ALWest} header={"AL West"}></TeamsList>
      <TeamsList team={ALCentral} header={"AL Central"}></TeamsList>
      <TeamsList team={ALEast} header={"AL East"}></TeamsList>
      <h4 style={{ margin: "10px 0 5px 0" }}>National League</h4>
      <TeamsList team={NLWest} header={"NL West"}></TeamsList>
      <TeamsList team={NLCentral} header={"NL Central"}></TeamsList>
      <TeamsList team={NLEast} header={"NL East"}></TeamsList>
    </div>
  );
}
export default SideNav;
