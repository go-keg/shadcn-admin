import { graphql } from '@/gql/example'

export const ProfileQuery = graphql(/* GraphQL */ `
  query profile {
    profile {
      ...UserInfo
    }
  }
`)
