import { ImagemContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import axios from "axios"
import { useState } from "react"
import Head from "next/head"
import { useShoppingCart } from "use-shopping-cart"
import { Product as IProduct } from 'use-shopping-cart/core'


interface ProductProps {
    product: IProduct
}

export default function Product({ product }: ProductProps) {
    const { addItem } = useShoppingCart();
    
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true);
            
            const response = await axios.post('/api/checkout', {
                products: [product]
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
            setIsCreatingCheckoutSession(false);
        } catch (err) {
            setIsCreatingCheckoutSession(false);
            alert('Falha ao redirecionar ao checkout!');
        }
    }
   


    return (
        <>
        <Head>
        <title>{product.name + ' | Ignite Shop'}</title>
        </Head>

        <ProductContainer>
            <ImagemContainer>
                <Image src={product.imageUrl!} width={520} height={480} alt="product" />
            </ImagemContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.priceFormat}</span>

                <p>{product.description}</p>
                <div>
                    <button
                        onClick={() => addItem(product)}
                        aria-label={`Adicionar um(a) ${product.name} ao seu carrinho.`}
                    >
                        Adicionar à sacola de compras
                    </button>
                    <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
                </div>
            </ProductDetails>

        </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
    
    if (!params || !params.id) {
        return {
           redirect: {
            destination: '/',
            permanent: false,
           }
        }
    }

    const productId = params.id;
    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price
    
   return {
    props: {
        product: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            description: product.description,
            price: price.unit_amount,
            priceFormat: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format((!price.unit_amount ? 0 : price.unit_amount) / 100),
            priceId: price.id,
            quantity: 1
        }
    },
    revalidate: 60 * 60 * 1
   }
}