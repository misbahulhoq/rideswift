"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by pickup location..."
          value={(table.getColumn("pickup")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("pickup")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden rounded-md border md:block">
        {/* ... Desktop table code remains the same ... */}
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* --- MOBILE CARD VIEW --- */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <Card key={row.id} className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span>Ride ID: {(row.original as any).id}</span>
                  {row.getVisibleCells().map((cell) => {
                    if (cell.column.id === "actions") {
                      return (
                        <div key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {row.getVisibleCells().map((cell) => {
                  if (cell.column.id === "actions") return null;

                  return (
                    <div
                      key={cell.id}
                      className="flex justify-between border-b pb-2 last:border-none last:pb-0"
                    >
                      <span className="text-muted-foreground font-semibold">
                        {/* --- THIS IS THE CORRECTED LINE --- */}
                        {/* We render the header directly as a string, avoiding the context mismatch */}
                        {String(cell.column.columnDef.header)}
                        {/* ---------------------------------- */}
                      </span>
                      <span className="text-right">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="py-10 text-center">No results.</div>
        )}
      </div>

      {/* --- PAGINATION (Visible on all screen sizes) --- */}
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* ... Pagination code remains the same ... */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
