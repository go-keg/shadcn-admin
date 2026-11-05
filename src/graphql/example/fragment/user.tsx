import { graphql } from '@/gql/example'

export const UserInfo = graphql(/* GraphQL */ `
  fragment UserInfo on User {
    id
    email
    nickname
    avatar
    isAdmin
    createdAt
    updatedAt
  }
`)
