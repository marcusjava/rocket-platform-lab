import { Route, Routes } from "react-router-dom";
import Evento from "./pages/Evento";
import Inscricao from "./pages/Inscricao";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inscricao />} />
      <Route path="/event" element={<Evento />} />
      <Route path="/event/lesson/:slug" element={<Evento />} />
    </Routes>
  );
}
