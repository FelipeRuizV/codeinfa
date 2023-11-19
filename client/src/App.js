import React, { useState, useEffect } from "react";
import { Header } from "./componentes/Header";
import { Login } from "./componentes/Login";
import { BrowserRouter as Route } from "react-router-dom";
import 'boxicons';
import { Paginas } from "./componentes/Paginas";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Limpia la información de autenticación en localStorage
    localStorage.removeItem("isLoggedIn");
    // Cambia el estado de autenticación a falso
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Si estás utilizando localStorage, puedes verificar la existencia de la información de autenticación aquí
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  return (


    <Route>
      {isLoggedIn ? (
        <div className="App">
          <Header onLogout={handleLogout} />
          <div className="main-container">
              <Paginas />
            </div>
          </div>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </Route>

  );
}


export default App;