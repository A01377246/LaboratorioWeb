import { juegos } from "../datos/juegos";
export const getGamesBySearch = (busqueda = "") => {
  if (busqueda === "") {
    return [];
  }
  return juegos.filter((juego) =>
    juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
};
