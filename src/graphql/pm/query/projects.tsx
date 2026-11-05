import { graphql } from '@/gql/pm'

export const ProjectList = graphql(`
  query ProjectList {
    projects(first: 10) {
      nodes {
        id
        name
        startDate
        purchasePaidAmount
        purchasePaidAmountWithoutMerchantFee
        soloInfo {
          profitMargin
        }
        hasUnpaidTask
        inProgressTaskCount

        income
      }
    }
  }
`)
