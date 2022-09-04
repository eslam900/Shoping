import React from "react";
import { data } from "../data/data";
import CardShop from "./CardShop";

const ShopCard = () => {
  return (
    <div className=" container d-flex flex-wrap align-items-center mt-5 justify-content-center p-0">
      {data.map((item) => (
        <CardShop key={item.id} item={item} id={item.id} />
      ))}
    </div>
  );
};

export default ShopCard;
