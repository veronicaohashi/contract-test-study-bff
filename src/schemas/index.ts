import "graphql-import-node";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "apollo-server-express";
import DoggoResolver from "./doggo/resolver"
import * as typeDefs from "./doggo/schema.graphql"

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers: DoggoResolver
});

export default schema;