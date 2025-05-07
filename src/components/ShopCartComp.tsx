"use client";

import { useState, useEffect } from 'react'
import axios from 'axios';
import { useShoppingCart } from "use-shopping-cart";
import * as Dialog from '@radix-ui/react-dialog';
import { Handbag, X } from 'phosphor-react';

import { CartComp } from "./CartComp";
import { ScrollAreaComp } from './ScrollAreaComp';

import { ShopCartButtom, ShopCartDetails, ShopCartModal, ShopCartTotals, ShopCartButtonBuy, ShopCartClose, ShopCartTitle } from '@/styles/components/ShopCartComp';

export function ShopCartComp() {
  const { cartDetails, formattedTotalPrice, totalPrice, handleCartClick, cartCount } = useShoppingCart()

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartComp key={entry.id} entry={entry}/>
  ))

  const cartCheckout = Object.values(cartDetails ?? {}).map((entry) => (
    {...entry}
  ))

  const [isClient, setIsClient] = useState(false)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: cartCheckout
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
      setIsCreatingCheckoutSession(false);
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout!');
    }
  }
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ShopCartButtom className="relative" disabled={cartCount === 0} onClick={() => handleCartClick()}>
          <Handbag size={24} weight="bold" />
          {cartCount && cartCount > 0 ? (
            <div><p>{cartCount}</p></div>
          ) : "" }
        </ShopCartButtom>
      </Dialog.Trigger>

      <Dialog.Portal>
			  <Dialog.Overlay />
        <ShopCartModal>
          <ShopCartTitle>Sacola de compras</ShopCartTitle>
          {cartCount === 0 ? <p>Sacola vazia.</p> : " "}
          {cartCount && cartCount > 0 ? (
            <ShopCartDetails>
              <ScrollAreaComp>
                {cartEntries}
              </ScrollAreaComp>
              <ShopCartTotals>
                <div><span>Quantidade</span><span>{cartCount} {cartCount==1 ? 'item': 'itens'}</span></div>
                <div><span>Total</span><span>{isClient ? formattedTotalPrice: totalPrice}</span></div>
                <ShopCartButtonBuy disabled={isCreatingCheckoutSession} onClick={handleCheckout}>Finalizar compra</ShopCartButtonBuy>
              </ShopCartTotals>
            </ShopCartDetails>
          ) : " "}
          <ShopCartClose>
            <X size={24} weight="bold" />
          </ShopCartClose>
        </ShopCartModal>
      </Dialog.Portal>
    </Dialog.Root>
    
  )
}