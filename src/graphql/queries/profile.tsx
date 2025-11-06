import { graphql } from '@/gql'

export const ProfileQuery = graphql(/* GraphQL */ `
  query profile {
    profile {
      ...UserInfo
    }
  }
`)
