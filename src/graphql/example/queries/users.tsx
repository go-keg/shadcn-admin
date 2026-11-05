import { graphql } from '@/gql/example'

export const UserList = graphql(`
  query userList($offset: Int! = 0, $limit: Int! = 10, $where: UserWhereInput) {
    userList(offset: $offset, limit: $limit, where: $where) {
      nodes {
        ...UserInfo
        oauthAccounts {
          profile
          provider
        }
      }
    }
  }
`)
