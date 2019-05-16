import { GraphQLServer } from 'graphql-yoga';

//Type definition (Schema)
//Scalar types - ID, String, Int, Boolean, Float

const typeDefs = `
  type Query {
    id: ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
  }
`;

//Resolver
const resolvers = {
  Query: {
    id() {
      return 'abc123';
    },
    name() {
      return 'Shashank';
    },
    age() {
      return 26;
    },
    employed() {
      return false;
    },
    gpa() {
      return 4.5;
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is up');
});
