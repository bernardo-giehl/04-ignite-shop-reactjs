import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"
import { CartEntry } from "use-shopping-cart/core"

import { CartContainer, CartDetails, CartImageContainer, CartButtons } from "@/styles/components/CartComp"
import productImg from '@/assets/product.svg';
import { Minus, Plus } from "phosphor-react";

export function CartComp({ entry }: { entry: CartEntry }) {
  const { incrementItem, decrementItem, removeItem } = useShoppingCart();
  
  const handleIncrementItem = () => {
    incrementItem(entry.id);
  }
    
  const handleDecrementItem = () => {
    if (entry.quantity > 1) {
      decrementItem(entry.id);
    }
  }

  return (
    <CartContainer>
      <CartImageContainer>
        <Image src={entry.imageUrl ? entry.imageUrl : productImg} width={100} height={100} alt={(entry.description ? entry.description : " ")} />
      </CartImageContainer>
      <CartDetails>
        <p>{entry.name}</p>
        <span>{entry.quantity} x {entry.formattedPrice} = <span>{entry.formattedValue}</span></span>
        <CartButtons>
          <button onClick={() => handleIncrementItem()}><Plus size={12} weight="bold" /></button>
          <button onClick={() => handleDecrementItem()}><Minus size={12} weight="bold" /></button>
          <button onClick={() => removeItem(entry.id)}>Remover</button>
        </CartButtons>
      </CartDetails>
    </CartContainer>
  )
}