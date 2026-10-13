// El esquema describe QUÉ datos existen y QUÉ operaciones se pueden hacer.
// Es el "contrato" entre el cliente y el servidor.
export const typeDefs = `#graphql
  # Tipo de objeto: un autor
  type Autor {
    id: ID!
    nombre: String!
    libros: [Libro!]!      # relación: un autor tiene varios libros
  }

  # Tipo de objeto: un libro
  type Libro {
    id: ID!
    titulo: String!
    anio: Int
    leido: Boolean!
    autor: Autor!          # relación: un libro tiene un autor
  }

  # Query = operaciones de LECTURA
  type Query {
    libros(soloNoLeidos: Boolean): [Libro!]!
    libro(id: ID!): Libro
    autores: [Autor!]!
  }

  # Mutation = operaciones de ESCRITURA
  type Mutation {
    anadirLibro(titulo: String!, anio: Int, autorId: ID!): Libro!
    marcarLeido(id: ID!): Libro
  }
`;
