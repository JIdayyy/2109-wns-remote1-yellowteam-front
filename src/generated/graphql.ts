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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateBug = {
  __typename?: 'AggregateBug';
  _avg: Maybe<BugAvgAggregate>;
  _count: Maybe<BugCountAggregate>;
  _max: Maybe<BugMaxAggregate>;
  _min: Maybe<BugMinAggregate>;
  _sum: Maybe<BugSumAggregate>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _count: Maybe<CategoryCountAggregate>;
  _max: Maybe<CategoryMaxAggregate>;
  _min: Maybe<CategoryMinAggregate>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _count: Maybe<CommentCountAggregate>;
  _max: Maybe<CommentMaxAggregate>;
  _min: Maybe<CommentMinAggregate>;
};

export type AggregateFeature = {
  __typename?: 'AggregateFeature';
  _count: Maybe<FeatureCountAggregate>;
  _max: Maybe<FeatureMaxAggregate>;
  _min: Maybe<FeatureMinAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg: Maybe<FileAvgAggregate>;
  _count: Maybe<FileCountAggregate>;
  _max: Maybe<FileMaxAggregate>;
  _min: Maybe<FileMinAggregate>;
  _sum: Maybe<FileSumAggregate>;
};

export type AggregateNotification = {
  __typename?: 'AggregateNotification';
  _count: Maybe<NotificationCountAggregate>;
  _max: Maybe<NotificationMaxAggregate>;
  _min: Maybe<NotificationMinAggregate>;
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
  comments: Array<Comment>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  number: Scalars['Int'];
  priority: BugPriority;
  severity: BugSeverity;
  status: BugStatus;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  validation_status: ValidationStatus;
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


export type BugCommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};

export type BugAvgAggregate = {
  __typename?: 'BugAvgAggregate';
  number: Maybe<Scalars['Float']>;
};

export type BugAvgOrderByAggregateInput = {
  number?: InputMaybe<SortOrder>;
};

export type BugCount = {
  __typename?: 'BugCount';
  File: Scalars['Int'];
  comments: Scalars['Int'];
};

export type BugCountAggregate = {
  __typename?: 'BugCountAggregate';
  _all: Scalars['Int'];
  categoryId: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  number: Scalars['Int'];
  priority: Scalars['Int'];
  severity: Scalars['Int'];
  status: Scalars['Int'];
  title: Scalars['Int'];
  updated_at: Scalars['Int'];
  userId: Scalars['Int'];
  validation_status: Scalars['Int'];
  websiteId: Scalars['Int'];
};

export type BugCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  validation_status?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type BugCreateInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  File?: InputMaybe<FileCreateNestedManyWithoutBugInput>;
  Website: WebsiteCreateNestedOneWithoutBugInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutBugInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
  validation_status?: InputMaybe<ValidationStatus>;
};

export type BugCreateManyCategoryInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  validation_status?: InputMaybe<ValidationStatus>;
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
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  validation_status?: InputMaybe<ValidationStatus>;
  websiteId: Scalars['String'];
};

export type BugCreateManyUserInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  validation_status?: InputMaybe<ValidationStatus>;
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
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  validation_status?: InputMaybe<ValidationStatus>;
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

export type BugCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<BugWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BugCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<BugCreateWithoutCommentsInput>;
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

export type BugCreateOrConnectWithoutCommentsInput = {
  create: BugCreateWithoutCommentsInput;
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
  comments?: InputMaybe<CommentCreateNestedManyWithoutBugInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
  validation_status?: InputMaybe<ValidationStatus>;
};

export type BugCreateWithoutCommentsInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  File?: InputMaybe<FileCreateNestedManyWithoutBugInput>;
  Website: WebsiteCreateNestedOneWithoutBugInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
  validation_status?: InputMaybe<ValidationStatus>;
};

export type BugCreateWithoutFileInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  Website: WebsiteCreateNestedOneWithoutBugInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutBugInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
  validation_status?: InputMaybe<ValidationStatus>;
};

export type BugCreateWithoutUserInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  File?: InputMaybe<FileCreateNestedManyWithoutBugInput>;
  Website: WebsiteCreateNestedOneWithoutBugInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutBugInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  validation_status?: InputMaybe<ValidationStatus>;
};

export type BugCreateWithoutWebsiteInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutBugInput>;
  File?: InputMaybe<FileCreateNestedManyWithoutBugInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutBugInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
  priority?: InputMaybe<BugPriority>;
  severity: BugSeverity;
  status?: InputMaybe<BugStatus>;
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBugInput;
  validation_status?: InputMaybe<ValidationStatus>;
};

export type BugGroupBy = {
  __typename?: 'BugGroupBy';
  _avg: Maybe<BugAvgAggregate>;
  _count: Maybe<BugCountAggregate>;
  _max: Maybe<BugMaxAggregate>;
  _min: Maybe<BugMinAggregate>;
  _sum: Maybe<BugSumAggregate>;
  categoryId: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  number: Scalars['Int'];
  priority: BugPriority;
  severity: BugSeverity;
  status: BugStatus;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
  validation_status: ValidationStatus;
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
  number: Maybe<Scalars['Int']>;
  priority: Maybe<BugPriority>;
  severity: Maybe<BugSeverity>;
  status: Maybe<BugStatus>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  validation_status: Maybe<ValidationStatus>;
  websiteId: Maybe<Scalars['String']>;
};

export type BugMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  validation_status?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type BugMinAggregate = {
  __typename?: 'BugMinAggregate';
  categoryId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  number: Maybe<Scalars['Int']>;
  priority: Maybe<BugPriority>;
  severity: Maybe<BugSeverity>;
  status: Maybe<BugStatus>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  validation_status: Maybe<ValidationStatus>;
  websiteId: Maybe<Scalars['String']>;
};

export type BugMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  validation_status?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type BugOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BugOrderByWithAggregationInput = {
  _avg?: InputMaybe<BugAvgOrderByAggregateInput>;
  _count?: InputMaybe<BugCountOrderByAggregateInput>;
  _max?: InputMaybe<BugMaxOrderByAggregateInput>;
  _min?: InputMaybe<BugMinOrderByAggregateInput>;
  _sum?: InputMaybe<BugSumOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  validation_status?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type BugOrderByWithRelationInput = {
  Category?: InputMaybe<CategoryOrderByWithRelationInput>;
  File?: InputMaybe<FileOrderByRelationAggregateInput>;
  Website?: InputMaybe<WebsiteOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  validation_status?: InputMaybe<SortOrder>;
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
  Number = 'number',
  Priority = 'priority',
  Severity = 'severity',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updated_at',
  UserId = 'userId',
  ValidationStatus = 'validation_status',
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
  number?: InputMaybe<IntFilter>;
  priority?: InputMaybe<EnumBugPriorityFilter>;
  severity?: InputMaybe<EnumBugSeverityFilter>;
  status?: InputMaybe<EnumBugStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  validation_status?: InputMaybe<EnumValidationStatusFilter>;
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
  number?: InputMaybe<IntWithAggregatesFilter>;
  priority?: InputMaybe<EnumBugPriorityWithAggregatesFilter>;
  severity?: InputMaybe<EnumBugSeverityWithAggregatesFilter>;
  status?: InputMaybe<EnumBugStatusWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  validation_status?: InputMaybe<EnumValidationStatusWithAggregatesFilter>;
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

export type BugSumAggregate = {
  __typename?: 'BugSumAggregate';
  number: Maybe<Scalars['Int']>;
};

export type BugSumOrderByAggregateInput = {
  number?: InputMaybe<SortOrder>;
};

export type BugUpdateInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  File?: InputMaybe<FileUpdateManyWithoutBugInput>;
  Website?: InputMaybe<WebsiteUpdateOneRequiredWithoutBugInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
  validation_status?: InputMaybe<EnumValidationStatusFieldUpdateOperationsInput>;
};

export type BugUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validation_status?: InputMaybe<EnumValidationStatusFieldUpdateOperationsInput>;
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

export type BugUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<BugWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BugCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<BugCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<BugUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<BugUpsertWithoutCommentsInput>;
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
  comments?: InputMaybe<CommentUpdateManyWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
  validation_status?: InputMaybe<EnumValidationStatusFieldUpdateOperationsInput>;
};

export type BugUpdateWithoutCommentsInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  File?: InputMaybe<FileUpdateManyWithoutBugInput>;
  Website?: InputMaybe<WebsiteUpdateOneRequiredWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
  validation_status?: InputMaybe<EnumValidationStatusFieldUpdateOperationsInput>;
};

export type BugUpdateWithoutFileInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  Website?: InputMaybe<WebsiteUpdateOneRequiredWithoutBugInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
  validation_status?: InputMaybe<EnumValidationStatusFieldUpdateOperationsInput>;
};

export type BugUpdateWithoutUserInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  File?: InputMaybe<FileUpdateManyWithoutBugInput>;
  Website?: InputMaybe<WebsiteUpdateOneRequiredWithoutBugInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validation_status?: InputMaybe<EnumValidationStatusFieldUpdateOperationsInput>;
};

export type BugUpdateWithoutWebsiteInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutBugInput>;
  File?: InputMaybe<FileUpdateManyWithoutBugInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutBugInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<EnumBugPriorityFieldUpdateOperationsInput>;
  severity?: InputMaybe<EnumBugSeverityFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBugStatusFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBugInput>;
  validation_status?: InputMaybe<EnumValidationStatusFieldUpdateOperationsInput>;
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

export type BugUpsertWithoutCommentsInput = {
  create: BugCreateWithoutCommentsInput;
  update: BugUpdateWithoutCommentsInput;
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
  comments?: InputMaybe<CommentListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  number?: InputMaybe<IntFilter>;
  priority?: InputMaybe<EnumBugPriorityFilter>;
  severity?: InputMaybe<EnumBugSeverityFilter>;
  status?: InputMaybe<EnumBugStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  validation_status?: InputMaybe<EnumValidationStatusFilter>;
  websiteId?: InputMaybe<StringFilter>;
};

export type BugWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  Bug: Array<Bug>;
  Feature: Array<Feature>;
  _count: Maybe<CategoryCount>;
  backgroundColor: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  icon: Maybe<Scalars['String']>;
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


