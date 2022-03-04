import "./Home.css";
import caja from "./package-variant-closed.svg";
import tienda from "./store.svg";
import { DarkMode } from "../../context/DarkModeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <>
      <div>
        <section className={darkMode ? "homeOrden--BgColorDark" : "homeOrden"}>
          <div className="nombres">
            <img className=" objetos" src={caja} />
            <p className="objetos">123</p>
            <p className="objetos">Productos</p>
          </div>
          <div className="botones">
            <Link to="/products">
              <button className="btnLst">Ver Listado</button>
            </Link>
            <Link to="/products/new">
              <button className="addPrd">Agregar Producto</button>
            </Link>
          </div>
        </section>
        <section className="homeOrden">
          <div className="nombres">
            <img className="objetos" src={tienda} />
            <p className="objetos">10</p>
            <p className="objetos">Tiendas</p>
          </div>
          <div className="botones">
          <Link to="*">
            <button className="btnLst">Ver Listado</button>
          </Link>
          <Link to="*">
            <button className="addPrd">Agregar Tienda</button>
          </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
