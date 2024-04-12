import { Heading, ScrollArea } from "@radix-ui/themes";
import TeamsList from "../functions/teams-list";
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
        // border: "1px solid black",
      }}
    >
      {/* <h4 style={{ margin: "10px 0 0 0" }}>Teams</h4> */}
      <ScrollArea
        type="always"
        scrollbars="vertical"
        style={{ height: "100vh" }}
      >
        <Heading size="4" style={{ margin: "10px 0 5px 0", color: "white" }}>
          American League
        </Heading>
        <TeamsList team={ALWest} header={"AL West"}></TeamsList>
        <TeamsList team={ALCentral} header={"AL Central"}></TeamsList>
        <TeamsList team={ALEast} header={"AL East"}></TeamsList>
        <Heading size="4" style={{ margin: "10px 0 5px 0", color: "white" }}>
          National League
        </Heading>
        <TeamsList team={NLWest} header={"NL West"}></TeamsList>
        <TeamsList team={NLCentral} header={"NL Central"}></TeamsList>
        <TeamsList team={NLEast} header={"NL East"}></TeamsList>
      </ScrollArea>
    </div>
  );
}
export default SideNav;
