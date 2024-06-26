import "./App.css"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nada para ver aqui!</h2>
      <p>
        <Link to="/">Ir para a página inicial</Link>
      </p>
    </div>
  );
}

