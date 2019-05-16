import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    posts: Posts!
  }

  type Posts {
    id: ID!
    title: String!
    body: String
    published: Boolean!
  }
`;

const resolvers = {
  Query: {
    posts() {
      return {
        id: '123123',
        title: 'Happy birthday',
        published: true
      };
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
