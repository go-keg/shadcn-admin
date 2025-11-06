/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as types from './graphql'


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
  '\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            exp\n            token\n            user {\n                ...UserInfo\n            }\n        }\n    }\n': typeof types.LoginDocument
  '\n    fragment UserInfo on User {\n        id\n        email\n        nickname\n        avatar\n        status\n        createdAt\n        isAdmin\n    }\n': typeof types.UserInfoFragmentDoc
  '\n    query profile {\n        profile {\n            ...UserInfo\n        }\n    }\n': typeof types.ProfileDocument
  '\nquery userList($offset: Int!=0, $limit: Int!=10, $where: UserWhereInput) {\n    userList(offset: $offset, limit: $limit, where: $where) {\n        nodes {\n            id\n            nickname\n            email\n            avatar\n            status\n            createdAt\n            isAdmin\n        }\n    }\n}': typeof types.UserListDocument
  '\n    subscription MessageSub {\n        messageAdded {\n            id\n            sender\n            type\n            content\n            contentType\n            metadata\n            createdAt\n        }\n    }\n': typeof types.MessageSubDocument
}
const documents: Documents = {
    "\n    mutation'\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            exp\n            token\n            user {\n                ...UserInfo\n            }\n        }\n    }\n'cument,
    "\n    fragment'\n    fragment UserInfo on User {\n        id\n        email\n        nickname\n        avatar\n        status\n        createdAt\n        isAdmin\n    }\n'oFragmentDoc,
    "\n    query pr'\n    query profile {\n        profile {\n            ...UserInfo\n        }\n    }\n'Document,
    "\nquery userLi'\nquery userList($offset: Int!=0, $limit: Int!=10, $where: UserWhereInput) {\n    userList(offset: $offset, limit: $limit, where: $where) {\n        nodes {\n            id\n            nickname\n            email\n            avatar\n            status\n            createdAt\n            isAdmin\n        }\n    }\n}'tDocument,
    "\n    subscrip'\n    subscription MessageSub {\n        messageAdded {\n            id\n            sender\n            type\n            content\n            contentType\n            metadata\n            createdAt\n        }\n    }\n'SubDocument,
};

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
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            exp\n            token\n            user {\n                ...UserInfo\n            }\n        }\n    }\n'): (typeof documents)['\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            exp\n            token\n            user {\n                ...UserInfo\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    fragment UserInfo on User {\n        id\n        email\n        nickname\n        avatar\n        status\n        createdAt\n        isAdmin\n    }\n'): (typeof documents)['\n    fragment UserInfo on User {\n        id\n        email\n        nickname\n        avatar\n        status\n        createdAt\n        isAdmin\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    query profile {\n        profile {\n            ...UserInfo\n        }\n    }\n'): (typeof documents)['\n    query profile {\n        profile {\n            ...UserInfo\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\nquery userList($offset: Int!=0, $limit: Int!=10, $where: UserWhereInput) {\n    userList(offset: $offset, limit: $limit, where: $where) {\n        nodes {\n            id\n            nickname\n            email\n            avatar\n            status\n            createdAt\n            isAdmin\n        }\n    }\n}'): (typeof documents)['\nquery userList($offset: Int!=0, $limit: Int!=10, $where: UserWhereInput) {\n    userList(offset: $offset, limit: $limit, where: $where) {\n        nodes {\n            id\n            nickname\n            email\n            avatar\n            status\n            createdAt\n            isAdmin\n        }\n    }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: '\n    subscription MessageSub {\n        messageAdded {\n            id\n            sender\n            type\n            content\n            contentType\n            metadata\n            createdAt\n        }\n    }\n'): (typeof documents)['\n    subscription MessageSub {\n        messageAdded {\n            id\n            sender\n            type\n            content\n            contentType\n            metadata\n            createdAt\n        }\n    }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;