import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type RowData,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

interface TableProps<TData extends RowData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
}

export default function Table<TData>({ data, columns }: TableProps<TData>) {
  const [animateRowsIn, setAnimateRowsIn] = useState<boolean>(true);

  const handleRowAnimationEnd = () => {
    setAnimateRowsIn(false);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="bg-white h-full z-1" border={1}>
      <thead className="sticky top-0 z-2">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th className="bg-[#F9FBFC] text-left px-4 py-2" key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="divide-y divide-gray-300">
        {data.length === 0 && (
          <tr className="bg-white">
            <td colSpan={5} className="">
              <p className="text-center text-gray-400">
                Keine Daten vorhanden!
              </p>
            </td>
          </tr>
        )}
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className={`${animateRowsIn ? "animate-slide-in-right opacity-0" : "opacity-100"} bg-white`}
            style={{ animationDelay: `${15 * Number(row.id)}ms` }}
            onAnimationEnd={handleRowAnimationEnd}
          >
            {row.getVisibleCells().map((cell) => (
              <td className="px-4 py-4" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
