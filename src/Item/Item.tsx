import { Button } from "@material-ui/core";
import { useState } from "react";

// Types
import { CartItemType } from "../App";

// STyles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
      </div>
      {openDetail ? (
        <div>
          <p>{item.description}</p>
        </div>
      ) : null}
      <Button onClick={() => setOpenDetail(!openDetail)}>Voir plus</Button>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
