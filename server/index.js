const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

server.listen(3000, (req,res) => {
  console.log('sever up on 3000')
})
const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql');


const { buildSchema } = require('graphql')
const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type RootQuery {
         events: [String!]!


    }

    type RootMutation {
        createEvent(name: String): String

    }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
  
  `),
  rootValue: {
    event: () => {
       return ['Romantic cooking', 'study all noght', 'coding all night'];
    },
    createEvent: (args) => {
      const eventName = args.name;
      return eventName;
    }
  },
  graphiql: true
}));
app.listen(3000)



