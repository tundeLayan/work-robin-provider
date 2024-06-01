/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";

import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table as ShadCnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData extends object> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  data: TData[];
  loading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataTable = <T extends object>({
  data,
  columns,
  loading = true,
}: DataTableProps<T>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
    // getPaginationRowModel: getPaginationRowModel(), //NOTE: for pagination
  });

  // TODO: Add loader
  // if (loading)
  //   return (
  //     <>
  //       <TableSkeleton />
  //     </>
  //   );

  // TODO: Border for the table
  return (
    <div className=" bg-white">
      <ShadCnTable>
        <TableHeader className="bg-neutral-450 p-[6px] h-14">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className="text-[12px] font-bold leading-[19.2px] tracking-[0.0125rem] text-neutral-500"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="h-[63px]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    className="text-xs font-normal leading-[19.2px] text-secondary-100"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </ShadCnTable>
    </div>
  );
};

export default DataTable;
