import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Inning } from "../utils/types";
import "./styles/line-score-table.css";

interface LineScoreTableProps {
  tableData: [];
}

function LineScoreTable(props: LineScoreTableProps) {
  const columnHelper = createColumnHelper<Inning>();
  const awayColumns: ColumnDef<Inning, any>[] = [
    columnHelper.accessor("away.runs", {
      cell: (row) => <div style={{ width: "15px" }}>{row.getValue()}</div>,
      footer: (info) => info.column.id,
    }),
  ];

  const homeColumns: ColumnDef<Inning, any>[] = [
    columnHelper.accessor("home.runs", {
      cell: (row) => <div style={{ width: "15px" }}>{row.getValue()}</div>,
      footer: (info) => info.column.id,
    }),
  ];

  const inningColumns: ColumnDef<Inning, any>[] = [
    columnHelper.accessor("num", {
      cell: (row) => <div style={{ width: "15px" }}>{row.getValue()}</div>,
      footer: (info) => info.column.id,
    }),
  ];

  const awayTable = useReactTable({
    data: props.tableData,
    columns: awayColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const homeTable = useReactTable({
    data: props.tableData,
    columns: homeColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const inningTable = useReactTable({
    data: props.tableData,
    columns: inningColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <table>
          <tbody>
            {inningTable.getRowModel().rows.map((row) => (
              <td key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <tr key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </tr>
                ))}
              </td>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "27px",
          }}
        >
          Away
        </div>
        <table>
          <tbody>
            {awayTable.getRowModel().rows.map((row) => (
              <td key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <tr key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </tr>
                ))}
              </td>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "27px",
          }}
        >
          Home
        </div>
        <table>
          <tbody>
            {homeTable.getRowModel().rows.map((row) => (
              <td key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <tr key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </tr>
                ))}
              </td>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LineScoreTable;
