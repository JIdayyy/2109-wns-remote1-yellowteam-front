import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateBug = {
  __typename?: 'AggregateBug';
  _count: Maybe<BugCountAggregate>;
  _max: Maybe<BugMaxAggregate>;
  _min: Maybe<BugMinAggregate>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _count: Maybe<CategoryCountAggregate>;
  _max: Maybe<CategoryMaxAggregate>;
  _min: Maybe<CategoryMinAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg: Maybe<FileAvgAggregate>;
  _count: Maybe<FileCountAggregate>;
  _max: Maybe<FileMaxAggregate>;
  _min: Maybe<FileMinAggregate>;
  _sum: Maybe<FileSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
};

export type AggregateWebsite = {
  __typename?: 'AggregateWebsite';
  _count: Maybe<WebsiteCountAggregate>;
  _max: Maybe<WebsiteMaxAggregate>;
  _min: Maybe<WebsiteMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Bug = {
  __typename?: 'Bug';
  Category: Maybe<Category>;
  File: Array<File>;
  Website: Website;
  _count: Maybe<BugCount>;
  categoryId: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  priority: BugPriority;
  severity: BugSeverity;
  status: BugStatus;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  websiteId: Scalars['String'];
};


export type BugFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};

export type BugCount = {
  __typename?: 'BugCount';
  File: Scalars['Int'];
};

export type BugCountAggregate = {
  __typename?: 'BugCountAggregate';
  _all: Scalars['Int'];
  categoryId: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  priority: Scalars['Int'];
  severity: Scalars['Int'];
  status: Scalars['Int'];
  title: Scalars['Int'];
  updated_at: Scalars['Int'];
  userId: Scalars['Int'];
  websiteId: Scalars['Int'];
};

export type BugCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type BugCreateInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  File?: InputMaybe<FileCreateNestedManyWithoutBugInput>;
  Website: WebsiteCreateNestedOneWithoutBugInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
};

export type BugCreateManyCategoryInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  websiteId: Scalars['String'];
};

export type BugCreateManyCategoryInputEnvelope = {
  data: Array<BugCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BugCreateManyInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  websiteId: Scalars['String'];
};

export type BugCreateManyUserInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  websiteId: Scalars['String'];
};

export type BugCreateManyUserInputEnvelope = {
  data: Array<BugCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BugCreateManyWebsiteInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BugCreateManyWebsiteInputEnvelope = {
  data: Array<BugCreateManyWebsiteInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BugCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<BugWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BugCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<BugCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<BugCreateManyCategoryInputEnvelope>;
};

export type BugCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BugWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BugCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BugCreateWithoutUserInput>>;
  createMany?: InputMaybe<BugCreateManyUserInputEnvelope>;
};

export type BugCreateNestedManyWithoutWebsiteInput = {
  connect?: InputMaybe<Array<BugWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BugCreateOrConnectWithoutWebsiteInput>>;
  create?: InputMaybe<Array<BugCreateWithoutWebsiteInput>>;
  createMany?: InputMaybe<BugCreateManyWebsiteInputEnvelope>;
};

export type BugCreateNestedOneWithoutFileInput = {
  connect?: InputMaybe<BugWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BugCreateOrConnectWithoutFileInput>;
  create?: InputMaybe<BugCreateWithoutFileInput>;
};

export type BugCreateOrConnectWithoutCategoryInput = {
  create: BugCreateWithoutCategoryInput;
  where: BugWhereUniqueInput;
};

export type BugCreateOrConnectWithoutFileInput = {
  create: BugCreateWithoutFileInput;
  where: BugWhereUniqueInput;
};

export type BugCreateOrConnectWithoutUserInput = {
  create: BugCreateWithoutUserInput;
  where: BugWhereUniqueInput;
};

export type BugCreateOrConnectWithoutWebsiteInput = {
  create: BugCreateWithoutWebsiteInput;
  where: BugWhereUniqueInput;
};

export type BugCreateWithoutCategoryInput = {
  File?: InputMaybe<FileCreateNestedManyWithoutBugInput>;
  Website: WebsiteCreateNestedOneWithoutBugInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
};

export type BugCreateWithoutFileInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  Website: WebsiteCreateNestedOneWithoutBugInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
};

export type BugCreateWithoutUserInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  File?: InputMaybe<FileCreateNestedManyWithoutBugInput>;
  Website: WebsiteCreateNestedOneWithoutBugInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type BugCreateWithoutWebsiteInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  File?: InputMaybe<FileCreateNestedManyWithoutBugInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
};

export type BugGroupBy = {
  __typename?: 'BugGroupBy';
  _count: Maybe<BugCountAggregate>;
  _max: Maybe<BugMaxAggregate>;
  _min: Maybe<BugMinAggregate>;
  categoryId: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  priority: BugPriority;
  severity: BugSeverity;
  status: BugStatus;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
  websiteId: Scalars['String'];
};

