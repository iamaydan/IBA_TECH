import React from "react";

export const LastSection = () => {
  return (
    <div>
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
};
