import { useEffect } from "react";
import { ImageContainer, CarouselContainer, SuccessContainer } from "../styles/pages/success"
import { GetServerSideProps } from "next"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import Head from "next/head"
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";

interface SuccessProps {
    customerName: string;
    quantity: number;
    products: {
        name: string;
        imageUrl: string;

    }[]
}

export default function Success({customerName, quantity, products}: SuccessProps) {
    const { clearCart } = useShoppingCart();
    
    useEffect(() => {
      clearCart();
    }, [clearCart]);

    return (
        <>
            <Head>
                <title>Compra Efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex"/>
            </Head>
        
            <SuccessContainer>
                <CarouselContainer>
                    {products.map(prod =>{
                        return (
                            <ImageContainer key={prod.name} >
                                <Image src={prod.imageUrl} width={120} height={110} alt="sds" />
                            </ImageContainer>
                        )
                    })}
                </CarouselContainer>

                <h1>Compra efetuada!</h1>

                <p>
                    Uhhul <strong>{customerName}</strong>, sua compra de 
                    {' ' + quantity + ' ' + ((quantity && quantity>1) ? 'itens' : 'item') + ' '} 
                    já {(quantity && quantity>1) ? 'estão' : 'está'} a caminho da sua casa.
                </p>

                <Link href="/">Voltar ao catalogo</Link>
            </SuccessContainer>


        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {

    if (!query.session_id) {
        return {
           redirect: {
            destination: '/',
            permanent: false,
           }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    
    if (!session || !session.customer_details || !session.line_items || !session.line_items.data[0].price) {
        return {
           redirect: {
            destination: '/',
            permanent: false,
           }
        }
    }

    const customerName = session.customer_details.name;
    var quantity = 0;
    var products: {name: string, imageUrl: string}[] = [];
    session.line_items.data.forEach(product => {
        let productResolve: Stripe.Product = product.price?.product as Stripe.Product;

        if (product.quantity && product.quantity>0) {
            quantity += product.quantity;
        }

        products.push({
            name: productResolve.name,
            imageUrl: productResolve.images[0],
        });
    });

    return {
        props: {
            customerName,
            quantity,
            products
        }
    }

}