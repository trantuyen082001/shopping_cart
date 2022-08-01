import React from "react";
import Button from "@mui/material/Button";
import { type } from "@testing-library/user-event/dist/type";
import { CartItemType } from "../api/api";
import { Wrapper } from "../items/Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.titlte} />
    <div>
      <h3>{item.titlte}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to Card</Button>
  </Wrapper>
);

export default Item;
