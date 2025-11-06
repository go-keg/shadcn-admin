import { graphql } from '@/gql'

export const LoginMutation = graphql(/* GraphQL */ `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      exp
      token
      user {
        ...UserInfo
      }
    }
  }
`)

export const UserInfo = graphql(/* GraphQL */ `
  fragment UserInfo on User {
    id
    email
    nickname
    avatar
    status
    createdAt
    isAdmin
  }
`)
