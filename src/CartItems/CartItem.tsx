import Button from "@mui/material/Button";
import React from "react";
import { CartItemType } from "../api/api";
import { Wrapper } from "../CartItems/CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.titlte}</h3>
      <div className="imformation">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          {" "}
          -{" "}
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          {" "}
          +{" "}
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.titlte} />
  </Wrapper>
);

export default CartItem;
