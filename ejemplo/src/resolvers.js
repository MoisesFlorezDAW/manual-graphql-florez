import { GraphQLError } from "graphql";
import { autores, libros } from "./data.js";

// Los resolvers son las funciones que "rellenan" cada campo del esquema.
// Firma: (padre, argumentos, contexto) => valor
export const resolvers = {
  Query: {
    // libros(soloNoLeidos: Boolean): devuelve todos o solo los pendientes
    libros: (_padre, { soloNoLeidos }) =>
      soloNoLeidos ? libros.filter((l) => !l.leido) : libros,

    libro: (_padre, { id }) => libros.find((l) => l.id === id) ?? null,

    autores: () => autores,
  },

  Mutation: {
    anadirLibro: (_padre, { titulo, anio, autorId }) => {
      if (!autores.some((a) => a.id === autorId)) {
        throw new GraphQLError(`No existe ningún autor con id ${autorId}`, {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }
      const nuevo = {
        id: String(libros.length + 1),
        titulo,
        anio: anio ?? null,
        leido: false,
        autorId,
      };
      libros.push(nuevo);
      return nuevo;
    },

    marcarLeido: (_padre, { id }) => {
      const libro = libros.find((l) => l.id === id);
      if (!libro) return null;
      libro.leido = true;
      return libro;
    },
  },

  // Resolvers de relaciones: GraphQL los llama solo si el cliente pide ese campo.
  Libro: {
    autor: (libro) => autores.find((a) => a.id === libro.autorId),
  },
  Autor: {
    libros: (autor) => libros.filter((l) => l.autorId === autor.id),
  },
};
