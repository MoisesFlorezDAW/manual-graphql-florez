import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

// Un servidor = esquema + resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Arranca el servidor HTTP en el puerto 4000
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Servidor GraphQL listo en ${url}`);
