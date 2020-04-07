import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Layout2 from "./layout2";

function Layout() {
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
            <div className="shopping-cart">
              <div className="shopping-cart-icon">
                <GiShoppingCart />
              </div>
              <div className="shopping-cart-text">Cart (0)</div>
            </div>
          </div>
        </div>
      </header>

      <header className="second-line-container">
        <div className="second-line">
          <a className="page-logo" href="#">
            <img src={require("../img/Logo.png")} />
          </a>
          <nav className="navbar">
            <a className="navbar-item" href="#">
              HOME
            </a>
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

      <section className="headline">
        <img src={require("../img/img1.png")} />
        <a className="leftarr" href="#">
          <AiOutlineLeft />
        </a>
        <img src={require("../img/img22.jpg")} />
        <div className="bottom-line">
          <div className="title-bottom">
            MUSIC EVENT WITH DJ STARTING AT 20.00 ON AUGUST 15TH
          </div>
        </div>
        <img src={require("../img/img3.png")} />
        <a className="rightarr" href="#">
          <AiOutlineRight />
        </a>
      </section>

      <section className="latest-albums">
        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="seperator"></div>

        <div className="latest-albums-title">
          WELCOME TO <span className="musica">MUSICA, </span>
          CHECK OUR LATEST ALBUMS
        </div>

        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="seperator"></div>

        <div className="features">
          <div className="features-item-black">
            <div className="features-title">
              <img src={require("../img/iconci.png")} />
              CHECK OUR CD COLLECTION
            </div>
            <div className="features-text">
              Donec pede justo, fringilla vel, al, vulputate eget, arcu. In enim
              justo, lorem ipsum.
            </div>
          </div>
          <div className="features-item-red">
            <div className="features-title">
              <img src={require("../img/iconhe.png")} />
              LISTEN BEFORE PURCHASE
            </div>
            <div className="features-text">
              Donec pede justo, fringilla vel, al, vulputate eget, arcu. In enim
              justo, lorem ipsum.
            </div>
          </div>
          <div className="features-item-black">
            <div className="features-title">
              <img src={require("../img/iconev.png")} />
              UPCOMING EVENTS
            </div>
            <div className="features-text">
              Donec pede justo, fringilla vel, al, vulputate eget, arcu. In enim
              justo, lorem ipsum.
            </div>
          </div>
        </div>
      </section>

      <section className="latest-arrivals">
        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="latest-arrivals-title">LATEST ARRIVALS IN MUSICA</div>
        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="seperator"></div>

        <Layout2 />
      </section>

      <section className="our-publishers">
        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="seperator"></div>

        <div className="publishers-title">OUR MOST IMPORTANT PUBLISHERS</div>

        <div className="seperator"></div>
        <div className="seperator"></div>
        <div className="seperator"></div>

        <div className="publishers-logos">
          <div className="publishers-item">
            <img src={require("../img/pub1.png")} />
          </div>
          <div className="publishers-item">
            <img src={require("../img/pub2.png")} />
          </div>
          <div className="publishers-item">
            <img src={require("../img/pub3.png")} />
          </div>
          <div className="publishers-item">
            <img src={require("../img/pub4.png")} />
          </div>
          <div className="publishers-item">
            <img src={require("../img/pub5.png")} />
          </div>
          <div className="publishers-item">
            <img src={require("../img/pub6.png")} />
          </div>
        </div>
      </section>

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
}

export default Layout;
