import React from "react";
import { data } from "../data/data";
import CardShop from "./CardShop";

const ShopCard = () => {
  return (
    <div className=" container-sm d-flex flex-wrap gap-5 align-items-center mt-5 justify-content-center">
      {data.map((item) => (
        <CardShop key={item.id} item={item} id={item.id} />
      ))}
    </div>
  );
};

export default ShopCard;