export type BugListRelationFilter = {
  every?: InputMaybe<BugWhereInput>;
  none?: InputMaybe<BugWhereInput>;
  some?: InputMaybe<BugWhereInput>;
};

export type BugMaxAggregate = {
  __typename?: 'BugMaxAggregate';
  categoryId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  priority: Maybe<BugPriority>;
  severity: Maybe<BugSeverity>;
  status: Maybe<BugStatus>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  websiteId: Maybe<Scalars['String']>;
};

export type BugMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type BugMinAggregate = {
  __typename?: 'BugMinAggregate';
  categoryId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  priority: Maybe<BugPriority>;
  severity: Maybe<BugSeverity>;
  status: Maybe<BugStatus>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  websiteId: Maybe<Scalars['String']>;
};

export type BugMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type BugOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BugOrderByWithAggregationInput = {
  _count?: InputMaybe<BugCountOrderByAggregateInput>;
  _max?: InputMaybe<BugMaxOrderByAggregateInput>;
  _min?: InputMaybe<BugMinOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type BugOrderByWithRelationInput = {
  Category?: InputMaybe<CategoryOrderByWithRelationInput>;
  File?: InputMaybe<FileOrderByRelationAggregateInput>;
  Website?: InputMaybe<WebsiteOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export enum BugPriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type BugRelationFilter = {
  is?: InputMaybe<BugWhereInput>;
  isNot?: InputMaybe<BugWhereInput>;
};

export enum BugScalarFieldEnum {
  CategoryId = 'categoryId',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Priority = 'priority',
  Severity = 'severity',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updated_at',
  UserId = 'userId',
  WebsiteId = 'websiteId'
}

export type BugScalarWhereInput = {
  AND?: InputMaybe<Array<BugScalarWhereInput>>;
  NOT?: InputMaybe<Array<BugScalarWhereInput>>;
  OR?: InputMaybe<Array<BugScalarWhereInput>>;
  categoryId?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  priority?: InputMaybe<EnumBugPriorityFilter>;
  severity?: InputMaybe<EnumBugSeverityFilter>;
  status?: InputMaybe<EnumBugStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  websiteId?: InputMaybe<StringFilter>;
};

export type BugScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BugScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BugScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BugScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  priority?: InputMaybe<EnumBugPriorityWithAggregatesFilter>;
  severity?: InputMaybe<EnumBugSeverityWithAggregatesFilter>;
  status?: InputMaybe<EnumBugStatusWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  websiteId?: InputMaybe<StringWithAggregatesFilter>;
};

export enum BugSeverity {
  Critical = 'CRITICAL',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export enum BugStatus {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
}

export type BugUpdateInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  File?: InputMaybe<FileUpdateManyWithoutBugInput>;
  Website?: InputMaybe<WebsiteUpdateOneRequiredWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
};

export type BugUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BugUpdateManyWithWhereWithoutCategoryInput = {
  data: BugUpdateManyMutationInput;
  where: BugScalarWhereInput;
};

export type BugUpdateManyWithWhereWithoutUserInput = {
  data: BugUpdateManyMutationInput;
  where: BugScalarWhereInput;
};

export type BugUpdateManyWithWhereWithoutWebsiteInput = {
  data: BugUpdateManyMutationInput;
  where: BugScalarWhereInput;
};

export type BugUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<BugWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BugCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<BugCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<BugCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<BugWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BugScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BugWhereUniqueInput>>;
  set?: InputMaybe<Array<BugWhereUniqueInput>>;
  update?: InputMaybe<Array<BugUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<BugUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<BugUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type BugUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<BugWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BugCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BugCreateWithoutUserInput>>;
  createMany?: InputMaybe<BugCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BugWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BugScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BugWhereUniqueInput>>;
  set?: InputMaybe<Array<BugWhereUniqueInput>>;
  update?: InputMaybe<Array<BugUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BugUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BugUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BugUpdateManyWithoutWebsiteInput = {
  connect?: InputMaybe<Array<BugWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BugCreateOrConnectWithoutWebsiteInput>>;
  create?: InputMaybe<Array<BugCreateWithoutWebsiteInput>>;
  createMany?: InputMaybe<BugCreateManyWebsiteInputEnvelope>;
  delete?: InputMaybe<Array<BugWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BugScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BugWhereUniqueInput>>;
  set?: InputMaybe<Array<BugWhereUniqueInput>>;
  update?: InputMaybe<Array<BugUpdateWithWhereUniqueWithoutWebsiteInput>>;
  updateMany?: InputMaybe<Array<BugUpdateManyWithWhereWithoutWebsiteInput>>;
  upsert?: InputMaybe<Array<BugUpsertWithWhereUniqueWithoutWebsiteInput>>;
};

export type BugUpdateOneRequiredWithoutFileInput = {
  connect?: InputMaybe<BugWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BugCreateOrConnectWithoutFileInput>;
  create?: InputMaybe<BugCreateWithoutFileInput>;
  update?: InputMaybe<BugUpdateWithoutFileInput>;
  upsert?: InputMaybe<BugUpsertWithoutFileInput>;
};

export type BugUpdateWithWhereUniqueWithoutCategoryInput = {
  data: BugUpdateWithoutCategoryInput;
  where: BugWhereUniqueInput;
};

export type BugUpdateWithWhereUniqueWithoutUserInput = {
  data: BugUpdateWithoutUserInput;
  where: BugWhereUniqueInput;
};

export type BugUpdateWithWhereUniqueWithoutWebsiteInput = {
  data: BugUpdateWithoutWebsiteInput;
  where: BugWhereUniqueInput;
};

export type BugUpdateWithoutCategoryInput = {
  File?: InputMaybe<FileUpdateManyWithoutBugInput>;
  Website?: InputMaybe<WebsiteUpdateOneRequiredWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
};

export type BugUpdateWithoutFileInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  Website?: InputMaybe<WebsiteUpdateOneRequiredWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
};

export type BugUpdateWithoutUserInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  File?: InputMaybe<FileUpdateManyWithoutBugInput>;
  Website?: InputMaybe<WebsiteUpdateOneRequiredWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BugUpdateWithoutWebsiteInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  File?: InputMaybe<FileUpdateManyWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
};

export type BugUpsertWithWhereUniqueWithoutCategoryInput = {
  create: BugCreateWithoutCategoryInput;
  update: BugUpdateWithoutCategoryInput;
  where: BugWhereUniqueInput;
};

export type BugUpsertWithWhereUniqueWithoutUserInput = {
  create: BugCreateWithoutUserInput;
  update: BugUpdateWithoutUserInput;
  where: BugWhereUniqueInput;
};

export type BugUpsertWithWhereUniqueWithoutWebsiteInput = {
  create: BugCreateWithoutWebsiteInput;
  update: BugUpdateWithoutWebsiteInput;
  where: BugWhereUniqueInput;
};

export type BugUpsertWithoutFileInput = {
  create: BugCreateWithoutFileInput;
  update: BugUpdateWithoutFileInput;
};

export type BugWhereInput = {
  AND?: InputMaybe<Array<BugWhereInput>>;
  Category?: InputMaybe<CategoryRelationFilter>;
  File?: InputMaybe<FileListRelationFilter>;
  NOT?: InputMaybe<Array<BugWhereInput>>;
  OR?: InputMaybe<Array<BugWhereInput>>;
  Website?: InputMaybe<WebsiteRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  priority?: InputMaybe<EnumBugPriorityFilter>;
  severity?: InputMaybe<EnumBugSeverityFilter>;
  status?: InputMaybe<EnumBugStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  websiteId?: InputMaybe<StringFilter>;
};

export type BugWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  Bug: Array<Bug>;
  _count: Maybe<CategoryCount>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type CategoryBugArgs = {
  cursor: InputMaybe<BugWhereUniqueInput>;
  distinct: InputMaybe<Array<BugScalarFieldEnum>>;
  orderBy: InputMaybe<Array<BugOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<BugWhereInput>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  Bug: Scalars['Int'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutCategoryInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateNestedOneWithoutBugInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutBugInput>;
  create?: InputMaybe<CategoryCreateWithoutBugInput>;
};

export type CategoryCreateOrConnectWithoutBugInput = {
  create: CategoryCreateWithoutBugInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutBugInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _count: Maybe<CategoryCountAggregate>;
  _max: Maybe<CategoryMaxAggregate>;
  _min: Maybe<CategoryMinAggregate>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type CategoryMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type CategoryMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  Bug?: InputMaybe<BugOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  IsDisabled = 'is_disabled',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategoryUpdateInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutCategoryInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneWithoutBugInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutBugInput>;
  create?: InputMaybe<CategoryCreateWithoutBugInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutBugInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutBugInput>;
};

export type CategoryUpdateWithoutBugInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutBugInput = {
  create: CategoryCreateWithoutBugInput;
  update: CategoryUpdateWithoutBugInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  Bug?: InputMaybe<BugListRelationFilter>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumBugPriorityFieldUpdateOperationsInput = {
  set?: InputMaybe<BugPriority>;
};

export type EnumBugPriorityFilter = {
  equals?: InputMaybe<BugPriority>;
  in?: InputMaybe<Array<BugPriority>>;
  not?: InputMaybe<NestedEnumBugPriorityFilter>;
  notIn?: InputMaybe<Array<BugPriority>>;
};

export type EnumBugPriorityWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBugPriorityFilter>;
  _min?: InputMaybe<NestedEnumBugPriorityFilter>;
  equals?: InputMaybe<BugPriority>;
  in?: InputMaybe<Array<BugPriority>>;
  not?: InputMaybe<NestedEnumBugPriorityWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BugPriority>>;
};

export type EnumBugSeverityFieldUpdateOperationsInput = {
  set?: InputMaybe<BugSeverity>;
};

export type EnumBugSeverityFilter = {
  equals?: InputMaybe<BugSeverity>;
  in?: InputMaybe<Array<BugSeverity>>;
  not?: InputMaybe<NestedEnumBugSeverityFilter>;
  notIn?: InputMaybe<Array<BugSeverity>>;
};

export type EnumBugSeverityWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBugSeverityFilter>;
  _min?: InputMaybe<NestedEnumBugSeverityFilter>;
  equals?: InputMaybe<BugSeverity>;
  in?: InputMaybe<Array<BugSeverity>>;
  not?: InputMaybe<NestedEnumBugSeverityWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BugSeverity>>;
};

