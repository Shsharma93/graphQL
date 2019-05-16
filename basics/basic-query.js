import { GraphQLServer } from 'graphql-yoga';

//Type definition (Schema)
//Scalar types - ID, String, Int, Boolean, Float

const typeDefs = `
  type Query {
    add(numbers: [Float!]!): Float!
    greeting(name: String, position: String): String!
    grades: [Int!]!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    email: String
  }

  type Post {
    id: ID!
    title: String!
    body: String
    published: Boolean!
  }
`;

//Resolver
const resolvers = {
  Query: {
    add(parent, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0;
      }
      return args.numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    },
    grades(parent, args, ctx, info) {
      return [95, 83, 89];
    },
    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Hello ${args.name}! You are my favourite ${args.position}!`;
      } else {
        return 'Hello';
      }
    },
    me() {
      return {
        id: '12345',
        name: 'Shashank',
        age: 26
      };
    },
    post() {
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
