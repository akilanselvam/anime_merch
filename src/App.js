import Home from "./routes/home/home.component.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/NavBar/NavBar.Component.jsx";
import Authentication from "./routes/authentication/authentication.route.jsx";
const Shop = () => {
  return <h1>This is the Header for the Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
