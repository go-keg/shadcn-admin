import { graphql } from '@/gql/pm'
import {
  ProjectApprovalStatus,
  ProjectApprovalType,
  ProjectTaskStatus,
  type ProjectTaskWhereInput,
} from '@/gql/pm/graphql'

const ProjectTaskWhereInputQuoteReview: ProjectTaskWhereInput = {
  parentIDIsNil: true,
  aborted: false,
  status: ProjectTaskStatus.QuoteReview,
  not: {
    hasApprovalsWith: {
      type: ProjectApprovalType.Quoting,
      isLatest: true,
      statusIn: [
        ProjectApprovalStatus.PendingDecision,
        ProjectApprovalStatus.DuplicateResource,
      ],
    },
  },
}

export const ProjectList = graphql(`
  query merchantTaskList(
    $limit: Int = 10
    $offset: Int = 10
    $orderBy: ProjectTaskOrder
    $where: ProjectTaskWhereInput
  ) {
    merchantTaskList(
      limit: $limit
      where: $where
      offset: $offset
      orderBy: $orderBy
    ) {
      totalCount
      nodes {
        channel {
          id
          flinkChannel {
            id
            contentType
            verticalCategory
          }
        }
        latestApproval(type: quoting) {
          type
          status
        }
      }
    }
  }
`)
