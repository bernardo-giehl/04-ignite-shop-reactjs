import { GetStaticProps } from "next"
import { MouseEvent, useRef } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { Product as IProduct } from 'use-shopping-cart/core'
import { Handbag } from 'phosphor-react';

import { stripe } from "@/lib/stripe"

import { HomeContainer, HomeProduct } from "@/styles/pages/home"

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()
  const [sliderRef] = useKeenSlider({
    slides: {
      origin: "center",
      perView: 2,
      spacing: 48,
    },
  });

  const handleAddItem = (event: MouseEvent<HTMLButtonElement>, product: IProduct ) => {
    event.preventDefault();
    addItem(product);
  }

  return (  
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product =>{
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <HomeProduct className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="product"/>
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormat}</span>
                  </div>
                  <button
                      onClick={(event) => handleAddItem(event, product)}
                      aria-label={`Adicionar um(a) ${product.name} ao seu carrinho.`}
                  >
                      <Handbag size={32} weight="bold" />
                  </button>
                </footer>
              </HomeProduct>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      price: price.unit_amount,
      priceFormat: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((!price.unit_amount ? 0 : price.unit_amount) / 100),
      priceId: price.id
    }
  })


  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
} 
