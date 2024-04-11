import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import "./styles/home-table.css";
import { Games } from "../utils/types";

interface DataTableProps {
  tableData: Games[];
}

function DataTable(props: DataTableProps) {
  const columnHelper = createColumnHelper<Games>();

  const columns: ColumnDef<Games, any>[] = [
    columnHelper.accessor("teams.away.team.name", {
      cell: ({ row }) => (
        <div>
          {row.original.teams.away.isWinner ? (
            <div style={{ width: "200px", fontWeight: "bold" }}>
              {row.original.teams.away.team.name}
            </div>
          ) : (
            <div style={{ width: "200px" }}>
              {row.original.teams.away.team.name}
            </div>
          )}
        </div>
      ),
      header: () => <div style={{ textAlign: "left" }}>Away Team</div>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("teams.home.team.name", {
      cell: ({ row }) => (
        <div>
          {row.original.teams.home.isWinner ? (
            <div style={{ width: "200px", fontWeight: "bold" }}>
              {row.original.teams.home.team.name}
            </div>
          ) : (
            <div style={{ width: "200px" }}>
              {row.original.teams.home.team.name}
            </div>
          )}
        </div>
      ),
      header: () => <div style={{ textAlign: "left" }}>Home Team</div>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("gameDate", {
      cell: ({ row }) => (
        <div>
          {row.original.status.detailedState !== "Postponed" ? (
            <div style={{ width: "100px" }}>
              {new Date(row.original.gameDate).toLocaleTimeString()}
            </div>
          ) : (
            <div>Postponed</div>
          )}
        </div>
      ),
      header: () => <div style={{ textAlign: "center" }}>Game Time</div>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("seriesGameNumber", {
      cell: ({ row }) => (
        <div style={{ textAlign: "center" }}>
          {row.original.seriesGameNumber} of {row.original.gamesInSeries}
        </div>
      ),
      header: () => <div style={{ textAlign: "center" }}>Game Number</div>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("gameDate", {
      cell: ({ row }) => (
        <div>
          {row.original.status.detailedState !== "Postponed" && (
            <div style={{ textAlign: "center" }}>
              {new Date() >
                new Date(
                  new Date(row.original.gameDate).getTime() - 60000 * 30
                ) && (
                <a href={`/game/${row.original.gamePk}`}>
                  {row.original.teams.away.score} -{" "}
                  {row.original.teams.home.score}
                </a>
              )}
            </div>
          )}
        </div>
      ),
      header: () => <div style={{ textAlign: "center" }}>Score</div>,
      footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data: props.tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
