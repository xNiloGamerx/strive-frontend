import { User } from "@/libs/types";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Table from "../table";

type DataPair = {
  [key: string]: User[];
};

interface TopUserTableProps {
  title: string;
  pillText?: string;
  dataPairs: DataPair;
}

export default function TopUserTable({
  title,
  pillText,
  dataPairs,
}: TopUserTableProps) {
  const [currentData, setCurrentData] = useState<User[]>(
    Object.values(dataPairs)[0],
  );
  const [currentLabel, setCurrentLabel] = useState<string>(
    Object.keys(dataPairs)[0],
  );

  const handleLabelClick = (label: string) => {
    setCurrentLabel(label);
    setCurrentData(dataPairs[label]);
  };

  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor("rank.rank", {
      header: "",
      cell: (info) => getRankDesign(info.cell.getValue()),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => (
        <Link
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 underline"
          href={`/dashboard/profile/${info.row.original.id}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Öffne die Profilseite von ${info.cell.getValue()}`}
        >
          {info.cell.getValue()}
          <ExternalLinkIcon className="w-4 h-4" />
        </Link>
      ),
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

  return (
    <div className="w-full h-full rounded-md border border-gray-300 overflow-hidden">
      <div
        className={`w-full ${currentData.length > 7 && "h-full"} flex flex-col overflow-y-auto overflow-x-hidden`}
      >
        <div className="flex items-center justify-between px-4 py-2 sticky top-0 z-0">
          <div className="flex gap-2">
            <h2 className="font-bold text-xl">{title}</h2>
            {pillText && (
              <div className="flex items-center gap-1 border border-orange-500 rounded-full px-1.5 py-0.5">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-orange-500">{pillText}</span>
              </div>
            )}
          </div>
          {Object.keys(dataPairs).length > 1 && (
            <div className="flex self-end rounded-md border bg-white border-gray-300 divide-x divide-gray-300 overflow-hidden">
              {Object.keys(dataPairs).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`w-1/2 flex items-center justify-center p-2 px-4 cursor-pointer ${currentLabel === value && "bg-gray-100"} hover:bg-gray-100 active:bg-gray-200`}
                  onClick={() => handleLabelClick(value)}
                >
                  <p className="whitespace-nowrap">{value}</p>
                </button>
              ))}
            </div>
          )}
        </div>
        <Table data={currentData} columns={columns} />
      </div>
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
