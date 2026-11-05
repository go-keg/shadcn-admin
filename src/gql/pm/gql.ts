/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import * as types from './graphql';


/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  query merchantTaskList(\n    $limit: Int = 10\n    $offset: Int = 10\n    $orderBy: ProjectTaskOrder\n    $where: ProjectTaskWhereInput\n  ) {\n    merchantTaskList(\n      limit: $limit\n      where: $where\n      offset: $offset\n      orderBy: $orderBy\n    ) {\n      totalCount\n      nodes {\n        channel {\n          id\n          flinkChannel {\n            id\n            contentType\n            verticalCategory\n          }\n        }\n        latestApproval(type: quoting) {\n          type\n          status\n        }\n      }\n    }\n  }\n': typeof types.MerchantTaskListDocument
  '\n    query ProjectList{\n        projects(first: 10){\n            nodes {\n                id\n                name\n                purchasePaidAmount\n                purchasePaidAmountWithoutMerchantFee\n            }\n        }\n    }\n': typeof types.ProjectListDocument
}
const documents: Documents = {
  '\n  query merchantTaskList(\n    $limit: Int = 10\n    $offset: Int = 10\n    $orderBy: ProjectTaskOrder\n    $where: ProjectTaskWhereInput\n  ) {\n    merchantTaskList(\n      limit: $limit\n      where: $where\n      offset: $offset\n      orderBy: $orderBy\n    ) {\n      totalCount\n      nodes {\n        channel {\n          id\n          flinkChannel {\n            id\n            contentType\n            verticalCategory\n          }\n        }\n        latestApproval(type: quoting) {\n          type\n          status\n        }\n      }\n    }\n  }\n':
    types.MerchantTaskListDocument,
  '\n    query ProjectList{\n        projects(first: 10){\n            nodes {\n                id\n                name\n                purchasePaidAmount\n                purchasePaidAmountWithoutMerchantFee\n            }\n        }\n    }\n':
    types.ProjectListDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query merchantTaskList(\n    $limit: Int = 10\n    $offset: Int = 10\n    $orderBy: ProjectTaskOrder\n    $where: ProjectTaskWhereInput\n  ) {\n    merchantTaskList(\n      limit: $limit\n      where: $where\n      offset: $offset\n      orderBy: $orderBy\n    ) {\n      totalCount\n      nodes {\n        channel {\n          id\n          flinkChannel {\n            id\n            contentType\n            verticalCategory\n          }\n        }\n        latestApproval(type: quoting) {\n          type\n          status\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query merchantTaskList(\n    $limit: Int = 10\n    $offset: Int = 10\n    $orderBy: ProjectTaskOrder\n    $where: ProjectTaskWhereInput\n  ) {\n    merchantTaskList(\n      limit: $limit\n      where: $where\n      offset: $offset\n      orderBy: $orderBy\n    ) {\n      totalCount\n      nodes {\n        channel {\n          id\n          flinkChannel {\n            id\n            contentType\n            verticalCategory\n          }\n        }\n        latestApproval(type: quoting) {\n          type\n          status\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query ProjectList{\n        projects(first: 10){\n            nodes {\n                id\n                name\n                purchasePaidAmount\n                purchasePaidAmountWithoutMerchantFee\n            }\n        }\n    }\n'
): (typeof documents)['\n    query ProjectList{\n        projects(first: 10){\n            nodes {\n                id\n                name\n                purchasePaidAmount\n                purchasePaidAmountWithoutMerchantFee\n            }\n        }\n    }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
