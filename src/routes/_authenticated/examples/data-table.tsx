'use client'

import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { type ColumnDef } from '@tanstack/react-table'
import {
  type UserListQuery,
  UserStatusMap,
  type UserWhereInput,
} from '@/gql/example/graphql.ts'
import { UserList } from '@/graphql/example/queries/users.tsx'
import { MoreHorizontal } from 'lucide-react'
import { useQuery } from 'urql'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DataTable, DataTableColumnHeader } from '@/components/data-table'

export const Route = createFileRoute('/_authenticated/examples/data-table')({
  component: DataTableDemo,
})

type User = NonNullable<UserListQuery['userList']['nodes']>[number]

const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'nickname',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Nickname' />
    ),
    cell: ({ row }) => (
      <div
        className='w-[80px] lowercase'
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar>
          <AvatarImage src={row.original.avatar ?? ''} />
          <AvatarFallback>{row.original.nickname}</AvatarFallback>
        </Avatar>
        {row.original.nickname}
      </div>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Email' />
    ),
    cell: ({ row }) => (
      <div className='w-[80px] lowercase'>{row.getValue('email')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className='w-[80px] capitalize'>{row.getValue('status')}</div>
    ),
  },

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original
      const vv = projectProfitMargin(user)
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy User ID {vv}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View user details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [where, _] = useState<UserWhereInput | null>(null)
  const [limit, setLimit] = useState<number>(10)
  const [offset, setOffset] = useState<number>(0)
  const [result] = useQuery({
    query: UserList,
    variables: {
      limit: limit,
      offset: offset,
      where: where,
    },
  })

  return (
    <div className='w-full'>
      <div className='flex items-center py-4'>
        <DataTable
          data={result.data?.userList.nodes ?? []}
          columns={columns}
          loading={result.fetching}
          onChange={(v) => {
            setLimit(v.pagination.pageSize)
            setOffset(v.pagination.pageIndex * v.pagination.pageSize)
          }}
          bulkActions={
            <div className='flex justify-around' style={{ width: '120px' }}>
              <a>add</a>
              <a>edit</a>
              <a>del</a>
            </div>
          }
          toolbar={{
            searchPlaceholder: 'Filter users...',
            searchKey: 'search',
            filters: [
              {
                columnId: 'status',
                title: 'Status',
                options: Object.entries(UserStatusMap).map(
                  ([value, label]) => ({
                    label,
                    value,
                  })
                ),
              },
            ],
          }}
        ></DataTable>
      </div>
    </div>
  )
}
