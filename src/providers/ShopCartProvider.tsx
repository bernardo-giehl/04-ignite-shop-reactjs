"use client"

import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

export default function ShopCartProvider({ children }: { children: ReactNode }) {
    return (
        <CartProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.STRIPE_SECRET_KEY as string}
            successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
            cancelUrl={`${process.env.NEXT_URL}/`}
            currency="BRL"
            allowedCountries={["BR"]}
            billingAddressCollection={true}
            shouldPersist={true}
            language="pt-BR"
        >
            {children}
        </CartProvider>
    );
}