import { AppProps } from "next/app"
import Image from "next/image";

import ShopCartProvider from "@/providers/ShopCartProvider";
import { ShopCartComp } from "@/components/ShopCartComp";

import { globalStyles } from "@/styles/global"
import { Container, Header } from "@/styles/pages/app";

import logoImg from '@/assets/logo.svg';
import Link from "next/link";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopCartProvider>
      <Container>
        <Header>
            <Link href='/'><Image src={logoImg} alt="" /></Link>
            <ShopCartComp /> 
        </Header>
        <Component {...pageProps} />
      </Container>
    </ShopCartProvider>
  )
}