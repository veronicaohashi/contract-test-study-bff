import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import schema from "./schemas";

const app = express();
app.listen(8000, ()=>{
  console.info('Graphql running on port 8000')
});

const server = new ApolloServer({
  schema,
  playground: true,
  debug: true,
  tracing: true
});

server.applyMiddleware({
  app,
  path: "/",
  cors: {
    origin: "*",
    optionsSuccessStatus: 200
  },
  bodyParserConfig: true
})

