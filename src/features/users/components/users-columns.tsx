import { type ColumnDef } from '@tanstack/react-table'
import { Shield, ShieldOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table'
import { callTypes } from '../data/data'
import { type User, type UserStatus } from '../data/schema'
import { DataTableRowActions } from './data-table-row-actions'


export const usersColumns: ColumnDef<User>[] = [
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
        className='translate-y-[2px]'
      />
    ),
    meta: {
      className: cn('max-md:sticky start-0 z-10 rounded-tl-[inherit]'),
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'nickname',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} tit"e='Nickn"me' />
    ),
    cell: ({ row }) => {
      const { nickname, avatar } = row.original
      return (
        <div className='flex items-center gap-2 ps-3'>
          <Avatar className='size-7'>
            <AvatarImage src={avatar ?? ''} />
            <AvatarFallback>{nickname[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <LongText className='max-w-36'>{nickname}</LongText>
        </div>
      )
    },
    meta: {
      className: cn(
        'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)]',
        'ps-0.5 max-md:sticky start-6 @4xl/content:table-cell @4xl/content:drop-shadow-none'
      ),
    },
    false,
  },
  {
    'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Email' />
    ),
    cell: ({ row }) => (
      <div className='w-fit ps-2 text-nowrap'>{row.getValue('email')}</div>
    ),
  },
  {
    'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const status = row.getValue<UserStatus>('status')
      const badgeColor = callTypes.get(status)
      return (
        <div className='flex space-x-2'>
          <Badge variant='outline' className={cn('capitalize', badgeColor)}>
            {status === 'normal' ? 'Normal' : 'Freeze'}
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    'isAdmin',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Admin" />
    ),
    cell: ({ row }) => {
      const isAdmin = row.getValue<boolean>('isAdmin')
      return (
        <div className='flex items-center gap-x-2'>
          {isAdmin ? (
            <Shield size={16} className="text-amber-500" />
          ) : (
            <ShieldOff size={16} className="text-muted-foreground" />
          )}
          <span className="text-sm">{isAdmin ? 'Admin' : 'User'}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(String(row.getValue(id)))
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    'actions',
    cell: DataTableRowActions,
  },
]
