import { FC } from "react";
import { Metadata } from 'next'
import HeaderNav from '@/app/components/Header/HeaderNav'
import Footer from '@/app/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'douyin App',
}

const Page: FC = () => {
  return <>
    <HeaderNav></HeaderNav>
    <main></main>
    <Footer></Footer>
  </>;
};

export default Page;
