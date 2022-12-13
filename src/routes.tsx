import Home from "pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IDados from "interfaces/IDadosSemana";
import Itens from "components/Itens";
import Previsao from "pages/Previsao";
import { useState } from "react";

export default function AppRouter() {
  const [inputCidade, setCidade] = useState("");
  const [inputEstado, setEstado] = useState("");
  const [isShown, setIsShown] = useState(false);

  // console.log(`teste no routes cidade: ${inputCidade}, estado: ${setCidade}`);

  return (
    <main>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isShown={isShown}
                inputCidade={inputCidade}
                inputEstado={inputEstado}
                setCidade={setCidade}
                setEstado={setEstado}
                setIsShown={setIsShown}
              />
            }
          />
          <Route
            path="previsao"
            element={
              <Previsao
                inputEstado={inputEstado}
                inputCidade={inputCidade}
                isShown={isShown}
                setCidade={setCidade}
                setEstado={setEstado}
                setIsShown={setIsShown}
              />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}
