import { Table } from "@radix-ui/themes";
import { Inning } from "../utils/types";

interface LineScoreTableProps {
  tableData: Inning[];
}

function LineScoreTable(props: LineScoreTableProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: "40px",
      }}
    >
      <Table.Root
        variant="surface"
        style={{
          borderColor: "#FA4616",
          backgroundColor: "white",
        }}
      >
        <Table.Header>
          <Table.Row>
            {props.tableData.map((inning) => {
              return (
                <Table.ColumnHeaderCell>{inning.num}</Table.ColumnHeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {props.tableData.map((game) => {
              return (
                <Table.Cell style={{ textAlign: "center" }}>
                  {game.away.runs}
                </Table.Cell>
              );
            })}
          </Table.Row>
          <Table.Row>
            {props.tableData.map((game) => {
              return (
                <Table.Cell style={{ textAlign: "center" }}>
                  {game.home.runs}
                </Table.Cell>
              );
            })}
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}

export default LineScoreTable;
