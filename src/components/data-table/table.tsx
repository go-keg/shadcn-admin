import React, { useEffect, useState } from 'react'
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type PaginationState,
  SortingState,
  TableState,
  useReactTable,
} from '@tanstack/react-table'
import { type OrderDirection } from '@/gql/graphql.ts'
import { cn } from '@/lib/utils.ts'
import { Spinner } from '@/components/ui/spinner.tsx'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'
import { DataTableBulkActions } from './bulk-actions'
import { DataTablePagination } from './pagination'
import { DataTableToolbar } from './toolbar'

export { DataTablePagination } from './pagination'
export { DataTableColumnHeader } from './column-header'
export { DataTableFacetedFilter } from './faceted-filter'
export { DataTableViewOptions } from './view-options'
export { DataTableToolbar } from './toolbar'
export { DataTableBulkActions } from './bulk-actions'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  loading?: boolean
  toolbar?: {
    searchPlaceholder?: string
    searchKey?: string
    filters?: {
      columnId: string
      title: string
      options: {
        label: string
        value: string
        icon?: React.ComponentType<{ className?: string }>
      }[]
    }[]
  } // 自定义工具栏区域
  bulkActions?: React.ReactNode // 自定义工具栏区域
  onChange?: (state: TableState) => void
  onRowSelectionChange?: (field: string, direction: OrderDirection) => void
}

export function DataTable<TData, TValue>({
  columns,
  data,
  loading,
  bulkActions,
  onChange,
  toolbar,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({})
  // const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  // const [columnFilters, onColumnFiltersChange] = useState<ColumnFiltersState>([])
  const [pagination, onPaginationChange] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  // Synced with URL states (updated to match route search schema defaults)

  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    renderFallbackValue: undefined,
    onPaginationChange: onPaginationChange,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    data,
    columns,
    state: { sorting, pagination, rowSelection },
  })

  useEffect(() => {
    onChange != undefined && onChange(table.getState())
  }, [table])

  return (
    <div
      className={cn(
        'max-sm:has-[div[role="toolbar"]]:mb-16', // Add margin bottom to the table on mobile when the toolbar is visible
        'flex flex-1 flex-col gap-4'
      )}
    >
      <DataTableToolbar
        table={table}
        searchPlaceholder={toolbar?.searchPlaceholder}
        searchKey={toolbar?.searchKey}
        filters={toolbar?.filters}
      />
      <div className='overflow-hidden rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className='group/row'>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={cn(
                        'bg-background group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
                        header.column.columnDef.meta?.className,
                        header.column.columnDef.meta?.thClassName
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Spinner style={{ marginRight: '4px' }} />
                    Loading...
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className='group/row'
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        'bg-background group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
                        cell.column.columnDef.meta?.className,
                        cell.column.columnDef.meta?.tdClassName
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} className='mt-auto' />
      <DataTableBulkActions
        table={table}
        entityName={''}
        children={bulkActions}
      />
    </div>
  )
}
