import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as AmerchLog } from "../../assets/crown.svg";
import "./navigation.styles.scss";
const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <AmerchLog className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
