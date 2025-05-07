import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { Product as IProduct } from 'use-shopping-cart/core'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        const { products } = req.body as { products: IProduct[] };
        
        if (req.method !== "POST") {
            return res.status(405).json({ error: 'Method not allowed' })
        }

        if (!products) {
            return res.status(400).json({ error: 'Products not found.'})
        }

        products.forEach(product => {
            if (!product.priceId) {
                return res.status(400).json({ error: 'Price not found.'})
            }
            if (!product.quantity) {
                return res.status(400).json({ error: 'Quantity not found.'})
            }
        });

        const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
        
        const cancelUrl = `${process.env.NEXT_URL}/`;

        const checkoutSession = await stripe.checkout.sessions.create({
            success_url: successUrl,
            cancel_url: cancelUrl,
            mode: 'payment',
            line_items: products.map((product) => ({
                price: product.priceId,
                quantity: product.quantity,
            })),
        })

        return res.status(201).json({
            checkoutUrl: checkoutSession.url
        })
    } catch (error) {
        console.error(error)
    }
}