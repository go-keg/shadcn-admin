import { graphql } from '@/gql/example'

export const LoginMutation = graphql(/* GraphQL */ `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      exp
      token
      user {
        createdAt
        ...UserInfo
      }
    }
  }
`)
