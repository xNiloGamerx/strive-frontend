import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";

interface TopUserTableProps {
  data: User[];
}

export default function TopUserTable({ data }: TopUserTableProps) {
  const columnHelper = createColumnHelper<User>();

  const defaultColumns = [
    columnHelper.accessor("rank.rank", {
      header: "",
      cell: (info) => getRankDesign(info.cell.getValue()),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("weightClass", {
      header: () => "Gewichtsklasse",
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("rank.exercise", {
      header: () => "Übung",
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("rank.weight", {
      header: () => "Gewicht",
      footer: (props) => props.column.id,
    }),
  ];

  const table = useReactTable({
    data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full h-full flex flex-col rounded-md overflow-hidden border border-gray-300">
      <div className="flex items-center gap-2 px-4 py-2">
        <h2 className="font-bold text-xl">Top Sportler</h2>
        <div className="flex items-center gap-1 border border-orange-500 rounded-full px-1.5 py-0.5">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-orange-500">Top 5</span>
        </div>
      </div>
      <table className="grow" border={1}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="bg-[#F9FBFC] text-left px-4 py-2"
                  key={header.id}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`animate-slide-in-right opacity-0`}
              style={{ animationDelay: `${15 * (Number(row.id) * 4)}ms` }}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="px-4 py-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function getRankDesign(rank: number) {
  switch (rank) {
    case 1:
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/logo/mini/logo_mini_gold.svg"
            width={10}
            height={10}
            className="w-8 h-8"
            alt="strive mini logo gold"
          />
        </div>
      );
    case 2:
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/logo/mini/logo_mini_silver.svg"
            width={10}
            height={10}
            className="w-8 h-8"
            alt="strive mini logo gold"
          />
        </div>
      );
    case 3:
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/logo/mini/logo_mini_bronze.svg"
            width={10}
            height={10}
            className="w-8 h-8"
            alt="strive mini logo gold"
          />
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center w-full h-full">
          <span className="flex items-center justify-center">{rank}</span>
        </div>
      );
  }
}
