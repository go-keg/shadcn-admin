import { graphql } from '@/gql'

export const UserList = graphql(`
  query userList($offset: Int! = 0, $limit: Int! = 10, $where: UserWhereInput) {
    userList(offset: $offset, limit: $limit, where: $where) {
      nodes {
        id
        nickname
        email
        avatar
        status
        createdAt
        isAdmin
      }
    }
  }
`)