export type EnumBugStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<BugStatus>;
};

export type EnumBugStatusFilter = {
  equals?: InputMaybe<BugStatus>;
  in?: InputMaybe<Array<BugStatus>>;
  not?: InputMaybe<NestedEnumBugStatusFilter>;
  notIn?: InputMaybe<Array<BugStatus>>;
};

export type EnumBugStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBugStatusFilter>;
  _min?: InputMaybe<NestedEnumBugStatusFilter>;
  equals?: InputMaybe<BugStatus>;
  in?: InputMaybe<Array<BugStatus>>;
  not?: InputMaybe<NestedEnumBugStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BugStatus>>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type File = {
  __typename?: 'File';
  bug: Bug;
  bugId: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user: User;
  user_id: Scalars['String'];
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  size: Maybe<Scalars['Float']>;
};

export type FileAvgOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int'];
  bugId: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  name: Scalars['Int'];
  path: Scalars['Int'];
  size: Scalars['Int'];
  type: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type FileCountOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  bug: BugCreateNestedOneWithoutFileInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutFilesInput;
};

export type FileCreateManyBugInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type FileCreateManyBugInputEnvelope = {
  data: Array<FileCreateManyBugInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateManyInput = {
  bugId: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_id: Scalars['String'];
};

export type FileCreateManyUserInput = {
  bugId: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type FileCreateManyUserInputEnvelope = {
  data: Array<FileCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateNestedManyWithoutBugInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutBugInput>>;
  create?: InputMaybe<Array<FileCreateWithoutBugInput>>;
  createMany?: InputMaybe<FileCreateManyBugInputEnvelope>;
};

export type FileCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
};

export type FileCreateOrConnectWithoutBugInput = {
  create: FileCreateWithoutBugInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutBugInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutFilesInput;
};

export type FileCreateWithoutUserInput = {
  bug: BugCreateNestedOneWithoutFileInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg: Maybe<FileAvgAggregate>;
  _count: Maybe<FileCountAggregate>;
  _max: Maybe<FileMaxAggregate>;
  _min: Maybe<FileMinAggregate>;
  _sum: Maybe<FileSumAggregate>;
  bugId: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['String'];
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  bugId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type FileMaxOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  bugId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  user_id: Maybe<Scalars['String']>;
};

export type FileMinOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  bug?: InputMaybe<BugOrderByWithRelationInput>;
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export enum FileScalarFieldEnum {
  BugId = 'bugId',
  CreatedAt = 'created_at',
  Id = 'id',
  IsDisabled = 'is_disabled',
  Name = 'name',
  Path = 'path',
  Size = 'size',
  Type = 'type',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  bugId?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  bugId?: InputMaybe<StringWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  path?: InputMaybe<StringWithAggregatesFilter>;
  size?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  user_id?: InputMaybe<StringWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  size: Maybe<Scalars['Int']>;
};

export type FileSumOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  bug?: InputMaybe<BugUpdateOneRequiredWithoutFileInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesInput>;
};

export type FileUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutBugInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithWhereWithoutUserInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutBugInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutBugInput>>;
  create?: InputMaybe<Array<FileCreateWithoutBugInput>>;
  createMany?: InputMaybe<FileCreateManyBugInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutBugInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutBugInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutBugInput>>;
};

