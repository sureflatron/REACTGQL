//import { resolvers } from './resolver';
import { importSchema } from 'graphql-import';
//import { makeExecutableSchema } from 'graphql-tools';


const typeDefs = importSchema('data/schema.graphql');


export { typeDefs };