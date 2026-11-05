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
  '\n  fragment UserInfo on User {\n    id\n    email\n    nickname\n    avatar\n    isAdmin\n    createdAt\n    updatedAt\n  }\n': typeof types.UserInfoFragmentDoc
  '\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      ...UserInfo\n      oauthAccounts {\n        profile\n        provider\n      }\n    }\n  }\n': typeof types.CreateUserDocument
  '\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            exp\n            token\n            user {\n                createdAt\n                ...UserInfo\n            }\n        }\n    }\n': typeof types.LoginDocument
  '\n  mutation updateUser($id: ID!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input) {\n      ...UserInfo\n      oauthAccounts {\n        profile\n        provider\n      }\n    }\n  }\n': typeof types.UpdateUserDocument
  '\n    query profile {\n        profile {\n            ...UserInfo\n        }\n    }\n': typeof types.ProfileDocument
  '\n    query userList($offset: Int! = 0, $limit: Int! = 10, $where: UserWhereInput) {\n        userList(offset: $offset, limit: $limit, where: $where) {\n            nodes {\n                ...UserInfo\n                oauthAccounts {\n                    profile\n                    provider\n                }\n            }\n        }\n    }\n': typeof types.UserListDocument
}
const documents: Documents = {
  '\n  fragment UserInfo on User {\n    id\n    email\n    nickname\n    avatar\n    isAdmin\n    createdAt\n    updatedAt\n  }\n':
    types.UserInfoFragmentDoc,
  '\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      ...UserInfo\n      oauthAccounts {\n        profile\n        provider\n      }\n    }\n  }\n':
    types.CreateUserDocument,
  '\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            exp\n            token\n            user {\n                createdAt\n                ...UserInfo\n            }\n        }\n    }\n':
    types.LoginDocument,
  '\n  mutation updateUser($id: ID!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input) {\n      ...UserInfo\n      oauthAccounts {\n        profile\n        provider\n      }\n    }\n  }\n':
    types.UpdateUserDocument,
  '\n    query profile {\n        profile {\n            ...UserInfo\n        }\n    }\n':
    types.ProfileDocument,
  '\n    query userList($offset: Int! = 0, $limit: Int! = 10, $where: UserWhereInput) {\n        userList(offset: $offset, limit: $limit, where: $where) {\n            nodes {\n                ...UserInfo\n                oauthAccounts {\n                    profile\n                    provider\n                }\n            }\n        }\n    }\n':
    types.UserListDocument,
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
  source: '\n  fragment UserInfo on User {\n    id\n    email\n    nickname\n    avatar\n    isAdmin\n    createdAt\n    updatedAt\n  }\n'
): (typeof documents)['\n  fragment UserInfo on User {\n    id\n    email\n    nickname\n    avatar\n    isAdmin\n    createdAt\n    updatedAt\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      ...UserInfo\n      oauthAccounts {\n        profile\n        provider\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation createUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      ...UserInfo\n      oauthAccounts {\n        profile\n        provider\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            exp\n            token\n            user {\n                createdAt\n                ...UserInfo\n            }\n        }\n    }\n'
): (typeof documents)['\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            exp\n            token\n            user {\n                createdAt\n                ...UserInfo\n            }\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateUser($id: ID!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input) {\n      ...UserInfo\n      oauthAccounts {\n        profile\n        provider\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation updateUser($id: ID!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input) {\n      ...UserInfo\n      oauthAccounts {\n        profile\n        provider\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query profile {\n        profile {\n            ...UserInfo\n        }\n    }\n'
): (typeof documents)['\n    query profile {\n        profile {\n            ...UserInfo\n        }\n    }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query userList($offset: Int! = 0, $limit: Int! = 10, $where: UserWhereInput) {\n        userList(offset: $offset, limit: $limit, where: $where) {\n            nodes {\n                ...UserInfo\n                oauthAccounts {\n                    profile\n                    provider\n                }\n            }\n        }\n    }\n'
): (typeof documents)['\n    query userList($offset: Int! = 0, $limit: Int! = 10, $where: UserWhereInput) {\n        userList(offset: $offset, limit: $limit, where: $where) {\n            nodes {\n                ...UserInfo\n                oauthAccounts {\n                    profile\n                    provider\n                }\n            }\n        }\n    }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
