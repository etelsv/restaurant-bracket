module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCuisine {
  count: Int!
}

type AggregateRestaurant {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cuisine {
  id: ID!
  name: String!
}

type CuisineConnection {
  pageInfo: PageInfo!
  edges: [CuisineEdge]!
  aggregate: AggregateCuisine!
}

input CuisineCreateInput {
  name: String!
}

input CuisineCreateOneInput {
  create: CuisineCreateInput
  connect: CuisineWhereUniqueInput
}

type CuisineEdge {
  node: Cuisine!
  cursor: String!
}

enum CuisineOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CuisinePreviousValues {
  id: ID!
  name: String!
}

type CuisineSubscriptionPayload {
  mutation: MutationType!
  node: Cuisine
  updatedFields: [String!]
  previousValues: CuisinePreviousValues
}

input CuisineSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CuisineWhereInput
  AND: [CuisineSubscriptionWhereInput!]
  OR: [CuisineSubscriptionWhereInput!]
  NOT: [CuisineSubscriptionWhereInput!]
}

input CuisineUpdateDataInput {
  name: String
}

input CuisineUpdateInput {
  name: String
}

input CuisineUpdateManyMutationInput {
  name: String
}

input CuisineUpdateOneRequiredInput {
  create: CuisineCreateInput
  update: CuisineUpdateDataInput
  upsert: CuisineUpsertNestedInput
  connect: CuisineWhereUniqueInput
}

input CuisineUpsertNestedInput {
  update: CuisineUpdateDataInput!
  create: CuisineCreateInput!
}

input CuisineWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CuisineWhereInput!]
  OR: [CuisineWhereInput!]
  NOT: [CuisineWhereInput!]
}

input CuisineWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createCuisine(data: CuisineCreateInput!): Cuisine!
  updateCuisine(data: CuisineUpdateInput!, where: CuisineWhereUniqueInput!): Cuisine
  updateManyCuisines(data: CuisineUpdateManyMutationInput!, where: CuisineWhereInput): BatchPayload!
  upsertCuisine(where: CuisineWhereUniqueInput!, create: CuisineCreateInput!, update: CuisineUpdateInput!): Cuisine!
  deleteCuisine(where: CuisineWhereUniqueInput!): Cuisine
  deleteManyCuisines(where: CuisineWhereInput): BatchPayload!
  createRestaurant(data: RestaurantCreateInput!): Restaurant!
  updateRestaurant(data: RestaurantUpdateInput!, where: RestaurantWhereUniqueInput!): Restaurant
  updateManyRestaurants(data: RestaurantUpdateManyMutationInput!, where: RestaurantWhereInput): BatchPayload!
  upsertRestaurant(where: RestaurantWhereUniqueInput!, create: RestaurantCreateInput!, update: RestaurantUpdateInput!): Restaurant!
  deleteRestaurant(where: RestaurantWhereUniqueInput!): Restaurant
  deleteManyRestaurants(where: RestaurantWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateManyVotes(data: VoteUpdateManyMutationInput!, where: VoteWhereInput): BatchPayload!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  cuisine(where: CuisineWhereUniqueInput!): Cuisine
  cuisines(where: CuisineWhereInput, orderBy: CuisineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cuisine]!
  cuisinesConnection(where: CuisineWhereInput, orderBy: CuisineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CuisineConnection!
  restaurant(where: RestaurantWhereUniqueInput!): Restaurant
  restaurants(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Restaurant]!
  restaurantsConnection(where: RestaurantWhereInput, orderBy: RestaurantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RestaurantConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Restaurant {
  id: ID!
  name: String!
  cuisine: Cuisine!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  bracketLocation: Int!
}

type RestaurantConnection {
  pageInfo: PageInfo!
  edges: [RestaurantEdge]!
  aggregate: AggregateRestaurant!
}

input RestaurantCreateInput {
  name: String!
  cuisine: CuisineCreateOneInput!
  votes: VoteCreateManyWithoutRestaurantInput
  bracketLocation: Int!
}

input RestaurantCreateOneWithoutVotesInput {
  create: RestaurantCreateWithoutVotesInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantCreateWithoutVotesInput {
  name: String!
  cuisine: CuisineCreateOneInput!
  bracketLocation: Int!
}

type RestaurantEdge {
  node: Restaurant!
  cursor: String!
}

enum RestaurantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  bracketLocation_ASC
  bracketLocation_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RestaurantPreviousValues {
  id: ID!
  name: String!
  bracketLocation: Int!
}

type RestaurantSubscriptionPayload {
  mutation: MutationType!
  node: Restaurant
  updatedFields: [String!]
  previousValues: RestaurantPreviousValues
}

input RestaurantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RestaurantWhereInput
  AND: [RestaurantSubscriptionWhereInput!]
  OR: [RestaurantSubscriptionWhereInput!]
  NOT: [RestaurantSubscriptionWhereInput!]
}

input RestaurantUpdateInput {
  name: String
  cuisine: CuisineUpdateOneRequiredInput
  votes: VoteUpdateManyWithoutRestaurantInput
  bracketLocation: Int
}

input RestaurantUpdateManyMutationInput {
  name: String
  bracketLocation: Int
}

input RestaurantUpdateOneRequiredWithoutVotesInput {
  create: RestaurantCreateWithoutVotesInput
  update: RestaurantUpdateWithoutVotesDataInput
  upsert: RestaurantUpsertWithoutVotesInput
  connect: RestaurantWhereUniqueInput
}

input RestaurantUpdateWithoutVotesDataInput {
  name: String
  cuisine: CuisineUpdateOneRequiredInput
  bracketLocation: Int
}

input RestaurantUpsertWithoutVotesInput {
  update: RestaurantUpdateWithoutVotesDataInput!
  create: RestaurantCreateWithoutVotesInput!
}

input RestaurantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  cuisine: CuisineWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  bracketLocation: Int
  bracketLocation_not: Int
  bracketLocation_in: [Int!]
  bracketLocation_not_in: [Int!]
  bracketLocation_lt: Int
  bracketLocation_lte: Int
  bracketLocation_gt: Int
  bracketLocation_gte: Int
  AND: [RestaurantWhereInput!]
  OR: [RestaurantWhereInput!]
  NOT: [RestaurantWhereInput!]
}

input RestaurantWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  cuisine(where: CuisineSubscriptionWhereInput): CuisineSubscriptionPayload
  restaurant(where: RestaurantSubscriptionWhereInput): RestaurantSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type Vote {
  id: ID!
  createdAt: DateTime!
  voter: String!
  token: String!
  restaurant: Restaurant!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  voter: String!
  token: String!
  restaurant: RestaurantCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutRestaurantInput {
  create: [VoteCreateWithoutRestaurantInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutRestaurantInput {
  voter: String!
  token: String!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  voter_ASC
  voter_DESC
  token_ASC
  token_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VotePreviousValues {
  id: ID!
  createdAt: DateTime!
  voter: String!
  token: String!
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  voter: String
  token: String
  restaurant: RestaurantUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyMutationInput {
  voter: String
  token: String
}

input VoteUpdateManyWithoutRestaurantInput {
  create: [VoteCreateWithoutRestaurantInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutRestaurantInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutRestaurantInput!]
}

input VoteUpdateWithoutRestaurantDataInput {
  voter: String
  token: String
}

input VoteUpdateWithWhereUniqueWithoutRestaurantInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutRestaurantDataInput!
}

input VoteUpsertWithWhereUniqueWithoutRestaurantInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutRestaurantDataInput!
  create: VoteCreateWithoutRestaurantInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  voter: String
  voter_not: String
  voter_in: [String!]
  voter_not_in: [String!]
  voter_lt: String
  voter_lte: String
  voter_gt: String
  voter_gte: String
  voter_contains: String
  voter_not_contains: String
  voter_starts_with: String
  voter_not_starts_with: String
  voter_ends_with: String
  voter_not_ends_with: String
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  restaurant: RestaurantWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    