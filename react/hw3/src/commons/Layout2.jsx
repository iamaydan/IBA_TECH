import React, { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/cart";

const FavLink = styled(Link)`
  background-color: #cc3333;
  padding: 18px 20px;
  margin-left: 20px;
  border-radius: 2px;
  box-shadow: 1px 3px 10px 2px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const Container = styled.div`
  width: 960px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const Layout2 = ({ children }) => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div>
      <header className="first-line">
        <div className="first-line-container">
          <div className="icon-container">
            <a href="https://facebook.com">
              <img src={require("../img/iconfa.png")} />
            </a>
            <a href="https://dribbble.com">
              <img src={require("../img/icondr.png")} />
            </a>
            <a href="https://twitter.com">
              <img src={require("../img/icontw.png")} />
            </a>
            <a href="https://gmail.com">
              <img src={require("../img/iconma.png")} />
            </a>
            <a href="https://vimeo.com">
              <img src={require("../img/iconvi.png")} />
            </a>
          </div>
          <div className="login-container">
            <a href="#">Login / Register</a>
            <Link className="shopping-cart" to="/cart">
              <div className="shopping-cart-icon">
                <GiShoppingCart />
              </div>
              <div className="shopping-cart-text">
                Cart({cartProducts.length}){" "}
              </div>
            </Link>
            <FavLink to="/favorites">★ Favorites (0)</FavLink>
          </div>
        </div>
      </header>

      <header className="second-line-container">
        <div className="second-line">
          <Link className="page-logo" to="/products">
            <img src={require("../img/Logo.png")} />
          </Link>
          <nav className="navbar">
            <Link className="navbar-item" to="/products">
              HOME
            </Link>
            <a className="navbar-item" href="#">
              CD's
            </a>
            <a className="navbar-item" href="#">
              DVD's
            </a>
            <a className="navbar-item" href="#">
              NEWS
            </a>
            <a className="navbar-item" href="#">
              PORTFOLIO
            </a>
            <a className="navbar-item" href="#">
              CONTACT US
            </a>
          </nav>
        </div>
      </header>

      <Container>{children}</Container>

      <footer>
        <div className="foo-container">
          <div className="about-us">
            <p> Little About Us </p>
            <div className="about-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              placeat reiciendis in atque, ipsa quaerat dolor. In nisi facere
              atque.
            </div>
          </div>
          <div className="our-archives">
            <p>Our Archives</p>
            <div className="archive">March 2020</div>
            <div className="seperator"></div>

            <div className="archive">February 2020</div>
            <div className="seperator"></div>
            <div className="archive">January 2020</div>
            <div className="seperator"></div>
          </div>
          <div className="soc-icons">
            <p>Socialize With Us</p>
            <a href="https://facebook.com">
              <img src={require("../img/iconfa.png")} />
            </a>
            <a href="https://dribbble.com">
              <img src={require("../img/icondr.png")} />
            </a>
            <a href="https://twitter.com">
              <img src={require("../img/icontw.png")} />
            </a>
            <a href="https://gmail.com">
              <img src={require("../img/iconma.png")} />
            </a>
            <a href="https://vimeo.com">
              <img src={require("../img/iconvi.png")} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
