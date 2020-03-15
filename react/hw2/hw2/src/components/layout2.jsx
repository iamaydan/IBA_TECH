import React from "react";
import { useState, useEffect } from "react";

function Layout2() {
  const [data, setData] = useState({ Products: [] });
  console.log(data);
  const getData = async url => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(data => ({
      ...newData,
      Products: [...data.Products, ...newData.Products]
    }));
    console.log(data);
  };

  useEffect(() => {
    getData("../info.json");
  }, []);

  return (
    <div className="products-container">
      {data.Products.map(({ name, price, img, url, number }) => (
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
