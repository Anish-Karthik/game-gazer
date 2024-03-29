/* eslint-disable */

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

import * as types from "./graphql"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "query GetAllGames {\n  Game {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    genre\n    platform\n    averageRating\n  }\n}\n\nquery GetGame($gameId: Int!) {\n  Game_by_pk(id: $gameId) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    genre\n    platform\n    image\n    averageRating\n    Reviews {\n      id\n    }\n  }\n}\n\nmutation CreateGame($input: Game_insert_input!) {\n  insert_Game_one(object: $input) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    image\n    publisher\n    genre\n    platform\n    averageRating\n  }\n}\n\nmutation UpdateGame($gameId: Game_pk_columns_input!, $input: Game_set_input!) {\n  update_Game_by_pk(pk_columns: $gameId, _set: $input) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    image\n    genre\n    platform\n    averageRating\n  }\n}\n\nmutation DeleteGame($gameId: Int!) {\n  delete_Game_by_pk(id: $gameId) {\n    id\n    title\n  }\n}":
    types.GetAllGamesDocument,
  "mutation CreateReview($input: Review_insert_input!) {\n  insert_Review_one(object: $input) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nmutation UpdateReview($reviewId: Review_pk_columns_input!, $input: Review_set_input!) {\n  update_Review_by_pk(pk_columns: $reviewId, _set: $input) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nmutation DeleteReview($reviewId: Int!) {\n  delete_Review_by_pk(id: $reviewId) {\n    id\n    rating\n    reviewText\n  }\n}\n\nquery GetAllReviewsByUser($userId: String!) {\n  Review(where: {userId: {_eq: $userId}}) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nquery GetAllReviewsForGame($gameId: Int!) {\n  Review(where: {gameId: {_eq: $gameId}}) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}":
    types.CreateReviewDocument,
  "query GetUser($userId: String!) {\n  User_by_pk(id: $userId) {\n    id\n    email\n    name\n    emailVerified\n    image\n    role\n    Reviews {\n      id\n      rating\n      reviewText\n      reviewDate\n    }\n  }\n}\n\nmutation UpdateUser($userId: User_pk_columns_input!, $input: User_set_input!) {\n  update_User_by_pk(pk_columns: $userId, _set: $input) {\n    id\n    email\n    name\n    role\n  }\n}\n\nquery GetUserRole($userId: String!) {\n  User_by_pk(id: $userId) {\n    role\n  }\n}":
    types.GetUserDocument,
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
  source: "query GetAllGames {\n  Game {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    genre\n    platform\n    averageRating\n  }\n}\n\nquery GetGame($gameId: Int!) {\n  Game_by_pk(id: $gameId) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    genre\n    platform\n    image\n    averageRating\n    Reviews {\n      id\n    }\n  }\n}\n\nmutation CreateGame($input: Game_insert_input!) {\n  insert_Game_one(object: $input) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    image\n    publisher\n    genre\n    platform\n    averageRating\n  }\n}\n\nmutation UpdateGame($gameId: Game_pk_columns_input!, $input: Game_set_input!) {\n  update_Game_by_pk(pk_columns: $gameId, _set: $input) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    image\n    genre\n    platform\n    averageRating\n  }\n}\n\nmutation DeleteGame($gameId: Int!) {\n  delete_Game_by_pk(id: $gameId) {\n    id\n    title\n  }\n}"
): (typeof documents)["query GetAllGames {\n  Game {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    genre\n    platform\n    averageRating\n  }\n}\n\nquery GetGame($gameId: Int!) {\n  Game_by_pk(id: $gameId) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    genre\n    platform\n    image\n    averageRating\n    Reviews {\n      id\n    }\n  }\n}\n\nmutation CreateGame($input: Game_insert_input!) {\n  insert_Game_one(object: $input) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    image\n    publisher\n    genre\n    platform\n    averageRating\n  }\n}\n\nmutation UpdateGame($gameId: Game_pk_columns_input!, $input: Game_set_input!) {\n  update_Game_by_pk(pk_columns: $gameId, _set: $input) {\n    id\n    title\n    description\n    releaseDate\n    developer\n    publisher\n    image\n    genre\n    platform\n    averageRating\n  }\n}\n\nmutation DeleteGame($gameId: Int!) {\n  delete_Game_by_pk(id: $gameId) {\n    id\n    title\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation CreateReview($input: Review_insert_input!) {\n  insert_Review_one(object: $input) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nmutation UpdateReview($reviewId: Review_pk_columns_input!, $input: Review_set_input!) {\n  update_Review_by_pk(pk_columns: $reviewId, _set: $input) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nmutation DeleteReview($reviewId: Int!) {\n  delete_Review_by_pk(id: $reviewId) {\n    id\n    rating\n    reviewText\n  }\n}\n\nquery GetAllReviewsByUser($userId: String!) {\n  Review(where: {userId: {_eq: $userId}}) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nquery GetAllReviewsForGame($gameId: Int!) {\n  Review(where: {gameId: {_eq: $gameId}}) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}"
): (typeof documents)["mutation CreateReview($input: Review_insert_input!) {\n  insert_Review_one(object: $input) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nmutation UpdateReview($reviewId: Review_pk_columns_input!, $input: Review_set_input!) {\n  update_Review_by_pk(pk_columns: $reviewId, _set: $input) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nmutation DeleteReview($reviewId: Int!) {\n  delete_Review_by_pk(id: $reviewId) {\n    id\n    rating\n    reviewText\n  }\n}\n\nquery GetAllReviewsByUser($userId: String!) {\n  Review(where: {userId: {_eq: $userId}}) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n    }\n    Game {\n      id\n      title\n    }\n  }\n}\n\nquery GetAllReviewsForGame($gameId: Int!) {\n  Review(where: {gameId: {_eq: $gameId}}) {\n    id\n    rating\n    reviewText\n    reviewDate\n    User {\n      id\n      name\n      image\n    }\n    Game {\n      id\n      title\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetUser($userId: String!) {\n  User_by_pk(id: $userId) {\n    id\n    email\n    name\n    emailVerified\n    image\n    role\n    Reviews {\n      id\n      rating\n      reviewText\n      reviewDate\n    }\n  }\n}\n\nmutation UpdateUser($userId: User_pk_columns_input!, $input: User_set_input!) {\n  update_User_by_pk(pk_columns: $userId, _set: $input) {\n    id\n    email\n    name\n    role\n  }\n}\n\nquery GetUserRole($userId: String!) {\n  User_by_pk(id: $userId) {\n    role\n  }\n}"
): (typeof documents)["query GetUser($userId: String!) {\n  User_by_pk(id: $userId) {\n    id\n    email\n    name\n    emailVerified\n    image\n    role\n    Reviews {\n      id\n      rating\n      reviewText\n      reviewDate\n    }\n  }\n}\n\nmutation UpdateUser($userId: User_pk_columns_input!, $input: User_set_input!) {\n  update_User_by_pk(pk_columns: $userId, _set: $input) {\n    id\n    email\n    name\n    role\n  }\n}\n\nquery GetUserRole($userId: String!) {\n  User_by_pk(id: $userId) {\n    role\n  }\n}"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