export type FileUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FileUpdateWithWhereUniqueWithoutBugInput = {
  data: FileUpdateWithoutBugInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithWhereUniqueWithoutUserInput = {
  data: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutBugInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesInput>;
};

export type FileUpdateWithoutUserInput = {
  bug?: InputMaybe<BugUpdateOneRequiredWithoutFileInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutBugInput = {
  create: FileCreateWithoutBugInput;
  update: FileUpdateWithoutBugInput;
  where: FileWhereUniqueInput;
};

export type FileUpsertWithWhereUniqueWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  update: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  bug?: InputMaybe<BugRelationFilter>;
  bugId?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBug: Bug;
  createCategory: Category;
  createFile: File;
  createManyBug: AffectedRowsOutput;
  createManyCategory: AffectedRowsOutput;
  createManyFile: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyWebsite: AffectedRowsOutput;
  createUser: User;
  createWebsite: Website;
  deleteBug: Maybe<Bug>;
  deleteCategory: Maybe<Category>;
  deleteFile: Maybe<File>;
  deleteManyBug: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyWebsite: AffectedRowsOutput;
  deleteUser: Maybe<User>;
  deleteWebsite: Maybe<Website>;
  login: User;
  me: User;
  register: User;
  updateBug: Maybe<Bug>;
  updateCategory: Maybe<Category>;
  updateFile: Maybe<File>;
  updateManyBug: AffectedRowsOutput;
  updateManyCategory: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyWebsite: AffectedRowsOutput;
  updateUser: Maybe<User>;
  updateWebsite: Maybe<Website>;
  upsertBug: Bug;
  upsertCategory: Category;
  upsertFile: File;
  upsertUser: User;
  upsertWebsite: Website;
};


export type MutationCreateBugArgs = {
  data: BugCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateManyBugArgs = {
  data: Array<BugCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyWebsiteArgs = {
  data: Array<WebsiteCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateWebsiteArgs = {
  data: WebsiteCreateInput;
};


export type MutationDeleteBugArgs = {
  where: BugWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteManyBugArgs = {
  where: InputMaybe<BugWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyWebsiteArgs = {
  where: InputMaybe<WebsiteWhereInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteWebsiteArgs = {
  where: WebsiteWhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateBugArgs = {
  data: BugUpdateInput;
  where: BugWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateManyBugArgs = {
  data: BugUpdateManyMutationInput;
  where: InputMaybe<BugWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyWebsiteArgs = {
  data: WebsiteUpdateManyMutationInput;
  where: InputMaybe<WebsiteWhereInput>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateWebsiteArgs = {
  data: WebsiteUpdateInput;
  where: WebsiteWhereUniqueInput;
};


export type MutationUpsertBugArgs = {
  create: BugCreateInput;
  update: BugUpdateInput;
  where: BugWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertWebsiteArgs = {
  create: WebsiteCreateInput;
  update: WebsiteUpdateInput;
  where: WebsiteWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumBugPriorityFilter = {
  equals?: InputMaybe<BugPriority>;
  in?: InputMaybe<Array<BugPriority>>;
  not?: InputMaybe<NestedEnumBugPriorityFilter>;
  notIn?: InputMaybe<Array<BugPriority>>;
};

export type NestedEnumBugPriorityWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBugPriorityFilter>;
  _min?: InputMaybe<NestedEnumBugPriorityFilter>;
  equals?: InputMaybe<BugPriority>;
  in?: InputMaybe<Array<BugPriority>>;
  not?: InputMaybe<NestedEnumBugPriorityWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BugPriority>>;
};

export type NestedEnumBugSeverityFilter = {
  equals?: InputMaybe<BugSeverity>;
  in?: InputMaybe<Array<BugSeverity>>;
  not?: InputMaybe<NestedEnumBugSeverityFilter>;
  notIn?: InputMaybe<Array<BugSeverity>>;
};

export type NestedEnumBugSeverityWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBugSeverityFilter>;
  _min?: InputMaybe<NestedEnumBugSeverityFilter>;
  equals?: InputMaybe<BugSeverity>;
  in?: InputMaybe<Array<BugSeverity>>;
  not?: InputMaybe<NestedEnumBugSeverityWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BugSeverity>>;
};

export type NestedEnumBugStatusFilter = {
  equals?: InputMaybe<BugStatus>;
  in?: InputMaybe<Array<BugStatus>>;
  not?: InputMaybe<NestedEnumBugStatusFilter>;
  notIn?: InputMaybe<Array<BugStatus>>;
};

export type NestedEnumBugStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBugStatusFilter>;
  _min?: InputMaybe<NestedEnumBugStatusFilter>;
  equals?: InputMaybe<BugStatus>;
  in?: InputMaybe<Array<BugStatus>>;
  not?: InputMaybe<NestedEnumBugStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BugStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBug: AggregateBug;
  aggregateCategory: AggregateCategory;
  aggregateFile: AggregateFile;
  aggregateUser: AggregateUser;
  aggregateWebsite: AggregateWebsite;
  bug: Maybe<Bug>;
  bugs: Array<Bug>;
  categories: Array<Category>;
  category: Maybe<Category>;
  file: Maybe<File>;
  files: Array<File>;
  findFirstBug: Maybe<Bug>;
  findFirstCategory: Maybe<Category>;
  findFirstFile: Maybe<File>;
  findFirstUser: Maybe<User>;
  findFirstWebsite: Maybe<Website>;
  groupByBug: Array<BugGroupBy>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByWebsite: Array<WebsiteGroupBy>;
  user: Maybe<User>;
  users: Array<User>;
  website: Maybe<Website>;
  websites: Array<Website>;
};


export type QueryAggregateBugArgs = {
  cursor: InputMaybe<BugWhereUniqueInput>;
  orderBy: InputMaybe<Array<BugOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<BugWhereInput>;
};


export type QueryAggregateCategoryArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryAggregateWebsiteArgs = {
  cursor: InputMaybe<WebsiteWhereUniqueInput>;
  orderBy: InputMaybe<Array<WebsiteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WebsiteWhereInput>;
};


export type QueryBugArgs = {
  where: BugWhereUniqueInput;
};


export type QueryBugsArgs = {
  cursor: InputMaybe<BugWhereUniqueInput>;
  distinct: InputMaybe<Array<BugScalarFieldEnum>>;
  orderBy: InputMaybe<Array<BugOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<BugWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstBugArgs = {
  cursor: InputMaybe<BugWhereUniqueInput>;
  distinct: InputMaybe<Array<BugScalarFieldEnum>>;
  orderBy: InputMaybe<Array<BugOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<BugWhereInput>;
};


export type QueryFindFirstCategoryArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstWebsiteArgs = {
  cursor: InputMaybe<WebsiteWhereUniqueInput>;
  distinct: InputMaybe<Array<WebsiteScalarFieldEnum>>;
  orderBy: InputMaybe<Array<WebsiteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WebsiteWhereInput>;
};


export type QueryGroupByBugArgs = {
  by: Array<BugScalarFieldEnum>;
  having: InputMaybe<BugScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<BugOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<BugWhereInput>;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryGroupByWebsiteArgs = {
  by: Array<WebsiteScalarFieldEnum>;
  having: InputMaybe<WebsiteScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<WebsiteOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WebsiteWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryWebsiteArgs = {
  where: WebsiteWhereUniqueInput;
};


export type QueryWebsitesArgs = {
  cursor: InputMaybe<WebsiteWhereUniqueInput>;
  distinct: InputMaybe<Array<WebsiteScalarFieldEnum>>;
  orderBy: InputMaybe<Array<WebsiteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WebsiteWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Bug: Array<Bug>;
  _count: Maybe<UserCount>;
  avatar: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  files: Array<File>;
  first_name: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role: Array<Role>;
  updated_at: Scalars['DateTime'];
};


export type UserBugArgs = {
  cursor: InputMaybe<BugWhereUniqueInput>;
  distinct: InputMaybe<Array<BugScalarFieldEnum>>;
  orderBy: InputMaybe<Array<BugOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<BugWhereInput>;
};


export type UserFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Bug: Scalars['Int'];
  files: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatar: Scalars['Int'];
  created_at: Scalars['Int'];
  email: Scalars['Int'];
  first_name: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  last_name: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<UserCreateManyroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyroleInput = {
  set: Array<Role>;
};

export type UserCreateNestedOneWithoutBugInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBugInput>;
  create?: InputMaybe<UserCreateWithoutBugInput>;
};

export type UserCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UserCreateOrConnectWithoutBugInput = {
  create: UserCreateWithoutBugInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBugInput = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutFilesInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateroleInput = {
  set: Array<Role>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
  avatar: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  role: Maybe<Array<Role>>;
  updated_at: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  last_name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  last_name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Bug?: InputMaybe<BugOrderByRelationAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Avatar = 'avatar',
  CreatedAt = 'created_at',
  Email = 'email',
  FirstName = 'first_name',
  Id = 'id',
  IsDisabled = 'is_disabled',
  LastName = 'last_name',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updated_at'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avatar?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutBugInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBugInput>;
  create?: InputMaybe<UserCreateWithoutBugInput>;
  update?: InputMaybe<UserUpdateWithoutBugInput>;
  upsert?: InputMaybe<UserUpsertWithoutBugInput>;
};

export type UserUpdateOneRequiredWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
  update?: InputMaybe<UserUpdateWithoutFilesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFilesInput>;
};

export type UserUpdateWithoutBugInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFilesInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateroleInput = {
  push?: InputMaybe<Array<Role>>;
  set?: InputMaybe<Array<Role>>;
};

export type UserUpsertWithoutBugInput = {
  create: UserCreateWithoutBugInput;
  update: UserUpdateWithoutBugInput;
};

export type UserUpsertWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  update: UserUpdateWithoutFilesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Bug?: InputMaybe<BugListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type Website = {
  __typename?: 'Website';
  Bug: Array<Bug>;
  _count: Maybe<WebsiteCount>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  isPreview: Scalars['Boolean'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
};


export type WebsiteBugArgs = {
  cursor: InputMaybe<BugWhereUniqueInput>;
  distinct: InputMaybe<Array<BugScalarFieldEnum>>;
  orderBy: InputMaybe<Array<BugOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<BugWhereInput>;
};

export type WebsiteCount = {
  __typename?: 'WebsiteCount';
  Bug: Scalars['Int'];
};

export type WebsiteCountAggregate = {
  __typename?: 'WebsiteCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  isPreview: Scalars['Int'];
  logo: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
  url: Scalars['Int'];
};

export type WebsiteCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPreview?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type WebsiteCreateInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutWebsiteInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isPreview: Scalars['Boolean'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type WebsiteCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isPreview: Scalars['Boolean'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type WebsiteCreateNestedOneWithoutBugInput = {
  connect?: InputMaybe<WebsiteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WebsiteCreateOrConnectWithoutBugInput>;
  create?: InputMaybe<WebsiteCreateWithoutBugInput>;
};

export type WebsiteCreateOrConnectWithoutBugInput = {
  create: WebsiteCreateWithoutBugInput;
  where: WebsiteWhereUniqueInput;
};

export type WebsiteCreateWithoutBugInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isPreview: Scalars['Boolean'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type WebsiteGroupBy = {
  __typename?: 'WebsiteGroupBy';
  _count: Maybe<WebsiteCountAggregate>;
  _max: Maybe<WebsiteMaxAggregate>;
  _min: Maybe<WebsiteMinAggregate>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  isPreview: Scalars['Boolean'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
};

export type WebsiteMaxAggregate = {
  __typename?: 'WebsiteMaxAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  isPreview: Maybe<Scalars['Boolean']>;
  logo: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  url: Maybe<Scalars['String']>;
};

export type WebsiteMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPreview?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type WebsiteMinAggregate = {
  __typename?: 'WebsiteMinAggregate';
  created_at: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  isPreview: Maybe<Scalars['Boolean']>;
  logo: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  url: Maybe<Scalars['String']>;
};

export type WebsiteMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPreview?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type WebsiteOrderByWithAggregationInput = {
  _count?: InputMaybe<WebsiteCountOrderByAggregateInput>;
  _max?: InputMaybe<WebsiteMaxOrderByAggregateInput>;
  _min?: InputMaybe<WebsiteMinOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPreview?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type WebsiteOrderByWithRelationInput = {
  Bug?: InputMaybe<BugOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isPreview?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type WebsiteRelationFilter = {
  is?: InputMaybe<WebsiteWhereInput>;
  isNot?: InputMaybe<WebsiteWhereInput>;
};

export enum WebsiteScalarFieldEnum {
  CreatedAt = 'created_at',
  Id = 'id',
  IsPreview = 'isPreview',
  Logo = 'logo',
  Name = 'name',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type WebsiteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<WebsiteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<WebsiteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<WebsiteScalarWhereWithAggregatesInput>>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isPreview?: InputMaybe<BoolWithAggregatesFilter>;
  logo?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
};

export type WebsiteUpdateInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutWebsiteInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPreview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type WebsiteUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPreview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type WebsiteUpdateOneRequiredWithoutBugInput = {
  connect?: InputMaybe<WebsiteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WebsiteCreateOrConnectWithoutBugInput>;
  create?: InputMaybe<WebsiteCreateWithoutBugInput>;
  update?: InputMaybe<WebsiteUpdateWithoutBugInput>;
  upsert?: InputMaybe<WebsiteUpsertWithoutBugInput>;
};

export type WebsiteUpdateWithoutBugInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPreview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type WebsiteUpsertWithoutBugInput = {
  create: WebsiteCreateWithoutBugInput;
  update: WebsiteUpdateWithoutBugInput;
};

export type WebsiteWhereInput = {
  AND?: InputMaybe<Array<WebsiteWhereInput>>;
  Bug?: InputMaybe<BugListRelationFilter>;
  NOT?: InputMaybe<Array<WebsiteWhereInput>>;
  OR?: InputMaybe<Array<WebsiteWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isPreview?: InputMaybe<BoolFilter>;
  logo?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type WebsiteWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type UserFragment = { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> };

export type CreateBugMutationVariables = Exact<{
  data: BugCreateInput;
}>;


export type CreateBugMutation = { __typename?: 'Mutation', createBug: { __typename?: 'Bug', id: string } };

export type MutateLoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type MutateLoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> } };

export type MutateMeMutationVariables = Exact<{ [key: string]: never; }>;


export type MutateMeMutation = { __typename?: 'Mutation', me: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> } };

export type GetAllBugsByQueryVariables = Exact<{
  where: BugWhereInput;
}>;


export type GetAllBugsByQuery = { __typename?: 'Query', bugs: Array<{ __typename?: 'Bug', id: string, title: string, description: string, user: { __typename?: 'User', first_name: string, last_name: string, email: string } }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string }> };

export type GetAllWebSitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWebSitesQuery = { __typename?: 'Query', websites: Array<{ __typename?: 'Website', id: string, name: string, url: string, logo: string }> };

export const UserFragmentDoc = gql`
    fragment User on User {
  id
  first_name
  last_name
  email
  avatar
  role
}
    `;
export const CreateBugDocument = gql`
    mutation createBug($data: BugCreateInput!) {
  createBug(data: $data) {
    id
  }
}
    `;
export type CreateBugMutationFn = Apollo.MutationFunction<CreateBugMutation, CreateBugMutationVariables>;

/**
 * __useCreateBugMutation__
 *
 * To run a mutation, you first call `useCreateBugMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBugMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBugMutation, { data, loading, error }] = useCreateBugMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBugMutation(baseOptions?: Apollo.MutationHookOptions<CreateBugMutation, CreateBugMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBugMutation, CreateBugMutationVariables>(CreateBugDocument, options);
      }
export type CreateBugMutationHookResult = ReturnType<typeof useCreateBugMutation>;
export type CreateBugMutationResult = Apollo.MutationResult<CreateBugMutation>;
export type CreateBugMutationOptions = Apollo.BaseMutationOptions<CreateBugMutation, CreateBugMutationVariables>;
export const MutateLoginDocument = gql`
    mutation MutateLogin($data: LoginInput!) {
  login(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type MutateLoginMutationFn = Apollo.MutationFunction<MutateLoginMutation, MutateLoginMutationVariables>;

/**
 * __useMutateLoginMutation__
 *
 * To run a mutation, you first call `useMutateLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutateLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutateLoginMutation, { data, loading, error }] = useMutateLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useMutateLoginMutation(baseOptions?: Apollo.MutationHookOptions<MutateLoginMutation, MutateLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutateLoginMutation, MutateLoginMutationVariables>(MutateLoginDocument, options);
      }
export type MutateLoginMutationHookResult = ReturnType<typeof useMutateLoginMutation>;
export type MutateLoginMutationResult = Apollo.MutationResult<MutateLoginMutation>;
export type MutateLoginMutationOptions = Apollo.BaseMutationOptions<MutateLoginMutation, MutateLoginMutationVariables>;
export const MutateMeDocument = gql`
    mutation MutateMe {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type MutateMeMutationFn = Apollo.MutationFunction<MutateMeMutation, MutateMeMutationVariables>;

/**
 * __useMutateMeMutation__
 *
 * To run a mutation, you first call `useMutateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutateMeMutation, { data, loading, error }] = useMutateMeMutation({
 *   variables: {
 *   },
 * });
 */
export function useMutateMeMutation(baseOptions?: Apollo.MutationHookOptions<MutateMeMutation, MutateMeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutateMeMutation, MutateMeMutationVariables>(MutateMeDocument, options);
      }
export type MutateMeMutationHookResult = ReturnType<typeof useMutateMeMutation>;
export type MutateMeMutationResult = Apollo.MutationResult<MutateMeMutation>;
export type MutateMeMutationOptions = Apollo.BaseMutationOptions<MutateMeMutation, MutateMeMutationVariables>;
export const GetAllBugsByDocument = gql`
    query GetAllBugsBy($where: BugWhereInput!) {
  bugs(where: $where) {
    id
    title
    description
    user {
      first_name
      last_name
      email
    }
  }
}
    `;

/**
 * __useGetAllBugsByQuery__
 *
 * To run a query within a React component, call `useGetAllBugsByQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBugsByQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBugsByQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllBugsByQuery(baseOptions: Apollo.QueryHookOptions<GetAllBugsByQuery, GetAllBugsByQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBugsByQuery, GetAllBugsByQueryVariables>(GetAllBugsByDocument, options);
      }
export function useGetAllBugsByLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBugsByQuery, GetAllBugsByQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBugsByQuery, GetAllBugsByQueryVariables>(GetAllBugsByDocument, options);
        }
export type GetAllBugsByQueryHookResult = ReturnType<typeof useGetAllBugsByQuery>;
export type GetAllBugsByLazyQueryHookResult = ReturnType<typeof useGetAllBugsByLazyQuery>;
export type GetAllBugsByQueryResult = Apollo.QueryResult<GetAllBugsByQuery, GetAllBugsByQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users {
    id
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetAllWebSitesDocument = gql`
    query GetAllWebSites {
  websites {
    id
    name
    url
    logo
  }
}
    `;

/**
 * __useGetAllWebSitesQuery__
 *
 * To run a query within a React component, call `useGetAllWebSitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWebSitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWebSitesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllWebSitesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllWebSitesQuery, GetAllWebSitesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWebSitesQuery, GetAllWebSitesQueryVariables>(GetAllWebSitesDocument, options);
      }
export function useGetAllWebSitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWebSitesQuery, GetAllWebSitesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWebSitesQuery, GetAllWebSitesQueryVariables>(GetAllWebSitesDocument, options);
        }
export type GetAllWebSitesQueryHookResult = ReturnType<typeof useGetAllWebSitesQuery>;
export type GetAllWebSitesLazyQueryHookResult = ReturnType<typeof useGetAllWebSitesLazyQuery>;
export type GetAllWebSitesQueryResult = Apollo.QueryResult<GetAllWebSitesQuery, GetAllWebSitesQueryVariables>;