/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Role: { input: any; output: any; }
  float8: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

/** columns and relationships of "Account" */
export type Account = {
  /** An object relationship */
  User: User;
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

/** aggregated selection of "Account" */
export type Account_Aggregate = {
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

export type Account_Aggregate_Bool_Exp = {
  count?: InputMaybe<Account_Aggregate_Bool_Exp_Count>;
};

export type Account_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Account_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Account" */
export type Account_Aggregate_Fields = {
  avg?: Maybe<Account_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
  stddev?: Maybe<Account_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Sum_Fields>;
  var_pop?: Maybe<Account_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Var_Samp_Fields>;
  variance?: Maybe<Account_Variance_Fields>;
};


/** aggregate fields of "Account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Account" */
export type Account_Aggregate_Order_By = {
  avg?: InputMaybe<Account_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Account_Max_Order_By>;
  min?: InputMaybe<Account_Min_Order_By>;
  stddev?: InputMaybe<Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Account_Sum_Order_By>;
  var_pop?: InputMaybe<Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Account" */
export type Account_Arr_Rel_Insert_Input = {
  data: Array<Account_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Account_Avg_Fields = {
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Account" */
export type Account_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Account" */
export type Account_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'Account_pkey'
  /** unique or primary key constraint on columns "provider", "providerAccountId" */
  | 'Account_provider_providerAccountId_key';

/** input type for incrementing numeric columns in table "Account" */
export type Account_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Account" */
export type Account_Insert_Input = {
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Account" */
export type Account_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Account" */
export type Account_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Account" */
export type Account_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** on_conflict condition type for table "Account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "Account". */
export type Account_Order_By = {
  User?: InputMaybe<User_Order_By>;
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Account */
export type Account_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "Account" */
export type Account_Select_Column =
  /** column name */
  | 'access_token'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'id'
  /** column name */
  | 'id_token'
  /** column name */
  | 'provider'
  /** column name */
  | 'providerAccountId'
  /** column name */
  | 'refresh_token'
  /** column name */
  | 'scope'
  /** column name */
  | 'session_state'
  /** column name */
  | 'token_type'
  /** column name */
  | 'type'
  /** column name */
  | 'userId';

/** input type for updating data in table "Account" */
export type Account_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Account_Stddev_Fields = {
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Account" */
export type Account_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Stddev_Pop_Fields = {
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Account" */
export type Account_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Stddev_Samp_Fields = {
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Account" */
export type Account_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Account_Sum_Fields = {
  expires_at?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Account" */
export type Account_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** update columns of table "Account" */
export type Account_Update_Column =
  /** column name */
  | 'access_token'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'id'
  /** column name */
  | 'id_token'
  /** column name */
  | 'provider'
  /** column name */
  | 'providerAccountId'
  /** column name */
  | 'refresh_token'
  /** column name */
  | 'scope'
  /** column name */
  | 'session_state'
  /** column name */
  | 'token_type'
  /** column name */
  | 'type'
  /** column name */
  | 'userId';

export type Account_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Account_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Account_Var_Pop_Fields = {
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Account" */
export type Account_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Var_Samp_Fields = {
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Account" */
export type Account_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Variance_Fields = {
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Account" */
export type Account_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "Game" */
export type Game = {
  /** An array relationship */
  Reviews: Array<Review>;
  /** An aggregate relationship */
  Reviews_aggregate: Review_Aggregate;
  averageRating?: Maybe<Scalars['float8']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  developer?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  platform: Array<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['timestamp']['output']>;
  title: Scalars['String']['output'];
};


/** columns and relationships of "Game" */
export type GameReviewsArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/** columns and relationships of "Game" */
export type GameReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};

/** aggregated selection of "Game" */
export type Game_Aggregate = {
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

/** aggregate fields of "Game" */
export type Game_Aggregate_Fields = {
  avg?: Maybe<Game_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
  stddev?: Maybe<Game_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Sum_Fields>;
  var_pop?: Maybe<Game_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Var_Samp_Fields>;
  variance?: Maybe<Game_Variance_Fields>;
};


/** aggregate fields of "Game" */
export type Game_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Game_Avg_Fields = {
  averageRating?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
  Reviews?: InputMaybe<Review_Bool_Exp>;
  Reviews_aggregate?: InputMaybe<Review_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Game_Bool_Exp>>;
  _not?: InputMaybe<Game_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Bool_Exp>>;
  averageRating?: InputMaybe<Float8_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  developer?: InputMaybe<String_Comparison_Exp>;
  genre?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  platform?: InputMaybe<String_Array_Comparison_Exp>;
  publisher?: InputMaybe<String_Comparison_Exp>;
  releaseDate?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Game" */
export type Game_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'Game_pkey';

/** input type for incrementing numeric columns in table "Game" */
export type Game_Inc_Input = {
  averageRating?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Game" */
export type Game_Insert_Input = {
  Reviews?: InputMaybe<Review_Arr_Rel_Insert_Input>;
  averageRating?: InputMaybe<Scalars['float8']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developer?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<Scalars['String']['input']>>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  releaseDate?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
  averageRating?: Maybe<Scalars['float8']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  developer?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Array<Scalars['String']['output']>>;
  publisher?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
  averageRating?: Maybe<Scalars['float8']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  developer?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Array<Scalars['String']['output']>>;
  publisher?: Maybe<Scalars['String']['output']>;
  releaseDate?: Maybe<Scalars['timestamp']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Game" */
export type Game_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Game>;
};

/** input type for inserting object relation for remote table "Game" */
export type Game_Obj_Rel_Insert_Input = {
  data: Game_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Game_On_Conflict>;
};

/** on_conflict condition type for table "Game" */
export type Game_On_Conflict = {
  constraint: Game_Constraint;
  update_columns?: Array<Game_Update_Column>;
  where?: InputMaybe<Game_Bool_Exp>;
};

/** Ordering options when selecting data from "Game". */
export type Game_Order_By = {
  Reviews_aggregate?: InputMaybe<Review_Aggregate_Order_By>;
  averageRating?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  developer?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  publisher?: InputMaybe<Order_By>;
  releaseDate?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Game */
export type Game_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Game" */
export type Game_Select_Column =
  /** column name */
  | 'averageRating'
  /** column name */
  | 'description'
  /** column name */
  | 'developer'
  /** column name */
  | 'genre'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'platform'
  /** column name */
  | 'publisher'
  /** column name */
  | 'releaseDate'
  /** column name */
  | 'title';

/** input type for updating data in table "Game" */
export type Game_Set_Input = {
  averageRating?: InputMaybe<Scalars['float8']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developer?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<Scalars['String']['input']>>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  releaseDate?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Game_Stddev_Fields = {
  averageRating?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Game_Stddev_Pop_Fields = {
  averageRating?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Game_Stddev_Samp_Fields = {
  averageRating?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Game" */
export type Game_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Stream_Cursor_Value_Input = {
  averageRating?: InputMaybe<Scalars['float8']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  developer?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<Scalars['String']['input']>>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  releaseDate?: InputMaybe<Scalars['timestamp']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Game_Sum_Fields = {
  averageRating?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Game" */
export type Game_Update_Column =
  /** column name */
  | 'averageRating'
  /** column name */
  | 'description'
  /** column name */
  | 'developer'
  /** column name */
  | 'genre'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'platform'
  /** column name */
  | 'publisher'
  /** column name */
  | 'releaseDate'
  /** column name */
  | 'title';

export type Game_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Game_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Game_Set_Input>;
  /** filter the rows which have to be updated */
  where: Game_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Game_Var_Pop_Fields = {
  averageRating?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Game_Var_Samp_Fields = {
  averageRating?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Game_Variance_Fields = {
  averageRating?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "PasswordResetToken" */
export type PasswordResetToken = {
  email: Scalars['String']['output'];
  expires: Scalars['timestamp']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** aggregated selection of "PasswordResetToken" */
export type PasswordResetToken_Aggregate = {
  aggregate?: Maybe<PasswordResetToken_Aggregate_Fields>;
  nodes: Array<PasswordResetToken>;
};

/** aggregate fields of "PasswordResetToken" */
export type PasswordResetToken_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<PasswordResetToken_Max_Fields>;
  min?: Maybe<PasswordResetToken_Min_Fields>;
};


/** aggregate fields of "PasswordResetToken" */
export type PasswordResetToken_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PasswordResetToken_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "PasswordResetToken". All fields are combined with a logical 'AND'. */
export type PasswordResetToken_Bool_Exp = {
  _and?: InputMaybe<Array<PasswordResetToken_Bool_Exp>>;
  _not?: InputMaybe<PasswordResetToken_Bool_Exp>;
  _or?: InputMaybe<Array<PasswordResetToken_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "PasswordResetToken" */
export type PasswordResetToken_Constraint =
  /** unique or primary key constraint on columns "token", "email" */
  | 'PasswordResetToken_email_token_key'
  /** unique or primary key constraint on columns "id" */
  | 'PasswordResetToken_pkey'
  /** unique or primary key constraint on columns "token" */
  | 'PasswordResetToken_token_key';

/** input type for inserting data into table "PasswordResetToken" */
export type PasswordResetToken_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type PasswordResetToken_Max_Fields = {
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PasswordResetToken_Min_Fields = {
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "PasswordResetToken" */
export type PasswordResetToken_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PasswordResetToken>;
};

/** on_conflict condition type for table "PasswordResetToken" */
export type PasswordResetToken_On_Conflict = {
  constraint: PasswordResetToken_Constraint;
  update_columns?: Array<PasswordResetToken_Update_Column>;
  where?: InputMaybe<PasswordResetToken_Bool_Exp>;
};

/** Ordering options when selecting data from "PasswordResetToken". */
export type PasswordResetToken_Order_By = {
  email?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: PasswordResetToken */
export type PasswordResetToken_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "PasswordResetToken" */
export type PasswordResetToken_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'expires'
  /** column name */
  | 'id'
  /** column name */
  | 'token';

/** input type for updating data in table "PasswordResetToken" */
export type PasswordResetToken_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "PasswordResetToken" */
export type PasswordResetToken_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PasswordResetToken_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PasswordResetToken_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "PasswordResetToken" */
export type PasswordResetToken_Update_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'expires'
  /** column name */
  | 'id'
  /** column name */
  | 'token';

export type PasswordResetToken_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PasswordResetToken_Set_Input>;
  /** filter the rows which have to be updated */
  where: PasswordResetToken_Bool_Exp;
};

/** columns and relationships of "Review" */
export type Review = {
  /** An object relationship */
  Game: Game;
  /** An object relationship */
  User: User;
  gameId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['float8']['output'];
  reviewDate: Scalars['timestamp']['output'];
  reviewText?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

/** aggregated selection of "Review" */
export type Review_Aggregate = {
  aggregate?: Maybe<Review_Aggregate_Fields>;
  nodes: Array<Review>;
};

export type Review_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Review_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Review_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Review_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Review_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Review_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Review_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Review_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Review_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Review_Aggregate_Bool_Exp_Var_Samp>;
};

export type Review_Aggregate_Bool_Exp_Avg = {
  arguments: Review_Select_Column_Review_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Review_Aggregate_Bool_Exp_Corr = {
  arguments: Review_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Review_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Review_Select_Column_Review_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Review_Select_Column_Review_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Review_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Review_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Review_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Review_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Review_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Review_Select_Column_Review_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Review_Select_Column_Review_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Review_Aggregate_Bool_Exp_Max = {
  arguments: Review_Select_Column_Review_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Review_Aggregate_Bool_Exp_Min = {
  arguments: Review_Select_Column_Review_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Review_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Review_Select_Column_Review_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Review_Aggregate_Bool_Exp_Sum = {
  arguments: Review_Select_Column_Review_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Review_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Review_Select_Column_Review_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Review_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "Review" */
export type Review_Aggregate_Fields = {
  avg?: Maybe<Review_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Review_Max_Fields>;
  min?: Maybe<Review_Min_Fields>;
  stddev?: Maybe<Review_Stddev_Fields>;
  stddev_pop?: Maybe<Review_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Review_Stddev_Samp_Fields>;
  sum?: Maybe<Review_Sum_Fields>;
  var_pop?: Maybe<Review_Var_Pop_Fields>;
  var_samp?: Maybe<Review_Var_Samp_Fields>;
  variance?: Maybe<Review_Variance_Fields>;
};


/** aggregate fields of "Review" */
export type Review_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Review_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Review" */
export type Review_Aggregate_Order_By = {
  avg?: InputMaybe<Review_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Review_Max_Order_By>;
  min?: InputMaybe<Review_Min_Order_By>;
  stddev?: InputMaybe<Review_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Review_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Review_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Review_Sum_Order_By>;
  var_pop?: InputMaybe<Review_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Review_Var_Samp_Order_By>;
  variance?: InputMaybe<Review_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Review" */
export type Review_Arr_Rel_Insert_Input = {
  data: Array<Review_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Review_On_Conflict>;
};

/** aggregate avg on columns */
export type Review_Avg_Fields = {
  gameId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Review" */
export type Review_Avg_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Review". All fields are combined with a logical 'AND'. */
export type Review_Bool_Exp = {
  Game?: InputMaybe<Game_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Review_Bool_Exp>>;
  _not?: InputMaybe<Review_Bool_Exp>;
  _or?: InputMaybe<Array<Review_Bool_Exp>>;
  gameId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Float8_Comparison_Exp>;
  reviewDate?: InputMaybe<Timestamp_Comparison_Exp>;
  reviewText?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Review" */
export type Review_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'Review_pkey';

/** input type for incrementing numeric columns in table "Review" */
export type Review_Inc_Input = {
  gameId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "Review" */
export type Review_Insert_Input = {
  Game?: InputMaybe<Game_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  gameId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['float8']['input']>;
  reviewDate?: InputMaybe<Scalars['timestamp']['input']>;
  reviewText?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Review_Max_Fields = {
  gameId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['float8']['output']>;
  reviewDate?: Maybe<Scalars['timestamp']['output']>;
  reviewText?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Review" */
export type Review_Max_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reviewDate?: InputMaybe<Order_By>;
  reviewText?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Review_Min_Fields = {
  gameId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['float8']['output']>;
  reviewDate?: Maybe<Scalars['timestamp']['output']>;
  reviewText?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Review" */
export type Review_Min_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reviewDate?: InputMaybe<Order_By>;
  reviewText?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Review" */
export type Review_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Review>;
};

/** on_conflict condition type for table "Review" */
export type Review_On_Conflict = {
  constraint: Review_Constraint;
  update_columns?: Array<Review_Update_Column>;
  where?: InputMaybe<Review_Bool_Exp>;
};

/** Ordering options when selecting data from "Review". */
export type Review_Order_By = {
  Game?: InputMaybe<Game_Order_By>;
  User?: InputMaybe<User_Order_By>;
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reviewDate?: InputMaybe<Order_By>;
  reviewText?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Review */
export type Review_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Review" */
export type Review_Select_Column =
  /** column name */
  | 'gameId'
  /** column name */
  | 'id'
  /** column name */
  | 'rating'
  /** column name */
  | 'reviewDate'
  /** column name */
  | 'reviewText'
  /** column name */
  | 'userId';

/** select "Review_aggregate_bool_exp_avg_arguments_columns" columns of table "Review" */
export type Review_Select_Column_Review_Aggregate_Bool_Exp_Avg_Arguments_Columns =
  /** column name */
  | 'rating';

/** select "Review_aggregate_bool_exp_corr_arguments_columns" columns of table "Review" */
export type Review_Select_Column_Review_Aggregate_Bool_Exp_Corr_Arguments_Columns =
  /** column name */
  | 'rating';

/** select "Review_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "Review" */
export type Review_Select_Column_Review_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns =
  /** column name */
  | 'rating';

/** select "Review_aggregate_bool_exp_max_arguments_columns" columns of table "Review" */
export type Review_Select_Column_Review_Aggregate_Bool_Exp_Max_Arguments_Columns =
  /** column name */
  | 'rating';

/** select "Review_aggregate_bool_exp_min_arguments_columns" columns of table "Review" */
export type Review_Select_Column_Review_Aggregate_Bool_Exp_Min_Arguments_Columns =
  /** column name */
  | 'rating';

/** select "Review_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "Review" */
export type Review_Select_Column_Review_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns =
  /** column name */
  | 'rating';

/** select "Review_aggregate_bool_exp_sum_arguments_columns" columns of table "Review" */
export type Review_Select_Column_Review_Aggregate_Bool_Exp_Sum_Arguments_Columns =
  /** column name */
  | 'rating';

/** select "Review_aggregate_bool_exp_var_samp_arguments_columns" columns of table "Review" */
export type Review_Select_Column_Review_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns =
  /** column name */
  | 'rating';

/** input type for updating data in table "Review" */
export type Review_Set_Input = {
  gameId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['float8']['input']>;
  reviewDate?: InputMaybe<Scalars['timestamp']['input']>;
  reviewText?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Review_Stddev_Fields = {
  gameId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Review" */
export type Review_Stddev_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Review_Stddev_Pop_Fields = {
  gameId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Review" */
export type Review_Stddev_Pop_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Review_Stddev_Samp_Fields = {
  gameId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Review" */
export type Review_Stddev_Samp_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Review" */
export type Review_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Review_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Review_Stream_Cursor_Value_Input = {
  gameId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['float8']['input']>;
  reviewDate?: InputMaybe<Scalars['timestamp']['input']>;
  reviewText?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Review_Sum_Fields = {
  gameId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "Review" */
export type Review_Sum_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "Review" */
export type Review_Update_Column =
  /** column name */
  | 'gameId'
  /** column name */
  | 'id'
  /** column name */
  | 'rating'
  /** column name */
  | 'reviewDate'
  /** column name */
  | 'reviewText'
  /** column name */
  | 'userId';

export type Review_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Review_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Review_Set_Input>;
  /** filter the rows which have to be updated */
  where: Review_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Review_Var_Pop_Fields = {
  gameId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Review" */
export type Review_Var_Pop_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Review_Var_Samp_Fields = {
  gameId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Review" */
export type Review_Var_Samp_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Review_Variance_Fields = {
  gameId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Review" */
export type Review_Variance_Order_By = {
  gameId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Role". All fields are combined with logical 'AND'. */
export type Role_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Role']['input']>;
  _gt?: InputMaybe<Scalars['Role']['input']>;
  _gte?: InputMaybe<Scalars['Role']['input']>;
  _in?: InputMaybe<Array<Scalars['Role']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Role']['input']>;
  _lte?: InputMaybe<Scalars['Role']['input']>;
  _neq?: InputMaybe<Scalars['Role']['input']>;
  _nin?: InputMaybe<Array<Scalars['Role']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "User" */
export type User = {
  /** An array relationship */
  Accounts: Array<Account>;
  /** An aggregate relationship */
  Accounts_aggregate: Account_Aggregate;
  /** An array relationship */
  Reviews: Array<Review>;
  /** An aggregate relationship */
  Reviews_aggregate: Review_Aggregate;
  createdAt: Scalars['timestamp']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['Role']['output']>;
  updatedAt: Scalars['timestamp']['output'];
};


/** columns and relationships of "User" */
export type UserAccountsArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserReviewsArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Accounts?: InputMaybe<Account_Bool_Exp>;
  Accounts_aggregate?: InputMaybe<Account_Aggregate_Bool_Exp>;
  Reviews?: InputMaybe<Review_Bool_Exp>;
  Reviews_aggregate?: InputMaybe<Review_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Role_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export type User_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'User_email_key'
  /** unique or primary key constraint on columns "id" */
  | 'User_pkey';

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Accounts?: InputMaybe<Account_Arr_Rel_Insert_Input>;
  Reviews?: InputMaybe<Review_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['Role']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['Role']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['Role']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Accounts_aggregate?: InputMaybe<Account_Aggregate_Order_By>;
  Reviews_aggregate?: InputMaybe<Review_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "User" */
export type User_Select_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'name'
  /** column name */
  | 'password'
  /** column name */
  | 'role'
  /** column name */
  | 'updatedAt';

/** input type for updating data in table "User" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['Role']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['Role']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "User" */
export type User_Update_Column =
  /** column name */
  | 'createdAt'
  /** column name */
  | 'email'
  /** column name */
  | 'emailVerified'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'name'
  /** column name */
  | 'password'
  /** column name */
  | 'role'
  /** column name */
  | 'updatedAt';

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** columns and relationships of "VerificationToken" */
export type VerificationToken = {
  email: Scalars['String']['output'];
  expires: Scalars['timestamp']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** aggregated selection of "VerificationToken" */
export type VerificationToken_Aggregate = {
  aggregate?: Maybe<VerificationToken_Aggregate_Fields>;
  nodes: Array<VerificationToken>;
};

/** aggregate fields of "VerificationToken" */
export type VerificationToken_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<VerificationToken_Max_Fields>;
  min?: Maybe<VerificationToken_Min_Fields>;
};


/** aggregate fields of "VerificationToken" */
export type VerificationToken_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VerificationToken_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "VerificationToken". All fields are combined with a logical 'AND'. */
export type VerificationToken_Bool_Exp = {
  _and?: InputMaybe<Array<VerificationToken_Bool_Exp>>;
  _not?: InputMaybe<VerificationToken_Bool_Exp>;
  _or?: InputMaybe<Array<VerificationToken_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  expires?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "VerificationToken" */
export type VerificationToken_Constraint =
  /** unique or primary key constraint on columns "token", "email" */
  | 'VerificationToken_email_token_key'
  /** unique or primary key constraint on columns "id" */
  | 'VerificationToken_pkey'
  /** unique or primary key constraint on columns "token" */
  | 'VerificationToken_token_key';

/** input type for inserting data into table "VerificationToken" */
export type VerificationToken_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type VerificationToken_Max_Fields = {
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type VerificationToken_Min_Fields = {
  email?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "VerificationToken" */
export type VerificationToken_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<VerificationToken>;
};

/** on_conflict condition type for table "VerificationToken" */
export type VerificationToken_On_Conflict = {
  constraint: VerificationToken_Constraint;
  update_columns?: Array<VerificationToken_Update_Column>;
  where?: InputMaybe<VerificationToken_Bool_Exp>;
};

/** Ordering options when selecting data from "VerificationToken". */
export type VerificationToken_Order_By = {
  email?: InputMaybe<Order_By>;
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: VerificationToken */
export type VerificationToken_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "VerificationToken" */
export type VerificationToken_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'expires'
  /** column name */
  | 'id'
  /** column name */
  | 'token';

/** input type for updating data in table "VerificationToken" */
export type VerificationToken_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "VerificationToken" */
export type VerificationToken_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VerificationToken_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VerificationToken_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  expires?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "VerificationToken" */
export type VerificationToken_Update_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'expires'
  /** column name */
  | 'id'
  /** column name */
  | 'token';

export type VerificationToken_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VerificationToken_Set_Input>;
  /** filter the rows which have to be updated */
  where: VerificationToken_Bool_Exp;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "Account" */
  delete_Account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "Account" */
  delete_Account_by_pk?: Maybe<Account>;
  /** delete data from the table: "Game" */
  delete_Game?: Maybe<Game_Mutation_Response>;
  /** delete single row from the table: "Game" */
  delete_Game_by_pk?: Maybe<Game>;
  /** delete data from the table: "PasswordResetToken" */
  delete_PasswordResetToken?: Maybe<PasswordResetToken_Mutation_Response>;
  /** delete single row from the table: "PasswordResetToken" */
  delete_PasswordResetToken_by_pk?: Maybe<PasswordResetToken>;
  /** delete data from the table: "Review" */
  delete_Review?: Maybe<Review_Mutation_Response>;
  /** delete single row from the table: "Review" */
  delete_Review_by_pk?: Maybe<Review>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "VerificationToken" */
  delete_VerificationToken?: Maybe<VerificationToken_Mutation_Response>;
  /** delete single row from the table: "VerificationToken" */
  delete_VerificationToken_by_pk?: Maybe<VerificationToken>;
  /** insert data into the table: "Account" */
  insert_Account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "Account" */
  insert_Account_one?: Maybe<Account>;
  /** insert data into the table: "Game" */
  insert_Game?: Maybe<Game_Mutation_Response>;
  /** insert a single row into the table: "Game" */
  insert_Game_one?: Maybe<Game>;
  /** insert data into the table: "PasswordResetToken" */
  insert_PasswordResetToken?: Maybe<PasswordResetToken_Mutation_Response>;
  /** insert a single row into the table: "PasswordResetToken" */
  insert_PasswordResetToken_one?: Maybe<PasswordResetToken>;
  /** insert data into the table: "Review" */
  insert_Review?: Maybe<Review_Mutation_Response>;
  /** insert a single row into the table: "Review" */
  insert_Review_one?: Maybe<Review>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "VerificationToken" */
  insert_VerificationToken?: Maybe<VerificationToken_Mutation_Response>;
  /** insert a single row into the table: "VerificationToken" */
  insert_VerificationToken_one?: Maybe<VerificationToken>;
  /** update data of the table: "Account" */
  update_Account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "Account" */
  update_Account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "Account" */
  update_Account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
  /** update data of the table: "Game" */
  update_Game?: Maybe<Game_Mutation_Response>;
  /** update single row of the table: "Game" */
  update_Game_by_pk?: Maybe<Game>;
  /** update multiples rows of table: "Game" */
  update_Game_many?: Maybe<Array<Maybe<Game_Mutation_Response>>>;
  /** update data of the table: "PasswordResetToken" */
  update_PasswordResetToken?: Maybe<PasswordResetToken_Mutation_Response>;
  /** update single row of the table: "PasswordResetToken" */
  update_PasswordResetToken_by_pk?: Maybe<PasswordResetToken>;
  /** update multiples rows of table: "PasswordResetToken" */
  update_PasswordResetToken_many?: Maybe<Array<Maybe<PasswordResetToken_Mutation_Response>>>;
  /** update data of the table: "Review" */
  update_Review?: Maybe<Review_Mutation_Response>;
  /** update single row of the table: "Review" */
  update_Review_by_pk?: Maybe<Review>;
  /** update multiples rows of table: "Review" */
  update_Review_many?: Maybe<Array<Maybe<Review_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "VerificationToken" */
  update_VerificationToken?: Maybe<VerificationToken_Mutation_Response>;
  /** update single row of the table: "VerificationToken" */
  update_VerificationToken_by_pk?: Maybe<VerificationToken>;
  /** update multiples rows of table: "VerificationToken" */
  update_VerificationToken_many?: Maybe<Array<Maybe<VerificationToken_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GameArgs = {
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PasswordResetTokenArgs = {
  where: PasswordResetToken_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PasswordResetToken_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ReviewArgs = {
  where: Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_VerificationTokenArgs = {
  where: VerificationToken_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_VerificationToken_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GameArgs = {
  objects: Array<Game_Insert_Input>;
  on_conflict?: InputMaybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_OneArgs = {
  object: Game_Insert_Input;
  on_conflict?: InputMaybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PasswordResetTokenArgs = {
  objects: Array<PasswordResetToken_Insert_Input>;
  on_conflict?: InputMaybe<PasswordResetToken_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PasswordResetToken_OneArgs = {
  object: PasswordResetToken_Insert_Input;
  on_conflict?: InputMaybe<PasswordResetToken_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReviewArgs = {
  objects: Array<Review_Insert_Input>;
  on_conflict?: InputMaybe<Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_OneArgs = {
  object: Review_Insert_Input;
  on_conflict?: InputMaybe<Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VerificationTokenArgs = {
  objects: Array<VerificationToken_Insert_Input>;
  on_conflict?: InputMaybe<VerificationToken_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VerificationToken_OneArgs = {
  object: VerificationToken_Insert_Input;
  on_conflict?: InputMaybe<VerificationToken_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _inc?: InputMaybe<Account_Inc_Input>;
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _inc?: InputMaybe<Account_Inc_Input>;
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: Array<Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GameArgs = {
  _inc?: InputMaybe<Game_Inc_Input>;
  _set?: InputMaybe<Game_Set_Input>;
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_By_PkArgs = {
  _inc?: InputMaybe<Game_Inc_Input>;
  _set?: InputMaybe<Game_Set_Input>;
  pk_columns: Game_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Game_ManyArgs = {
  updates: Array<Game_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PasswordResetTokenArgs = {
  _set?: InputMaybe<PasswordResetToken_Set_Input>;
  where: PasswordResetToken_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_PasswordResetToken_By_PkArgs = {
  _set?: InputMaybe<PasswordResetToken_Set_Input>;
  pk_columns: PasswordResetToken_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PasswordResetToken_ManyArgs = {
  updates: Array<PasswordResetToken_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewArgs = {
  _inc?: InputMaybe<Review_Inc_Input>;
  _set?: InputMaybe<Review_Set_Input>;
  where: Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_By_PkArgs = {
  _inc?: InputMaybe<Review_Inc_Input>;
  _set?: InputMaybe<Review_Set_Input>;
  pk_columns: Review_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Review_ManyArgs = {
  updates: Array<Review_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VerificationTokenArgs = {
  _set?: InputMaybe<VerificationToken_Set_Input>;
  where: VerificationToken_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_VerificationToken_By_PkArgs = {
  _set?: InputMaybe<VerificationToken_Set_Input>;
  pk_columns: VerificationToken_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VerificationToken_ManyArgs = {
  updates: Array<VerificationToken_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  /** fetch data from the table: "Account" */
  Account: Array<Account>;
  /** fetch aggregated fields from the table: "Account" */
  Account_aggregate: Account_Aggregate;
  /** fetch data from the table: "Account" using primary key columns */
  Account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "Game" */
  Game: Array<Game>;
  /** fetch aggregated fields from the table: "Game" */
  Game_aggregate: Game_Aggregate;
  /** fetch data from the table: "Game" using primary key columns */
  Game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "PasswordResetToken" */
  PasswordResetToken: Array<PasswordResetToken>;
  /** fetch aggregated fields from the table: "PasswordResetToken" */
  PasswordResetToken_aggregate: PasswordResetToken_Aggregate;
  /** fetch data from the table: "PasswordResetToken" using primary key columns */
  PasswordResetToken_by_pk?: Maybe<PasswordResetToken>;
  /** fetch data from the table: "Review" */
  Review: Array<Review>;
  /** fetch aggregated fields from the table: "Review" */
  Review_aggregate: Review_Aggregate;
  /** fetch data from the table: "Review" using primary key columns */
  Review_by_pk?: Maybe<Review>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "VerificationToken" */
  VerificationToken: Array<VerificationToken>;
  /** fetch aggregated fields from the table: "VerificationToken" */
  VerificationToken_aggregate: VerificationToken_Aggregate;
  /** fetch data from the table: "VerificationToken" using primary key columns */
  VerificationToken_by_pk?: Maybe<VerificationToken>;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPasswordResetTokenArgs = {
  distinct_on?: InputMaybe<Array<PasswordResetToken_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PasswordResetToken_Order_By>>;
  where?: InputMaybe<PasswordResetToken_Bool_Exp>;
};


export type Query_RootPasswordResetToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PasswordResetToken_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PasswordResetToken_Order_By>>;
  where?: InputMaybe<PasswordResetToken_Bool_Exp>;
};


export type Query_RootPasswordResetToken_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Query_RootReview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Query_RootReview_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootVerificationTokenArgs = {
  distinct_on?: InputMaybe<Array<VerificationToken_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VerificationToken_Order_By>>;
  where?: InputMaybe<VerificationToken_Bool_Exp>;
};


export type Query_RootVerificationToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VerificationToken_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VerificationToken_Order_By>>;
  where?: InputMaybe<VerificationToken_Bool_Exp>;
};


export type Query_RootVerificationToken_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Subscription_Root = {
  /** fetch data from the table: "Account" */
  Account: Array<Account>;
  /** fetch aggregated fields from the table: "Account" */
  Account_aggregate: Account_Aggregate;
  /** fetch data from the table: "Account" using primary key columns */
  Account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "Account" */
  Account_stream: Array<Account>;
  /** fetch data from the table: "Game" */
  Game: Array<Game>;
  /** fetch aggregated fields from the table: "Game" */
  Game_aggregate: Game_Aggregate;
  /** fetch data from the table: "Game" using primary key columns */
  Game_by_pk?: Maybe<Game>;
  /** fetch data from the table in a streaming manner: "Game" */
  Game_stream: Array<Game>;
  /** fetch data from the table: "PasswordResetToken" */
  PasswordResetToken: Array<PasswordResetToken>;
  /** fetch aggregated fields from the table: "PasswordResetToken" */
  PasswordResetToken_aggregate: PasswordResetToken_Aggregate;
  /** fetch data from the table: "PasswordResetToken" using primary key columns */
  PasswordResetToken_by_pk?: Maybe<PasswordResetToken>;
  /** fetch data from the table in a streaming manner: "PasswordResetToken" */
  PasswordResetToken_stream: Array<PasswordResetToken>;
  /** fetch data from the table: "Review" */
  Review: Array<Review>;
  /** fetch aggregated fields from the table: "Review" */
  Review_aggregate: Review_Aggregate;
  /** fetch data from the table: "Review" using primary key columns */
  Review_by_pk?: Maybe<Review>;
  /** fetch data from the table in a streaming manner: "Review" */
  Review_stream: Array<Review>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
  /** fetch data from the table: "VerificationToken" */
  VerificationToken: Array<VerificationToken>;
  /** fetch aggregated fields from the table: "VerificationToken" */
  VerificationToken_aggregate: VerificationToken_Aggregate;
  /** fetch data from the table: "VerificationToken" using primary key columns */
  VerificationToken_by_pk?: Maybe<VerificationToken>;
  /** fetch data from the table in a streaming manner: "VerificationToken" */
  VerificationToken_stream: Array<VerificationToken>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGame_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootPasswordResetTokenArgs = {
  distinct_on?: InputMaybe<Array<PasswordResetToken_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PasswordResetToken_Order_By>>;
  where?: InputMaybe<PasswordResetToken_Bool_Exp>;
};


export type Subscription_RootPasswordResetToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PasswordResetToken_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PasswordResetToken_Order_By>>;
  where?: InputMaybe<PasswordResetToken_Bool_Exp>;
};


export type Subscription_RootPasswordResetToken_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootPasswordResetToken_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PasswordResetToken_Stream_Cursor_Input>>;
  where?: InputMaybe<PasswordResetToken_Bool_Exp>;
};


export type Subscription_RootReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Subscription_RootReview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Subscription_RootReview_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootReview_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Review_Stream_Cursor_Input>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootVerificationTokenArgs = {
  distinct_on?: InputMaybe<Array<VerificationToken_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VerificationToken_Order_By>>;
  where?: InputMaybe<VerificationToken_Bool_Exp>;
};


export type Subscription_RootVerificationToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VerificationToken_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<VerificationToken_Order_By>>;
  where?: InputMaybe<VerificationToken_Bool_Exp>;
};


export type Subscription_RootVerificationToken_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootVerificationToken_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VerificationToken_Stream_Cursor_Input>>;
  where?: InputMaybe<VerificationToken_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

export type GetAllGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGamesQuery = { Game: Array<{ id: number, title: string, description?: string | null, releaseDate?: any | null, developer?: string | null, publisher?: string | null, genre?: string | null, image?: string | null, platform: Array<string>, Reviews: Array<{ id: number, rating: any }> }> };

export type GetGameQueryVariables = Exact<{
  gameId: Scalars['Int']['input'];
}>;


export type GetGameQuery = { Game_by_pk?: { id: number, title: string, description?: string | null, releaseDate?: any | null, developer?: string | null, publisher?: string | null, genre?: string | null, platform: Array<string>, image?: string | null, Reviews: Array<{ id: number, rating: any }> } | null };

export type CreateGameMutationVariables = Exact<{
  input: Game_Insert_Input;
}>;


export type CreateGameMutation = { insert_Game_one?: { id: number, title: string, description?: string | null, releaseDate?: any | null, developer?: string | null, image?: string | null, publisher?: string | null, genre?: string | null, platform: Array<string>, Reviews: Array<{ id: number, rating: any }> } | null };

export type UpdateGameMutationVariables = Exact<{
  gameId: Game_Pk_Columns_Input;
  input: Game_Set_Input;
}>;


export type UpdateGameMutation = { update_Game_by_pk?: { id: number, title: string, description?: string | null, releaseDate?: any | null, developer?: string | null, publisher?: string | null, image?: string | null, genre?: string | null, platform: Array<string> } | null };

export type DeleteGameMutationVariables = Exact<{
  gameId: Scalars['Int']['input'];
}>;


export type DeleteGameMutation = { delete_Game_by_pk?: { id: number, title: string } | null };

export type CreateReviewMutationVariables = Exact<{
  input: Review_Insert_Input;
}>;


export type CreateReviewMutation = { insert_Review_one?: { id: number, rating: any, reviewText?: string | null, reviewDate: any, User: { id: string, name?: string | null, image?: string | null }, Game: { id: number, title: string } } | null };

export type UpdateReviewMutationVariables = Exact<{
  reviewId: Review_Pk_Columns_Input;
  input: Review_Set_Input;
}>;


export type UpdateReviewMutation = { update_Review_by_pk?: { id: number, rating: any, reviewText?: string | null, reviewDate: any, User: { id: string, name?: string | null, image?: string | null }, Game: { id: number, title: string } } | null };

export type DeleteReviewMutationVariables = Exact<{
  reviewId: Scalars['Int']['input'];
}>;


export type DeleteReviewMutation = { delete_Review_by_pk?: { id: number, rating: any, reviewText?: string | null } | null };

export type GetAllReviewsByUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetAllReviewsByUserQuery = { Review: Array<{ id: number, rating: any, reviewText?: string | null, reviewDate: any, User: { image?: string | null, id: string, name?: string | null }, Game: { id: number, title: string } }> };

export type GetAllReviewsForGameQueryVariables = Exact<{
  gameId: Scalars['Int']['input'];
}>;


export type GetAllReviewsForGameQuery = { Review: Array<{ id: number, rating: any, reviewText?: string | null, reviewDate: any, User: { id: string, name?: string | null, image?: string | null }, Game: { id: number, title: string } }> };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetUserQuery = { User_by_pk?: { id: string, email?: string | null, name?: string | null, emailVerified?: any | null, image?: string | null, role?: any | null, Reviews: Array<{ id: number, rating: any, reviewText?: string | null, reviewDate: any }> } | null };

export type UpdateUserMutationVariables = Exact<{
  userId: User_Pk_Columns_Input;
  input: User_Set_Input;
}>;


export type UpdateUserMutation = { update_User_by_pk?: { id: string, email?: string | null, name?: string | null, role?: any | null } | null };

export type GetUserRoleQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetUserRoleQuery = { User_by_pk?: { role?: any | null } | null };


export const GetAllGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllGames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"developer"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"Reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllGamesQuery, GetAllGamesQueryVariables>;
export const GetGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Game_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"developer"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"Reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]} as unknown as DocumentNode<GetGameQuery, GetGameQueryVariables>;
export const CreateGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Game_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Game_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"developer"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"Reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]} as unknown as DocumentNode<CreateGameMutation, CreateGameMutationVariables>;
export const UpdateGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Game_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Game_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Game_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"developer"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}}]}}]}}]} as unknown as DocumentNode<UpdateGameMutation, UpdateGameMutationVariables>;
export const DeleteGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Game_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<DeleteGameMutation, DeleteGameMutationVariables>;
export const CreateReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Review_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_Review_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewText"}},{"kind":"Field","name":{"kind":"Name","value":"reviewDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CreateReviewMutation, CreateReviewMutationVariables>;
export const UpdateReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Review_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Review_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_Review_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewText"}},{"kind":"Field","name":{"kind":"Name","value":"reviewDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const DeleteReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_Review_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewText"}}]}}]}}]} as unknown as DocumentNode<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const GetAllReviewsByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllReviewsByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Review"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewText"}},{"kind":"Field","name":{"kind":"Name","value":"reviewDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllReviewsByUserQuery, GetAllReviewsByUserQueryVariables>;
export const GetAllReviewsForGameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllReviewsForGame"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Review"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gameId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewText"}},{"kind":"Field","name":{"kind":"Name","value":"reviewDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllReviewsForGameQuery, GetAllReviewsForGameQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"Reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"reviewText"}},{"kind":"Field","name":{"kind":"Name","value":"reviewDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_User_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetUserRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<GetUserRoleQuery, GetUserRoleQueryVariables>;