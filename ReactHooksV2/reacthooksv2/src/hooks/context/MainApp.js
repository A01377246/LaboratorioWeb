import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";
export const MainApp = () => {
  //Utilizamos useState para mantener un usuario y compartirlo con los demás componentes por medio del Context.
  // El estado inicial es un objeto vacío.
  const [user, setUser] = useState({});
  return (
    <>
      {/* Envolvemos a AppRouter con el UserContext.
 Con el atributo 'value' podemos establecer el valor que podemos compartir con los demás
 Componentes.
 */}
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <AppRouter />
      </UserContext.Provider>
    </>
  );
};
