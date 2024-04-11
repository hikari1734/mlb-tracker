import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Games } from "../utils/types";
import { Link, Strong, Table } from "@radix-ui/themes";

interface DataTableProps {
  tableData: Games[];
}

function DataTable(props: DataTableProps) {
  return (
    <Table.Root
      variant="surface"
      style={{ borderColor: "#FA4616", backgroundColor: "white" }}
    >
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Away Team</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Home Team</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Game Time</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Game in Series</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Score</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.tableData.map((game) => {
          return (
            <Table.Row>
              {game.teams.away.isWinner ? (
                <Table.Cell>
                  <Strong>{game.teams.away.team.name}</Strong>
                </Table.Cell>
              ) : (
                <Table.Cell>{game.teams.away.team.name}</Table.Cell>
              )}
              {game.teams.home.isWinner ? (
                <Table.Cell>
                  <Strong>{game.teams.home.team.name}</Strong>
                </Table.Cell>
              ) : (
                <Table.Cell>{game.teams.home.team.name}</Table.Cell>
              )}
              <Table.Cell>
                {game.status.detailedState !== "Postponed" ? (
                  <div>{new Date(game.gameDate).toLocaleTimeString()}</div>
                ) : (
                  <div>Postponed</div>
                )}
              </Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                {game.seriesGameNumber} of {game.gamesInSeries}
              </Table.Cell>
              <Table.Cell style={{ textAlign: "center" }}>
                {game.status.detailedState !== "Postponed" && (
                  <div>
                    {new Date() >
                      new Date(
                        new Date(game.gameDate).getTime() - 60000 * 30
                      ) && (
                      <Link href={`/game/${game.gamePk}`}>
                        {game.teams.away.score} - {game.teams.home.score}
                      </Link>
                    )}
                  </div>
                )}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
}

export default DataTable;
