import { graphql } from '@/gql/example'

export const CreateUser = graphql(/* GraphQL */ `
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserInfo
      oauthAccounts {
        profile
        provider
      }
    }
  }
`)
