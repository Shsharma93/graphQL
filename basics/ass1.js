import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    ratings: Float
    inStock: Boolean!

  }
`;

const resolvers = {
  Query: {
    title() {
      return 'Wallet';
    },
    price() {
      return 9.6;
    },
    releaseYear() {
      return 2019;
    },
    ratings() {
      return 4.0;
    },
    inStock() {
      return false;
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
