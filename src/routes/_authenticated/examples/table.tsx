import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  type UserListQuery,
  UserStatusMap,
  type UserWhereInput,
} from '@/gql/graphql.ts'
import { UserList } from '@/graphql/queries/users.tsx'
import { Avatar, Input, message, Select, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useQuery } from 'urql'

export const Route = createFileRoute('/_authenticated/examples/table')({
  component: RouteComponent,
})

type User = NonNullable<UserListQuery['userList']['nodes']>[number]

function RouteComponent() {
  const [where, setWhere] = useState<UserWhereInput | null>(null)

  const columns: ColumnsType<User> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'nickname',
      key: 'nickname',
      render: (_, record) => (
        <>
          <Avatar src={record.avatar} />
          {record.nickname}
        </>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => <>{UserStatusMap[record.status] ?? '--'}</>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <a
            onClick={() => {
              message.info(`Invite User ID: ${record.id}`)
            }}
          >
            Invite
          </a>
          <a
            onClick={() => {
              message.info(`Delete User ID: ${record.id}`)
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ]

  const [result] = useQuery({
    query: UserList,
    variables: {
      limit: 20,
      where: where,
    },
  })

  const onSearch = (value: string) => {
    if (value === '') {
      setWhere((prevState) => ({
        ...prevState,
        or: [],
      }))
    } else {
      setWhere((prevState) => ({
        ...prevState,
        or: [{ nicknameContains: value }, { emailContains: value }],
      }))
    }
  }

  const Search = Input.Search
  return (
    <>
      <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
        <Space>
          <Search
            placeholder='search...'
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <Select
            style={{ width: 120 }}
            placeholder='用户状态'
            allowClear
            options={Object.entries(UserStatusMap).map(([value, label]) => ({
              label,
              value,
            }))}
            onChange={(value) => {
              setWhere((prev) => ({ ...prev, status: value }))
            }}
          />
        </Space>

        <Table
          key='userList'
          columns={columns}
          loading={result.fetching}
          dataSource={result.data?.userList.nodes ?? []}
        />
      </Space>
    </>
  )
}
