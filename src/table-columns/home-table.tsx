import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import React from "react"
import './index.css'
import { Games } from "../utils/types"

interface DataTableProps {
    tableData: Games[];
}
  
  function DataTable(props: DataTableProps) {

    const columnHelper = createColumnHelper<Games>()
  
    const columns: ColumnDef<Games, any>[] = [
      columnHelper.accessor('teams.away.team.name', {
        cell: row => <div style={{width: '200px'}}>{row.getValue()}</div>,
        header: () => <div style={{ textAlign: 'left' }}>Away Team</div>,
        footer: info => info.column.id,
      }),
      columnHelper.accessor('teams.home.team.name', {
          cell: row => <div style={{width: '200px'}}>{row.getValue()}</div>,
          header: () => <div style={{ textAlign: 'left' }}>Home Team</div>,
          footer: info => info.column.id,
        }),
        columnHelper.accessor('gameDate', {
          cell: row => <div style={{width: '150px',}}>{new Date(row.getValue()).toLocaleTimeString()}</div>,
          header: () => <div style={{ textAlign: 'left' }}>Game Time</div>,
          footer: info => info.column.id,
        }),
        columnHelper.accessor('seriesGameNumber', {
          cell: ({row}) => <div style={{ textAlign: 'center' }}>{row.original.seriesGameNumber} of {row.original.gamesInSeries}</div>,
          header: () => <div style={{ textAlign: 'center' }}>Series Game Number</div>,
          footer: info => info.column.id,
        }),
        columnHelper.accessor('gameDate', {
          cell: ({row}) => <div style={{ textAlign: 'center' }}>{(new Date() > new Date(new Date(row.original.gameDate).getTime() - (60000 * 30))) && <a href='#'>Live!</a> }</div>,
          header: () => <div style={{ textAlign: 'center' }}>View Game</div>,
          footer: info => info.column.id,
        }),
    ]
  
    const table = useReactTable({
      data: props.tableData,
      columns: columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
        <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
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
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  export default DataTable;
