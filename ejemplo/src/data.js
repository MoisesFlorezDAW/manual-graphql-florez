// Datos de ejemplo en memoria. En un proyecto real vendrían de una base de datos.
export const autores = [
  { id: "1", nombre: "Gabriel García Márquez" },
  { id: "2", nombre: "Isabel Allende" },
  { id: "3", nombre: "Julio Cortázar" },
];

export const libros = [
  { id: "1", titulo: "Cien años de soledad", anio: 1967, leido: true, autorId: "1" },
  { id: "2", titulo: "La casa de los espíritus", anio: 1982, leido: false, autorId: "2" },
  { id: "3", titulo: "Rayuela", anio: 1963, leido: false, autorId: "3" },
  { id: "4", titulo: "El amor en los tiempos del cólera", anio: 1985, leido: false, autorId: "1" },
];
