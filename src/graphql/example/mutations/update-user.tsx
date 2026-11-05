import { graphql } from '@/gql/example'

export const UpdateUser = graphql(/* GraphQL */ `
  mutation updateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      ...UserInfo
      oauthAccounts {
        profile
        provider
      }
    }
  }
`)
