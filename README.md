# manual-graphql-florez

Guía de arranque de **GraphQL** con **Apollo Server 5** (Node.js): qué es, cómo instalarlo y un ejemplo funcional.

- **Autor:** Moisés Flórez Vega (2º DAW)
- **Manual (PDF):** [`guia-graphql.pdf`](./guia-graphql.pdf)
- **Ejemplo:** carpeta [`/ejemplo`](./ejemplo), un catálogo de libros y autores

## Qué hace el ejemplo

Es una API GraphQL con datos en memoria que permite:

- consultar libros (con filtro de «no leídos») y autores con sus libros,
- añadir un libro nuevo (`anadirLibro`),
- marcar un libro como leído (`marcarLeido`).

## Requisitos

- [Node.js](https://nodejs.org) **20 o superior** (`node --version` para comprobarlo)
- npm (viene incluido con Node.js)

## Cómo ejecutarlo

```bash
cd ejemplo
npm install
npm start
```

Si todo va bien, la terminal muestra:

```
Servidor GraphQL listo en http://localhost:4000/
```

Abre <http://localhost:4000> en el navegador: se carga **Apollo Sandbox**, donde puedes escribir consultas y ver la documentación del esquema.

## Consultas de prueba

Pégalas en el panel *Operation* de Sandbox y pulsa el botón azul.

**Libros con su autor**

```graphql
query {
  libros {
    titulo
    anio
    autor { nombre }
  }
}
```

**Solo los libros no leídos**

```graphql
query {
  libros(soloNoLeidos: true) { id titulo }
}
```

**Añadir un libro**

```graphql
mutation {
  anadirLibro(titulo: "Ficciones", anio: 1944, autorId: "3") {
    id
    titulo
    autor { nombre }
  }
}
```

**Error controlado (el autor 99 no existe)**

```graphql
mutation {
  anadirLibro(titulo: "Prueba", autorId: "99") { id }
}
```

## Estructura

```
ejemplo/
├── package.json        # dependencias y script "start"
├── package-lock.json   # versiones exactas instaladas
└── src/
    ├── index.js        # crea y arranca el servidor Apollo
    ├── schema.js       # esquema GraphQL (tipos, queries, mutations)
    ├── resolvers.js    # funciones que devuelven los datos
    └── data.js         # datos de ejemplo en memoria
```

Los datos viven en memoria: al reiniciar el servidor vuelven a su estado inicial.

## Documentación oficial

- GraphQL: <https://graphql.org/learn/>
- Apollo Server: <https://www.apollographql.com/docs/apollo-server/getting-started>