export type CategoryFeatureArgs = {
  cursor: InputMaybe<FeatureWhereUniqueInput>;
  distinct: InputMaybe<Array<FeatureScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FeatureOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FeatureWhereInput>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  Bug: Scalars['Int'];
  Feature: Scalars['Int'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  backgroundColor: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  icon: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  backgroundColor?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutCategoryInput>;
  Feature?: InputMaybe<FeatureCreateNestedManyWithoutCategoryInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateManyInput = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
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

export type CategoryCreateNestedOneWithoutFeatureInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutFeatureInput>;
  create?: InputMaybe<CategoryCreateWithoutFeatureInput>;
};

export type CategoryCreateOrConnectWithoutBugInput = {
  create: CategoryCreateWithoutBugInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutFeatureInput = {
  create: CategoryCreateWithoutFeatureInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutBugInput = {
  Feature?: InputMaybe<FeatureCreateNestedManyWithoutCategoryInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateWithoutFeatureInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutCategoryInput>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
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
  backgroundColor: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  icon: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  backgroundColor: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type CategoryMaxOrderByAggregateInput = {
  backgroundColor?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  backgroundColor: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
};

export type CategoryMinOrderByAggregateInput = {
  backgroundColor?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  backgroundColor?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  Bug?: InputMaybe<BugOrderByRelationAggregateInput>;
  Feature?: InputMaybe<FeatureOrderByRelationAggregateInput>;
  backgroundColor?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
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
  BackgroundColor = 'backgroundColor',
  CreatedAt = 'created_at',
  Description = 'description',
  Icon = 'icon',
  Id = 'id',
  IsDisabled = 'is_disabled',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  backgroundColor?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  icon?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CategoryUpdateInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutCategoryInput>;
  Feature?: InputMaybe<FeatureUpdateManyWithoutCategoryInput>;
  backgroundColor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  backgroundColor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneRequiredWithoutFeatureInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutFeatureInput>;
  create?: InputMaybe<CategoryCreateWithoutFeatureInput>;
  update?: InputMaybe<CategoryUpdateWithoutFeatureInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutFeatureInput>;
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
  Feature?: InputMaybe<FeatureUpdateManyWithoutCategoryInput>;
  backgroundColor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutFeatureInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutCategoryInput>;
  backgroundColor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutBugInput = {
  create: CategoryCreateWithoutBugInput;
  update: CategoryUpdateWithoutBugInput;
};

export type CategoryUpsertWithoutFeatureInput = {
  create: CategoryCreateWithoutFeatureInput;
  update: CategoryUpdateWithoutFeatureInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  Bug?: InputMaybe<BugListRelationFilter>;
  Feature?: InputMaybe<FeatureListRelationFilter>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  backgroundColor?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  Bug: Maybe<Bug>;
  Feature: Maybe<Feature>;
  bugId: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  featureId: Maybe<Scalars['String']>;
  id: Scalars['String'];
  text: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int'];
  bugId: Scalars['Int'];
  created_at: Scalars['Int'];
  featureId: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['Int'];
  updated_at: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentCountOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  featureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  Bug?: InputMaybe<BugCreateNestedOneWithoutCommentsInput>;
  Feature?: InputMaybe<FeatureCreateNestedOneWithoutCommentsInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCommentInput;
};

export type CommentCreateManyBugInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  featureId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CommentCreateManyBugInputEnvelope = {
  data: Array<CommentCreateManyBugInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyFeatureInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CommentCreateManyFeatureInputEnvelope = {
  data: Array<CommentCreateManyFeatureInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateManyInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  featureId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CommentCreateManyUserInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  featureId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutBugInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutBugInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutBugInput>>;
  createMany?: InputMaybe<CommentCreateManyBugInputEnvelope>;
};

export type CommentCreateNestedManyWithoutFeatureInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutFeatureInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutFeatureInput>>;
  createMany?: InputMaybe<CommentCreateManyFeatureInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateOrConnectWithoutBugInput = {
  create: CommentCreateWithoutBugInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutFeatureInput = {
  create: CommentCreateWithoutFeatureInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutBugInput = {
  Feature?: InputMaybe<FeatureCreateNestedOneWithoutCommentsInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCommentInput;
};

export type CommentCreateWithoutFeatureInput = {
  Bug?: InputMaybe<BugCreateNestedOneWithoutCommentsInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCommentInput;
};

export type CommentCreateWithoutUserInput = {
  Bug?: InputMaybe<BugCreateNestedOneWithoutCommentsInput>;
  Feature?: InputMaybe<FeatureCreateNestedOneWithoutCommentsInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _count: Maybe<CommentCountAggregate>;
  _max: Maybe<CommentMaxAggregate>;
  _min: Maybe<CommentMinAggregate>;
  bugId: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  featureId: Maybe<Scalars['String']>;
  id: Scalars['String'];
  text: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  bugId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  featureId: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type CommentMaxOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  featureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  bugId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  featureId: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type CommentMinOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  featureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  featureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  Bug?: InputMaybe<BugOrderByWithRelationInput>;
  Feature?: InputMaybe<FeatureOrderByWithRelationInput>;
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  featureId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  BugId = 'bugId',
  CreatedAt = 'created_at',
  FeatureId = 'featureId',
  Id = 'id',
  Text = 'text',
  UpdatedAt = 'updated_at',
  UserId = 'userId'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  bugId?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  featureId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  bugId?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  featureId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type CommentUpdateInput = {
  Bug?: InputMaybe<BugUpdateOneWithoutCommentsInput>;
  Feature?: InputMaybe<FeatureUpdateOneWithoutCommentsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
};

export type CommentUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutBugInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutFeatureInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutBugInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutBugInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutBugInput>>;
  createMany?: InputMaybe<CommentCreateManyBugInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutBugInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutBugInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutBugInput>>;
};

export type CommentUpdateManyWithoutFeatureInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutFeatureInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutFeatureInput>>;
  createMany?: InputMaybe<CommentCreateManyFeatureInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutFeatureInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutFeatureInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutFeatureInput>>;
};

export type CommentUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutBugInput = {
  data: CommentUpdateWithoutBugInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutFeatureInput = {
  data: CommentUpdateWithoutFeatureInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutBugInput = {
  Feature?: InputMaybe<FeatureUpdateOneWithoutCommentsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
};

export type CommentUpdateWithoutFeatureInput = {
  Bug?: InputMaybe<BugUpdateOneWithoutCommentsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentInput>;
};

export type CommentUpdateWithoutUserInput = {
  Bug?: InputMaybe<BugUpdateOneWithoutCommentsInput>;
  Feature?: InputMaybe<FeatureUpdateOneWithoutCommentsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutBugInput = {
  create: CommentCreateWithoutBugInput;
  update: CommentUpdateWithoutBugInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutFeatureInput = {
  create: CommentCreateWithoutFeatureInput;
  update: CommentUpdateWithoutFeatureInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  update: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  Bug?: InputMaybe<BugRelationFilter>;
  Feature?: InputMaybe<FeatureRelationFilter>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  bugId?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  featureId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
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

export type EnumNotificationTopicsNullableListFilter = {
  equals?: InputMaybe<Array<NotificationTopics>>;
  has?: InputMaybe<NotificationTopics>;
  hasEvery?: InputMaybe<Array<NotificationTopics>>;
  hasSome?: InputMaybe<Array<NotificationTopics>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumValidationStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<ValidationStatus>;
};

export type EnumValidationStatusFilter = {
  equals?: InputMaybe<ValidationStatus>;
  in?: InputMaybe<Array<ValidationStatus>>;
  not?: InputMaybe<NestedEnumValidationStatusFilter>;
  notIn?: InputMaybe<Array<ValidationStatus>>;
};

export type EnumValidationStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumValidationStatusFilter>;
  _min?: InputMaybe<NestedEnumValidationStatusFilter>;
  equals?: InputMaybe<ValidationStatus>;
  in?: InputMaybe<Array<ValidationStatus>>;
  not?: InputMaybe<NestedEnumValidationStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ValidationStatus>>;
};

export type Feature = {
  __typename?: 'Feature';
  User: Maybe<User>;
  _count: Maybe<FeatureCount>;
  category: Category;
  categoryId: Scalars['String'];
  comments: Array<Comment>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Maybe<Scalars['String']>;
  website: Website;
  websiteId: Scalars['String'];
};


export type FeatureCommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};

export type FeatureCount = {
  __typename?: 'FeatureCount';
  comments: Scalars['Int'];
};

export type FeatureCountAggregate = {
  __typename?: 'FeatureCountAggregate';
  _all: Scalars['Int'];
  categoryId: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  is_disabled: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
  userId: Scalars['Int'];
  websiteId: Scalars['Int'];
};

export type FeatureCountOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type FeatureCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutFeatureInput>;
  category: CategoryCreateNestedOneWithoutFeatureInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutFeatureInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website: WebsiteCreateNestedOneWithoutFeatureInput;
};

export type FeatureCreateManyCategoryInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  websiteId: Scalars['String'];
};

export type FeatureCreateManyCategoryInputEnvelope = {
  data: Array<FeatureCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FeatureCreateManyInput = {
  categoryId: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  websiteId: Scalars['String'];
};

export type FeatureCreateManyUserInput = {
  categoryId: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  websiteId: Scalars['String'];
};

export type FeatureCreateManyUserInputEnvelope = {
  data: Array<FeatureCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FeatureCreateManyWebsiteInput = {
  categoryId: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type FeatureCreateManyWebsiteInputEnvelope = {
  data: Array<FeatureCreateManyWebsiteInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FeatureCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeatureCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<FeatureCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<FeatureCreateManyCategoryInputEnvelope>;
};

export type FeatureCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeatureCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FeatureCreateWithoutUserInput>>;
  createMany?: InputMaybe<FeatureCreateManyUserInputEnvelope>;
};

export type FeatureCreateNestedManyWithoutWebsiteInput = {
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeatureCreateOrConnectWithoutWebsiteInput>>;
  create?: InputMaybe<Array<FeatureCreateWithoutWebsiteInput>>;
  createMany?: InputMaybe<FeatureCreateManyWebsiteInputEnvelope>;
};

export type FeatureCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<FeatureWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FeatureCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<FeatureCreateWithoutCommentsInput>;
};

export type FeatureCreateOrConnectWithoutCategoryInput = {
  create: FeatureCreateWithoutCategoryInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureCreateOrConnectWithoutCommentsInput = {
  create: FeatureCreateWithoutCommentsInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureCreateOrConnectWithoutUserInput = {
  create: FeatureCreateWithoutUserInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureCreateOrConnectWithoutWebsiteInput = {
  create: FeatureCreateWithoutWebsiteInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureCreateWithoutCategoryInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutFeatureInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutFeatureInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website: WebsiteCreateNestedOneWithoutFeatureInput;
};

export type FeatureCreateWithoutCommentsInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutFeatureInput>;
  category: CategoryCreateNestedOneWithoutFeatureInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website: WebsiteCreateNestedOneWithoutFeatureInput;
};

export type FeatureCreateWithoutUserInput = {
  category: CategoryCreateNestedOneWithoutFeatureInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutFeatureInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website: WebsiteCreateNestedOneWithoutFeatureInput;
};

export type FeatureCreateWithoutWebsiteInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutFeatureInput>;
  category: CategoryCreateNestedOneWithoutFeatureInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutFeatureInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type FeatureGroupBy = {
  __typename?: 'FeatureGroupBy';
  _count: Maybe<FeatureCountAggregate>;
  _max: Maybe<FeatureMaxAggregate>;
  _min: Maybe<FeatureMinAggregate>;
  categoryId: Scalars['String'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
  userId: Maybe<Scalars['String']>;
  websiteId: Scalars['String'];
};

export type FeatureListRelationFilter = {
  every?: InputMaybe<FeatureWhereInput>;
  none?: InputMaybe<FeatureWhereInput>;
  some?: InputMaybe<FeatureWhereInput>;
};

export type FeatureMaxAggregate = {
  __typename?: 'FeatureMaxAggregate';
  categoryId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  websiteId: Maybe<Scalars['String']>;
};

export type FeatureMaxOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type FeatureMinAggregate = {
  __typename?: 'FeatureMinAggregate';
  categoryId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  websiteId: Maybe<Scalars['String']>;
};

export type FeatureMinOrderByAggregateInput = {
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type FeatureOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FeatureOrderByWithAggregationInput = {
  _count?: InputMaybe<FeatureCountOrderByAggregateInput>;
  _max?: InputMaybe<FeatureMaxOrderByAggregateInput>;
  _min?: InputMaybe<FeatureMinOrderByAggregateInput>;
  categoryId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  websiteId?: InputMaybe<SortOrder>;
};

export type FeatureOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>;
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  website?: InputMaybe<WebsiteOrderByWithRelationInput>;
  websiteId?: InputMaybe<SortOrder>;
};

export type FeatureRelationFilter = {
  is?: InputMaybe<FeatureWhereInput>;
  isNot?: InputMaybe<FeatureWhereInput>;
};

export enum FeatureScalarFieldEnum {
  CategoryId = 'categoryId',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  IsDisabled = 'is_disabled',
  Name = 'name',
  UpdatedAt = 'updated_at',
  UserId = 'userId',
  WebsiteId = 'websiteId'
}

export type FeatureScalarWhereInput = {
  AND?: InputMaybe<Array<FeatureScalarWhereInput>>;
  NOT?: InputMaybe<Array<FeatureScalarWhereInput>>;
  OR?: InputMaybe<Array<FeatureScalarWhereInput>>;
  categoryId?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  websiteId?: InputMaybe<StringFilter>;
};

export type FeatureScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FeatureScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FeatureScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FeatureScalarWhereWithAggregatesInput>>;
  categoryId?: InputMaybe<StringWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
  websiteId?: InputMaybe<StringWithAggregatesFilter>;
};

export type FeatureUpdateInput = {
  User?: InputMaybe<UserUpdateOneWithoutFeatureInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutFeatureInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutFeatureInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<WebsiteUpdateOneRequiredWithoutFeatureInput>;
};

export type FeatureUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeatureUpdateManyWithWhereWithoutCategoryInput = {
  data: FeatureUpdateManyMutationInput;
  where: FeatureScalarWhereInput;
};

export type FeatureUpdateManyWithWhereWithoutUserInput = {
  data: FeatureUpdateManyMutationInput;
  where: FeatureScalarWhereInput;
};

export type FeatureUpdateManyWithWhereWithoutWebsiteInput = {
  data: FeatureUpdateManyMutationInput;
  where: FeatureScalarWhereInput;
};

export type FeatureUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeatureCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<FeatureCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<FeatureCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeatureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  set?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  update?: InputMaybe<Array<FeatureUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<FeatureUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<FeatureUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type FeatureUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeatureCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FeatureCreateWithoutUserInput>>;
  createMany?: InputMaybe<FeatureCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeatureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  set?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  update?: InputMaybe<Array<FeatureUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FeatureUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FeatureUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FeatureUpdateManyWithoutWebsiteInput = {
  connect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FeatureCreateOrConnectWithoutWebsiteInput>>;
  create?: InputMaybe<Array<FeatureCreateWithoutWebsiteInput>>;
  createMany?: InputMaybe<FeatureCreateManyWebsiteInputEnvelope>;
  delete?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FeatureScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  set?: InputMaybe<Array<FeatureWhereUniqueInput>>;
  update?: InputMaybe<Array<FeatureUpdateWithWhereUniqueWithoutWebsiteInput>>;
  updateMany?: InputMaybe<Array<FeatureUpdateManyWithWhereWithoutWebsiteInput>>;
  upsert?: InputMaybe<Array<FeatureUpsertWithWhereUniqueWithoutWebsiteInput>>;
};

export type FeatureUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<FeatureWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FeatureCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<FeatureCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FeatureUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<FeatureUpsertWithoutCommentsInput>;
};

export type FeatureUpdateWithWhereUniqueWithoutCategoryInput = {
  data: FeatureUpdateWithoutCategoryInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureUpdateWithWhereUniqueWithoutUserInput = {
  data: FeatureUpdateWithoutUserInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureUpdateWithWhereUniqueWithoutWebsiteInput = {
  data: FeatureUpdateWithoutWebsiteInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureUpdateWithoutCategoryInput = {
  User?: InputMaybe<UserUpdateOneWithoutFeatureInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutFeatureInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<WebsiteUpdateOneRequiredWithoutFeatureInput>;
};

export type FeatureUpdateWithoutCommentsInput = {
  User?: InputMaybe<UserUpdateOneWithoutFeatureInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutFeatureInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<WebsiteUpdateOneRequiredWithoutFeatureInput>;
};

export type FeatureUpdateWithoutUserInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutFeatureInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutFeatureInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<WebsiteUpdateOneRequiredWithoutFeatureInput>;
};

export type FeatureUpdateWithoutWebsiteInput = {
  User?: InputMaybe<UserUpdateOneWithoutFeatureInput>;
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutFeatureInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutFeatureInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeatureUpsertWithWhereUniqueWithoutCategoryInput = {
  create: FeatureCreateWithoutCategoryInput;
  update: FeatureUpdateWithoutCategoryInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureUpsertWithWhereUniqueWithoutUserInput = {
  create: FeatureCreateWithoutUserInput;
  update: FeatureUpdateWithoutUserInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureUpsertWithWhereUniqueWithoutWebsiteInput = {
  create: FeatureCreateWithoutWebsiteInput;
  update: FeatureUpdateWithoutWebsiteInput;
  where: FeatureWhereUniqueInput;
};

export type FeatureUpsertWithoutCommentsInput = {
  create: FeatureCreateWithoutCommentsInput;
  update: FeatureUpdateWithoutCommentsInput;
};

export type FeatureWhereInput = {
  AND?: InputMaybe<Array<FeatureWhereInput>>;
  NOT?: InputMaybe<Array<FeatureWhereInput>>;
  OR?: InputMaybe<Array<FeatureWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  website?: InputMaybe<WebsiteRelationFilter>;
  websiteId?: InputMaybe<StringFilter>;
};

export type FeatureWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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
  createBugCustom: Bug;
  createCategory: Category;
  createComment: Comment;
  createFeature: Feature;
  createFile: File;
  createManyBug: AffectedRowsOutput;
  createManyCategory: AffectedRowsOutput;
  createManyComment: AffectedRowsOutput;
  createManyFeature: AffectedRowsOutput;
  createManyFile: AffectedRowsOutput;
  createManyNotification: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyWebsite: AffectedRowsOutput;
  createNotification: Notification;
  createUser: User;
  createWebsite: Website;
  deleteBug: Maybe<Bug>;
  deleteCategory: Maybe<Category>;
  deleteComment: Maybe<Comment>;
  deleteFeature: Maybe<Feature>;
  deleteFile: Maybe<File>;
  deleteManyBug: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyComment: AffectedRowsOutput;
  deleteManyFeature: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyNotification: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyWebsite: AffectedRowsOutput;
  deleteNotification: Maybe<Notification>;
  deleteUser: Maybe<User>;
  deleteWebsite: Maybe<Website>;
  login: User;
  me: User;
  pubSubMutation: Scalars['Boolean'];
  pubSubMutationToDynamicTopic: Scalars['Boolean'];
  publisherMutation: Scalars['Boolean'];
  register: User;
  updateBug: Maybe<Bug>;
  updateCategory: Maybe<Category>;
  updateComment: Maybe<Comment>;
  updateFeature: Maybe<Feature>;
  updateFile: Maybe<File>;
  updateManyBug: AffectedRowsOutput;
  updateManyCategory: AffectedRowsOutput;
  updateManyComment: AffectedRowsOutput;
  updateManyFeature: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyNotification: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyWebsite: AffectedRowsOutput;
  updateNotification: Maybe<Notification>;
  updateUser: Maybe<User>;
  updateWebsite: Maybe<Website>;
  uploadFile: File;
  upsertBug: Bug;
  upsertCategory: Category;
  upsertComment: Comment;
  upsertFeature: Feature;
  upsertFile: File;
  upsertNotification: Notification;
  upsertUser: User;
  upsertWebsite: Website;
};


export type MutationCreateBugArgs = {
  data: BugCreateInput;
};


export type MutationCreateBugCustomArgs = {
  data: BugCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateFeatureArgs = {
  data: FeatureCreateInput;
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


export type MutationCreateManyCommentArgs = {
  data: Array<CommentCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFeatureArgs = {
  data: Array<FeatureCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNotificationArgs = {
  data: Array<NotificationCreateManyInput>;
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


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
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


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteFeatureArgs = {
  where: FeatureWhereUniqueInput;
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


export type MutationDeleteManyCommentArgs = {
  where: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyFeatureArgs = {
  where: InputMaybe<FeatureWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyNotificationArgs = {
  where: InputMaybe<NotificationWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyWebsiteArgs = {
  where: InputMaybe<WebsiteWhereInput>;
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
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


export type MutationPubSubMutationArgs = {
  message: InputMaybe<Scalars['String']>;
};


export type MutationPubSubMutationToDynamicTopicArgs = {
  message: InputMaybe<Scalars['String']>;
  topic: Scalars['String'];
};


export type MutationPublisherMutationArgs = {
  message: InputMaybe<Scalars['String']>;
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


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateFeatureArgs = {
  data: FeatureUpdateInput;
  where: FeatureWhereUniqueInput;
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


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyFeatureArgs = {
  data: FeatureUpdateManyMutationInput;
  where: InputMaybe<FeatureWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyNotificationArgs = {
  data: NotificationUpdateManyMutationInput;
  where: InputMaybe<NotificationWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyWebsiteArgs = {
  data: WebsiteUpdateManyMutationInput;
  where: InputMaybe<WebsiteWhereInput>;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateWebsiteArgs = {
  data: WebsiteUpdateInput;
  where: WebsiteWhereUniqueInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
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


export type MutationUpsertCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertFeatureArgs = {
  create: FeatureCreateInput;
  update: FeatureUpdateInput;
  where: FeatureWhereUniqueInput;
};


export type MutationUpsertFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertNotificationArgs = {
  create: NotificationCreateInput;
  update: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
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

export type NestedEnumValidationStatusFilter = {
  equals?: InputMaybe<ValidationStatus>;
  in?: InputMaybe<Array<ValidationStatus>>;
  not?: InputMaybe<NestedEnumValidationStatusFilter>;
  notIn?: InputMaybe<Array<ValidationStatus>>;
};

export type NestedEnumValidationStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumValidationStatusFilter>;
  _min?: InputMaybe<NestedEnumValidationStatusFilter>;
  equals?: InputMaybe<ValidationStatus>;
  in?: InputMaybe<Array<ValidationStatus>>;
  not?: InputMaybe<NestedEnumValidationStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ValidationStatus>>;
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

export type Notification = {
  __typename?: 'Notification';
  bugId: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  isRead: Scalars['Boolean'];
  is_disabled: Scalars['Boolean'];
  sender: User;
  senderId: Scalars['String'];
  title: Scalars['String'];
  topics: Array<NotificationTopics>;
  updated_at: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type NotificationCountAggregate = {
  __typename?: 'NotificationCountAggregate';
  _all: Scalars['Int'];
  bugId: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  isRead: Scalars['Int'];
  is_disabled: Scalars['Int'];
  senderId: Scalars['Int'];
  title: Scalars['Int'];
  topics: Scalars['Int'];
  updated_at: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NotificationCountOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRead?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topics?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationCreateInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  is_disabled: Scalars['Boolean'];
  sender: UserCreateNestedOneWithoutNotifications_SentInput;
  title: Scalars['String'];
  topics?: InputMaybe<NotificationCreatetopicsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutNotificationInput;
};

export type NotificationCreateManyInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  is_disabled: Scalars['Boolean'];
  senderId: Scalars['String'];
  title: Scalars['String'];
  topics?: InputMaybe<NotificationCreatetopicsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type NotificationCreateManySenderInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  is_disabled: Scalars['Boolean'];
  title: Scalars['String'];
  topics?: InputMaybe<NotificationCreatetopicsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type NotificationCreateManySenderInputEnvelope = {
  data: Array<NotificationCreateManySenderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateManyUserInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  is_disabled: Scalars['Boolean'];
  senderId: Scalars['String'];
  title: Scalars['String'];
  topics?: InputMaybe<NotificationCreatetopicsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationCreateManyUserInputEnvelope = {
  data: Array<NotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutSenderInput>>;
  createMany?: InputMaybe<NotificationCreateManySenderInputEnvelope>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationCreateOrConnectWithoutSenderInput = {
  create: NotificationCreateWithoutSenderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutSenderInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  is_disabled: Scalars['Boolean'];
  title: Scalars['String'];
  topics?: InputMaybe<NotificationCreatetopicsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutNotificationInput;
};

export type NotificationCreateWithoutUserInput = {
  bugId?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isRead?: InputMaybe<Scalars['Boolean']>;
  is_disabled: Scalars['Boolean'];
  sender: UserCreateNestedOneWithoutNotifications_SentInput;
  title: Scalars['String'];
  topics?: InputMaybe<NotificationCreatetopicsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationCreatetopicsInput = {
  set: Array<NotificationTopics>;
};

export type NotificationGroupBy = {
  __typename?: 'NotificationGroupBy';
  _count: Maybe<NotificationCountAggregate>;
  _max: Maybe<NotificationMaxAggregate>;
  _min: Maybe<NotificationMinAggregate>;
  bugId: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  isRead: Scalars['Boolean'];
  is_disabled: Scalars['Boolean'];
  senderId: Scalars['String'];
  title: Scalars['String'];
  topics: Maybe<Array<NotificationTopics>>;
  updated_at: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationMaxAggregate = {
  __typename?: 'NotificationMaxAggregate';
  bugId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  isRead: Maybe<Scalars['Boolean']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  senderId: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type NotificationMaxOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRead?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationMinAggregate = {
  __typename?: 'NotificationMinAggregate';
  bugId: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  isRead: Maybe<Scalars['Boolean']>;
  is_disabled: Maybe<Scalars['Boolean']>;
  senderId: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type NotificationMinOrderByAggregateInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRead?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithAggregationInput = {
  _count?: InputMaybe<NotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<NotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<NotificationMinOrderByAggregateInput>;
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRead?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topics?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  bugId?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRead?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  sender?: InputMaybe<UserOrderByWithRelationInput>;
  senderId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topics?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  BugId = 'bugId',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  IsRead = 'isRead',
  IsDisabled = 'is_disabled',
  SenderId = 'senderId',
  Title = 'title',
  Topics = 'topics',
  UpdatedAt = 'updated_at',
  UserId = 'userId'
}

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereInput>>;
  bugId?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isRead?: InputMaybe<BoolFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  senderId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<EnumNotificationTopicsNullableListFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  bugId?: InputMaybe<StringNullableWithAggregatesFilter>;
  created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isRead?: InputMaybe<BoolWithAggregatesFilter>;
  is_disabled?: InputMaybe<BoolWithAggregatesFilter>;
  senderId?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  topics?: InputMaybe<EnumNotificationTopicsNullableListFilter>;
  updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export enum NotificationTopics {
  BugClosed = 'BUG_CLOSED',
  FeatureClosed = 'FEATURE_CLOSED',
  FileUploaded = 'FILE_UPLOADED',
  NewBug = 'NEW_BUG',
  NewComment = 'NEW_COMMENT',
  NewFeature = 'NEW_FEATURE',
  NewFile = 'NEW_FILE',
  NewReply = 'NEW_REPLY',
  NewReview = 'NEW_REVIEW',
  NewUser = 'NEW_USER',
  Other = 'OTHER',
  WebsiteAdded = 'WEBSITE_ADDED',
  WebsiteRemoved = 'WEBSITE_REMOVED',
  WebsiteUpdated = 'WEBSITE_UPDATED'
}

export type NotificationType = {
  __typename?: 'NotificationType';
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  message: Maybe<Scalars['String']>;
};

export type NotificationUpdateInput = {
  bugId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isRead?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutNotifications_SentInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topics?: InputMaybe<NotificationUpdatetopicsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationInput>;
};

export type NotificationUpdateManyMutationInput = {
  bugId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isRead?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topics?: InputMaybe<NotificationUpdatetopicsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutSenderInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutSenderInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutSenderInput>>;
  createMany?: InputMaybe<NotificationCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutSenderInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutSenderInput>>;
};

export type NotificationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateWithWhereUniqueWithoutSenderInput = {
  data: NotificationUpdateWithoutSenderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutSenderInput = {
  bugId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isRead?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topics?: InputMaybe<NotificationUpdatetopicsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationInput>;
};

export type NotificationUpdateWithoutUserInput = {
  bugId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isRead?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutNotifications_SentInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topics?: InputMaybe<NotificationUpdatetopicsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdatetopicsInput = {
  push?: InputMaybe<Array<NotificationTopics>>;
  set?: InputMaybe<Array<NotificationTopics>>;
};

export type NotificationUpsertWithWhereUniqueWithoutSenderInput = {
  create: NotificationCreateWithoutSenderInput;
  update: NotificationUpdateWithoutSenderInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  bugId?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isRead?: InputMaybe<BoolFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  sender?: InputMaybe<UserRelationFilter>;
  senderId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  topics?: InputMaybe<EnumNotificationTopicsNullableListFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBug: AggregateBug;
  aggregateCategory: AggregateCategory;
  aggregateComment: AggregateComment;
  aggregateFeature: AggregateFeature;
  aggregateFile: AggregateFile;
  aggregateNotification: AggregateNotification;
  aggregateUser: AggregateUser;
  aggregateWebsite: AggregateWebsite;
  bug: Maybe<Bug>;
  bugs: Array<Bug>;
  categories: Array<Category>;
  category: Maybe<Category>;
  comment: Maybe<Comment>;
  comments: Array<Comment>;
  currentDate: Scalars['DateTime'];
  feature: Maybe<Feature>;
  features: Array<Feature>;
  file: Maybe<File>;
  files: Array<File>;
  findFirstBug: Maybe<Bug>;
  findFirstCategory: Maybe<Category>;
  findFirstComment: Maybe<Comment>;
  findFirstFeature: Maybe<Feature>;
  findFirstFile: Maybe<File>;
  findFirstNotification: Maybe<Notification>;
  findFirstUser: Maybe<User>;
  findFirstWebsite: Maybe<Website>;
  groupByBug: Array<BugGroupBy>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByComment: Array<CommentGroupBy>;
  groupByFeature: Array<FeatureGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByNotification: Array<NotificationGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByWebsite: Array<WebsiteGroupBy>;
  notification: Maybe<Notification>;
  notifications: Array<Notification>;
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


export type QueryAggregateCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryAggregateFeatureArgs = {
  cursor: InputMaybe<FeatureWhereUniqueInput>;
  orderBy: InputMaybe<Array<FeatureOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FeatureWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryAggregateNotificationArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
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


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryFeatureArgs = {
  where: FeatureWhereUniqueInput;
};


export type QueryFeaturesArgs = {
  cursor: InputMaybe<FeatureWhereUniqueInput>;
  distinct: InputMaybe<Array<FeatureScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FeatureOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FeatureWhereInput>;
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


export type QueryFindFirstCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstFeatureArgs = {
  cursor: InputMaybe<FeatureWhereUniqueInput>;
  distinct: InputMaybe<Array<FeatureScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FeatureOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FeatureWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstNotificationArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
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


export type QueryGroupByCommentArgs = {
  by: Array<CommentScalarFieldEnum>;
  having: InputMaybe<CommentScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<CommentOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type QueryGroupByFeatureArgs = {
  by: Array<FeatureScalarFieldEnum>;
  having: InputMaybe<FeatureScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<FeatureOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FeatureWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type QueryGroupByNotificationArgs = {
  by: Array<NotificationScalarFieldEnum>;
  having: InputMaybe<NotificationScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<NotificationOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
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


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
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
  secret_key: Scalars['String'];
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

export type Subscription = {
  __typename?: 'Subscription';
  normalSubscription: NotificationType;
  subscriptionWithFilter: NotificationType;
  subscriptionWithFilterToDynamicTopic: NotificationType;
};


export type SubscriptionSubscriptionWithFilterToDynamicTopicArgs = {
  topic: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  Bug: Array<Bug>;
  Comment: Array<Comment>;
  Notification: Array<Notification>;
  _count: Maybe<UserCount>;
  avatar: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  feature: Array<Feature>;
  files: Array<File>;
  first_name: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications_sent: Array<Notification>;
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


export type UserCommentArgs = {
  cursor: InputMaybe<CommentWhereUniqueInput>;
  distinct: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CommentWhereInput>;
};


export type UserNotificationArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};


export type UserFeatureArgs = {
  cursor: InputMaybe<FeatureWhereUniqueInput>;
  distinct: InputMaybe<Array<FeatureScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FeatureOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FeatureWhereInput>;
};


export type UserFilesArgs = {
  cursor: InputMaybe<FileWhereUniqueInput>;
  distinct: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FileWhereInput>;
};


export type UserNotifications_SentArgs = {
  cursor: InputMaybe<NotificationWhereUniqueInput>;
  distinct: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NotificationWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Bug: Scalars['Int'];
  Comment: Scalars['Int'];
  Notification: Scalars['Int'];
  feature: Scalars['Int'];
  files: Scalars['Int'];
  notifications_sent: Scalars['Int'];
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
  Comment?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  feature?: InputMaybe<FeatureCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
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
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutBugInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBugInput>;
  create?: InputMaybe<UserCreateWithoutBugInput>;
};

export type UserCreateNestedOneWithoutCommentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentInput>;
  create?: InputMaybe<UserCreateWithoutCommentInput>;
};

export type UserCreateNestedOneWithoutFeatureInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFeatureInput>;
  create?: InputMaybe<UserCreateWithoutFeatureInput>;
};

export type UserCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UserCreateNestedOneWithoutNotificationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationInput>;
  create?: InputMaybe<UserCreateWithoutNotificationInput>;
};

export type UserCreateNestedOneWithoutNotifications_SentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotifications_SentInput>;
  create?: InputMaybe<UserCreateWithoutNotifications_SentInput>;
};

export type UserCreateOrConnectWithoutBugInput = {
  create: UserCreateWithoutBugInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentInput = {
  create: UserCreateWithoutCommentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFeatureInput = {
  create: UserCreateWithoutFeatureInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationInput = {
  create: UserCreateWithoutNotificationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotifications_SentInput = {
  create: UserCreateWithoutNotifications_SentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBugInput = {
  Comment?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  feature?: InputMaybe<FeatureCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  password: Scalars['String'];
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCommentInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  feature?: InputMaybe<FeatureCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  password: Scalars['String'];
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutFeatureInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  password: Scalars['String'];
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutFilesInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  feature?: InputMaybe<FeatureCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  password: Scalars['String'];
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutNotificationInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  feature?: InputMaybe<FeatureCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  first_name: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  is_disabled: Scalars['Boolean'];
  last_name: Scalars['String'];
  notifications_sent?: InputMaybe<NotificationCreateNestedManyWithoutSenderInput>;
  password: Scalars['String'];
  role?: InputMaybe<UserCreateroleInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutNotifications_SentInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutUserInput>;
  Comment?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  feature?: InputMaybe<FeatureCreateNestedManyWithoutUserInput>;
  files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
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
  Comment?: InputMaybe<CommentOrderByRelationAggregateInput>;
  Notification?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  feature?: InputMaybe<FeatureOrderByRelationAggregateInput>;
  files?: InputMaybe<FileOrderByRelationAggregateInput>;
  first_name?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_disabled?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  notifications_sent?: InputMaybe<NotificationOrderByRelationAggregateInput>;
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
  Comment?: InputMaybe<CommentUpdateManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feature?: InputMaybe<FeatureUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
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

export type UserUpdateOneRequiredWithoutCommentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentInput>;
  create?: InputMaybe<UserCreateWithoutCommentInput>;
  update?: InputMaybe<UserUpdateWithoutCommentInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentInput>;
};

export type UserUpdateOneRequiredWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
  update?: InputMaybe<UserUpdateWithoutFilesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFilesInput>;
};

export type UserUpdateOneRequiredWithoutNotificationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationInput>;
  create?: InputMaybe<UserCreateWithoutNotificationInput>;
  update?: InputMaybe<UserUpdateWithoutNotificationInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationInput>;
};

export type UserUpdateOneRequiredWithoutNotifications_SentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotifications_SentInput>;
  create?: InputMaybe<UserCreateWithoutNotifications_SentInput>;
  update?: InputMaybe<UserUpdateWithoutNotifications_SentInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotifications_SentInput>;
};

export type UserUpdateOneWithoutFeatureInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFeatureInput>;
  create?: InputMaybe<UserCreateWithoutFeatureInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutFeatureInput>;
  upsert?: InputMaybe<UserUpsertWithoutFeatureInput>;
};

export type UserUpdateWithoutBugInput = {
  Comment?: InputMaybe<CommentUpdateManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feature?: InputMaybe<FeatureUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feature?: InputMaybe<FeatureUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFeatureInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFilesInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feature?: InputMaybe<FeatureUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feature?: InputMaybe<FeatureUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications_sent?: InputMaybe<NotificationUpdateManyWithoutSenderInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotifications_SentInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutUserInput>;
  Comment?: InputMaybe<CommentUpdateManyWithoutUserInput>;
  Notification?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  feature?: InputMaybe<FeatureUpdateManyWithoutUserInput>;
  files?: InputMaybe<FileUpdateManyWithoutUserInput>;
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

export type UserUpsertWithoutCommentInput = {
  create: UserCreateWithoutCommentInput;
  update: UserUpdateWithoutCommentInput;
};

export type UserUpsertWithoutFeatureInput = {
  create: UserCreateWithoutFeatureInput;
  update: UserUpdateWithoutFeatureInput;
};

export type UserUpsertWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  update: UserUpdateWithoutFilesInput;
};

export type UserUpsertWithoutNotificationInput = {
  create: UserCreateWithoutNotificationInput;
  update: UserUpdateWithoutNotificationInput;
};

export type UserUpsertWithoutNotifications_SentInput = {
  create: UserCreateWithoutNotifications_SentInput;
  update: UserUpdateWithoutNotifications_SentInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Bug?: InputMaybe<BugListRelationFilter>;
  Comment?: InputMaybe<CommentListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  Notification?: InputMaybe<NotificationListRelationFilter>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  feature?: InputMaybe<FeatureListRelationFilter>;
  files?: InputMaybe<FileListRelationFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_disabled?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringFilter>;
  notifications_sent?: InputMaybe<NotificationListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleNullableListFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export enum ValidationStatus {
  NotValidated = 'NOT_VALIDATED',
  Pending = 'PENDING',
  Validated = 'VALIDATED'
}

export type Website = {
  __typename?: 'Website';
  Bug: Array<Bug>;
  Feature: Array<Feature>;
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


export type WebsiteFeatureArgs = {
  cursor: InputMaybe<FeatureWhereUniqueInput>;
  distinct: InputMaybe<Array<FeatureScalarFieldEnum>>;
  orderBy: InputMaybe<Array<FeatureOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<FeatureWhereInput>;
};

export type WebsiteCount = {
  __typename?: 'WebsiteCount';
  Bug: Scalars['Int'];
  Feature: Scalars['Int'];
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
  Feature?: InputMaybe<FeatureCreateNestedManyWithoutWebsiteInput>;
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

export type WebsiteCreateNestedOneWithoutFeatureInput = {
  connect?: InputMaybe<WebsiteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WebsiteCreateOrConnectWithoutFeatureInput>;
  create?: InputMaybe<WebsiteCreateWithoutFeatureInput>;
};

export type WebsiteCreateOrConnectWithoutBugInput = {
  create: WebsiteCreateWithoutBugInput;
  where: WebsiteWhereUniqueInput;
};

export type WebsiteCreateOrConnectWithoutFeatureInput = {
  create: WebsiteCreateWithoutFeatureInput;
  where: WebsiteWhereUniqueInput;
};

export type WebsiteCreateWithoutBugInput = {
  Feature?: InputMaybe<FeatureCreateNestedManyWithoutWebsiteInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isPreview: Scalars['Boolean'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type WebsiteCreateWithoutFeatureInput = {
  Bug?: InputMaybe<BugCreateNestedManyWithoutWebsiteInput>;
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
  Feature?: InputMaybe<FeatureOrderByRelationAggregateInput>;
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
  Feature?: InputMaybe<FeatureUpdateManyWithoutWebsiteInput>;
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

export type WebsiteUpdateOneRequiredWithoutFeatureInput = {
  connect?: InputMaybe<WebsiteWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WebsiteCreateOrConnectWithoutFeatureInput>;
  create?: InputMaybe<WebsiteCreateWithoutFeatureInput>;
  update?: InputMaybe<WebsiteUpdateWithoutFeatureInput>;
  upsert?: InputMaybe<WebsiteUpsertWithoutFeatureInput>;
};

export type WebsiteUpdateWithoutBugInput = {
  Feature?: InputMaybe<FeatureUpdateManyWithoutWebsiteInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isPreview?: InputMaybe<BoolFieldUpdateOperationsInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type WebsiteUpdateWithoutFeatureInput = {
  Bug?: InputMaybe<BugUpdateManyWithoutWebsiteInput>;
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

export type WebsiteUpsertWithoutFeatureInput = {
  create: WebsiteCreateWithoutFeatureInput;
  update: WebsiteUpdateWithoutFeatureInput;
};

export type WebsiteWhereInput = {
  AND?: InputMaybe<Array<WebsiteWhereInput>>;
  Bug?: InputMaybe<BugListRelationFilter>;
  Feature?: InputMaybe<FeatureListRelationFilter>;
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

export type CreateCustomBugMutationVariables = Exact<{
  data: BugCreateInput;
}>;


export type CreateCustomBugMutation = { __typename?: 'Mutation', createBugCustom: { __typename?: 'Bug', id: string } };

export type CreateCommentMutationVariables = Exact<{
  data: CommentCreateInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string } };

export type MutateLoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type MutateLoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> } };

export type MutateMeMutationVariables = Exact<{ [key: string]: never; }>;


export type MutateMeMutation = { __typename?: 'Mutation', me: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> } };

export type SetNotificationReadMutationVariables = Exact<{
  where: NotificationWhereUniqueInput;
  data: NotificationUpdateInput;
}>;


export type SetNotificationReadMutation = { __typename?: 'Mutation', updateNotification: { __typename?: 'Notification', id: string } };

export type GetAllBugsByQueryVariables = Exact<{
  orderBy: InputMaybe<Array<BugOrderByWithRelationInput> | BugOrderByWithRelationInput>;
  where: BugWhereInput;
}>;


export type GetAllBugsByQuery = { __typename?: 'Query', bugs: Array<{ __typename?: 'Bug', id: string, created_at: any, status: BugStatus, number: number, Website: { __typename?: 'Website', name: string } }> };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, backgroundColor: string, description: string, icon: string }> };

export type GetAllCommentsQueryVariables = Exact<{
  orderBy: InputMaybe<Array<CommentOrderByWithRelationInput> | CommentOrderByWithRelationInput>;
  where: CommentWhereInput;
}>;


export type GetAllCommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, text: string, created_at: any, updated_at: any, user: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string, role: Array<Role> } }> };

export type GetAllFeaturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFeaturesQuery = { __typename?: 'Query', features: Array<{ __typename?: 'Feature', id: string, name: string, description: string, category: { __typename?: 'Category', id: string, name: string, backgroundColor: string, description: string, icon: string }, website: { __typename?: 'Website', name: string, url: string, logo: string } }> };

export type GetAllFilesByBugQueryVariables = Exact<{
  where: BugWhereUniqueInput;
}>;


export type GetAllFilesByBugQuery = { __typename?: 'Query', bug: { __typename?: 'Bug', File: Array<{ __typename?: 'File', id: string, name: string, path: string, size: number, type: string, created_at: any, user: { __typename?: 'User', avatar: string, first_name: string, last_name: string } }> } };

export type GetAllNotificationsQueryVariables = Exact<{
  where: NotificationWhereInput;
  orderBy: InputMaybe<Array<NotificationOrderByWithRelationInput> | NotificationOrderByWithRelationInput>;
}>;


export type GetAllNotificationsQuery = { __typename?: 'Query', notifications: Array<{ __typename?: 'Notification', id: string, title: string, isRead: boolean, description: string, created_at: any, updated_at: any, sender: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, avatar: string } }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string }> };

export type GetAllWebSitesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWebSitesQuery = { __typename?: 'Query', websites: Array<{ __typename?: 'Website', id: string, name: string, url: string, logo: string }> };

export type GetBugDatasQueryVariables = Exact<{
  where: BugWhereUniqueInput;
}>;


export type GetBugDatasQuery = { __typename?: 'Query', bug: { __typename?: 'Bug', id: string, number: number, title: string, status: BugStatus, severity: BugSeverity, priority: BugPriority, description: string, Website: { __typename?: 'Website', id: string, name: string, url: string, logo: string, isPreview: boolean }, File: Array<{ __typename?: 'File', id: string, name: string, path: string }>, user: { __typename?: 'User', first_name: string, last_name: string, email: string, avatar: string } } };

export type AllNotificationsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AllNotificationsSubscription = { __typename?: 'Subscription', normalSubscription: { __typename?: 'NotificationType', id: string, message: string, date: any } };

export type DynamicTopicSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type DynamicTopicSubscription = { __typename?: 'Subscription', subscriptionWithFilterToDynamicTopic: { __typename?: 'NotificationType', id: string, message: string } };

export type EvenNotificationsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type EvenNotificationsSubscription = { __typename?: 'Subscription', subscriptionWithFilter: { __typename?: 'NotificationType', id: string, message: string, date: any } };

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
export const CreateCustomBugDocument = gql`
    mutation createCustomBug($data: BugCreateInput!) {
  createBugCustom(data: $data) {
    id
  }
}
    `;
export type CreateCustomBugMutationFn = Apollo.MutationFunction<CreateCustomBugMutation, CreateCustomBugMutationVariables>;

/**
 * __useCreateCustomBugMutation__
 *
 * To run a mutation, you first call `useCreateCustomBugMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomBugMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomBugMutation, { data, loading, error }] = useCreateCustomBugMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCustomBugMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomBugMutation, CreateCustomBugMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomBugMutation, CreateCustomBugMutationVariables>(CreateCustomBugDocument, options);
      }
export type CreateCustomBugMutationHookResult = ReturnType<typeof useCreateCustomBugMutation>;
export type CreateCustomBugMutationResult = Apollo.MutationResult<CreateCustomBugMutation>;
export type CreateCustomBugMutationOptions = Apollo.BaseMutationOptions<CreateCustomBugMutation, CreateCustomBugMutationVariables>;
export const CreateCommentDocument = gql`
    mutation createComment($data: CommentCreateInput!) {
  createComment(data: $data) {
    id
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
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
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SetNotificationReadDocument = gql`
    mutation SetNotificationRead($where: NotificationWhereUniqueInput!, $data: NotificationUpdateInput!) {
  updateNotification(where: $where, data: $data) {
    id
  }
}
    `;
export type SetNotificationReadMutationFn = Apollo.MutationFunction<SetNotificationReadMutation, SetNotificationReadMutationVariables>;

/**
 * __useSetNotificationReadMutation__
 *
 * To run a mutation, you first call `useSetNotificationReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetNotificationReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setNotificationReadMutation, { data, loading, error }] = useSetNotificationReadMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSetNotificationReadMutation(baseOptions?: Apollo.MutationHookOptions<SetNotificationReadMutation, SetNotificationReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetNotificationReadMutation, SetNotificationReadMutationVariables>(SetNotificationReadDocument, options);
      }
export type SetNotificationReadMutationHookResult = ReturnType<typeof useSetNotificationReadMutation>;
export type SetNotificationReadMutationResult = Apollo.MutationResult<SetNotificationReadMutation>;
export type SetNotificationReadMutationOptions = Apollo.BaseMutationOptions<SetNotificationReadMutation, SetNotificationReadMutationVariables>;
export const GetAllBugsByDocument = gql`
    query GetAllBugsBy($orderBy: [BugOrderByWithRelationInput!], $where: BugWhereInput!) {
  bugs(orderBy: $orderBy, where: $where) {
    id
    created_at
    status
    number
    Website {
      name
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
 *      orderBy: // value for 'orderBy'
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
export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  categories {
    id
    name
    backgroundColor
    description
    icon
  }
}
    `;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetAllCommentsDocument = gql`
    query GetAllComments($orderBy: [CommentOrderByWithRelationInput!], $where: CommentWhereInput!) {
  comments(orderBy: $orderBy, where: $where) {
    id
    text
    created_at
    updated_at
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetAllCommentsQuery__
 *
 * To run a query within a React component, call `useGetAllCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCommentsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetAllCommentsQuery, GetAllCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCommentsQuery, GetAllCommentsQueryVariables>(GetAllCommentsDocument, options);
      }
export function useGetAllCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCommentsQuery, GetAllCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCommentsQuery, GetAllCommentsQueryVariables>(GetAllCommentsDocument, options);
        }
export type GetAllCommentsQueryHookResult = ReturnType<typeof useGetAllCommentsQuery>;
export type GetAllCommentsLazyQueryHookResult = ReturnType<typeof useGetAllCommentsLazyQuery>;
export type GetAllCommentsQueryResult = Apollo.QueryResult<GetAllCommentsQuery, GetAllCommentsQueryVariables>;
export const GetAllFeaturesDocument = gql`
    query GetAllFeatures {
  features {
    id
    name
    description
    category {
      id
      name
      backgroundColor
      description
      icon
    }
    website {
      name
      url
      logo
    }
  }
}
    `;

/**
 * __useGetAllFeaturesQuery__
 *
 * To run a query within a React component, call `useGetAllFeaturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFeaturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFeaturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllFeaturesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFeaturesQuery, GetAllFeaturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFeaturesQuery, GetAllFeaturesQueryVariables>(GetAllFeaturesDocument, options);
      }
export function useGetAllFeaturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFeaturesQuery, GetAllFeaturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFeaturesQuery, GetAllFeaturesQueryVariables>(GetAllFeaturesDocument, options);
        }
export type GetAllFeaturesQueryHookResult = ReturnType<typeof useGetAllFeaturesQuery>;
export type GetAllFeaturesLazyQueryHookResult = ReturnType<typeof useGetAllFeaturesLazyQuery>;
export type GetAllFeaturesQueryResult = Apollo.QueryResult<GetAllFeaturesQuery, GetAllFeaturesQueryVariables>;
export const GetAllFilesByBugDocument = gql`
    query GetAllFilesByBug($where: BugWhereUniqueInput!) {
  bug(where: $where) {
    File {
      id
      name
      path
      size
      type
      user {
        avatar
        first_name
        last_name
      }
      created_at
    }
  }
}
    `;

/**
 * __useGetAllFilesByBugQuery__
 *
 * To run a query within a React component, call `useGetAllFilesByBugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFilesByBugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFilesByBugQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllFilesByBugQuery(baseOptions: Apollo.QueryHookOptions<GetAllFilesByBugQuery, GetAllFilesByBugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFilesByBugQuery, GetAllFilesByBugQueryVariables>(GetAllFilesByBugDocument, options);
      }
export function useGetAllFilesByBugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFilesByBugQuery, GetAllFilesByBugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFilesByBugQuery, GetAllFilesByBugQueryVariables>(GetAllFilesByBugDocument, options);
        }
export type GetAllFilesByBugQueryHookResult = ReturnType<typeof useGetAllFilesByBugQuery>;
export type GetAllFilesByBugLazyQueryHookResult = ReturnType<typeof useGetAllFilesByBugLazyQuery>;
export type GetAllFilesByBugQueryResult = Apollo.QueryResult<GetAllFilesByBugQuery, GetAllFilesByBugQueryVariables>;
export const GetAllNotificationsDocument = gql`
    query GetAllNotifications($where: NotificationWhereInput!, $orderBy: [NotificationOrderByWithRelationInput!]) {
  notifications(orderBy: $orderBy, where: $where) {
    id
    title
    isRead
    sender {
      id
      first_name
      last_name
      email
      avatar
    }
    description
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetAllNotificationsQuery__
 *
 * To run a query within a React component, call `useGetAllNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNotificationsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetAllNotificationsQuery(baseOptions: Apollo.QueryHookOptions<GetAllNotificationsQuery, GetAllNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNotificationsQuery, GetAllNotificationsQueryVariables>(GetAllNotificationsDocument, options);
      }
export function useGetAllNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNotificationsQuery, GetAllNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNotificationsQuery, GetAllNotificationsQueryVariables>(GetAllNotificationsDocument, options);
        }
export type GetAllNotificationsQueryHookResult = ReturnType<typeof useGetAllNotificationsQuery>;
export type GetAllNotificationsLazyQueryHookResult = ReturnType<typeof useGetAllNotificationsLazyQuery>;
export type GetAllNotificationsQueryResult = Apollo.QueryResult<GetAllNotificationsQuery, GetAllNotificationsQueryVariables>;
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
export const GetBugDatasDocument = gql`
    query GetBugDatas($where: BugWhereUniqueInput!) {
  bug(where: $where) {
    id
    number
    title
    status
    severity
    Website {
      id
      name
      url
      logo
      isPreview
    }
    File {
      id
      name
      path
    }
    priority
    description
    user {
      first_name
      last_name
      email
      avatar
    }
  }
}
    `;

/**
 * __useGetBugDatasQuery__
 *
 * To run a query within a React component, call `useGetBugDatasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBugDatasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBugDatasQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetBugDatasQuery(baseOptions: Apollo.QueryHookOptions<GetBugDatasQuery, GetBugDatasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBugDatasQuery, GetBugDatasQueryVariables>(GetBugDatasDocument, options);
      }
export function useGetBugDatasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBugDatasQuery, GetBugDatasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBugDatasQuery, GetBugDatasQueryVariables>(GetBugDatasDocument, options);
        }
export type GetBugDatasQueryHookResult = ReturnType<typeof useGetBugDatasQuery>;
export type GetBugDatasLazyQueryHookResult = ReturnType<typeof useGetBugDatasLazyQuery>;
export type GetBugDatasQueryResult = Apollo.QueryResult<GetBugDatasQuery, GetBugDatasQueryVariables>;
export const AllNotificationsDocument = gql`
    subscription AllNotifications {
  normalSubscription {
    id
    message
    date
  }
}
    `;

/**
 * __useAllNotificationsSubscription__
 *
 * To run a query within a React component, call `useAllNotificationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAllNotificationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllNotificationsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useAllNotificationsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<AllNotificationsSubscription, AllNotificationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<AllNotificationsSubscription, AllNotificationsSubscriptionVariables>(AllNotificationsDocument, options);
      }
export type AllNotificationsSubscriptionHookResult = ReturnType<typeof useAllNotificationsSubscription>;
export type AllNotificationsSubscriptionResult = Apollo.SubscriptionResult<AllNotificationsSubscription>;
export const DynamicTopicDocument = gql`
    subscription DynamicTopic {
  subscriptionWithFilterToDynamicTopic(topic: "FOO_MESSAGES") {
    id
    message
  }
}
    `;

/**
 * __useDynamicTopicSubscription__
 *
 * To run a query within a React component, call `useDynamicTopicSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDynamicTopicSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDynamicTopicSubscription({
 *   variables: {
 *   },
 * });
 */
export function useDynamicTopicSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DynamicTopicSubscription, DynamicTopicSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<DynamicTopicSubscription, DynamicTopicSubscriptionVariables>(DynamicTopicDocument, options);
      }
export type DynamicTopicSubscriptionHookResult = ReturnType<typeof useDynamicTopicSubscription>;
export type DynamicTopicSubscriptionResult = Apollo.SubscriptionResult<DynamicTopicSubscription>;
export const EvenNotificationsDocument = gql`
    subscription EvenNotifications {
  subscriptionWithFilter {
    id
    message
    date
  }
}
    `;

/**
 * __useEvenNotificationsSubscription__
 *
 * To run a query within a React component, call `useEvenNotificationsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useEvenNotificationsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEvenNotificationsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useEvenNotificationsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<EvenNotificationsSubscription, EvenNotificationsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<EvenNotificationsSubscription, EvenNotificationsSubscriptionVariables>(EvenNotificationsDocument, options);
      }
export type EvenNotificationsSubscriptionHookResult = ReturnType<typeof useEvenNotificationsSubscription>;
export type EvenNotificationsSubscriptionResult = Apollo.SubscriptionResult<EvenNotificationsSubscription>;