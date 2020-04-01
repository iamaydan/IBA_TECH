import React from "react";
import { useState, useEffect } from "react";

function Layout2() {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await fetch("/info.json");
    const newData = await res.json();
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="products-container">
      {data.map(({ name, price, img, url, number }) => (
        <div className="product-item">
          <a href={url}>
            <img className="prod-img" src={img} alt={name} />
          </a>
          <div className="prod-properties">
            <div className="prod-title">
              <a className="prod-name" href={url}>
                {name}
              </a>
            </div>
            <div className="prod-info">
              <div className="prod-price">HOT {price}</div>
              <button className="add-btn">Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Layout2;
