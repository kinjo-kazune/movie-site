"use client"
import { Inter } from 'next/font/google'
import { Layout } from "./components/templates/Layout"
import layout from "./styles/style.module.css"
import Link from 'next/link'
import Showcase from "./components/slideshow"
import images from "../data/images.json"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <div className={layout.subHeader}>
          <div className={layout.headerBody}>
            <Link href="">
              <img src="/images/theater1.jpg" alt="シネマQ" />
            </Link>
            <Link href="">
              <img src="/images/theater2.jpg" alt="シネマライカム" />
            </Link>
            <Link href="">
              <img src="/images/theater3.jpg" alt="ミハマ7プレックス" />
            </Link>
            <Link href="">
              <img src="/images/theater4.jpg" alt="サザンプレックス" />
            </Link>
            <Link href="">
              <img src="/images/theater5.jpg" alt="シネマパレット" />
            </Link>
            <Link href="">
              <img src="/images/theater6.jpg" alt="シネマプラザハウス" />
            </Link>
          </div>
        </div>
        <div>
          <div className={layout.swiperContainer}>
            {/* <div className={layout.swiperWrapper}><Showcase sec={5000} images={images.url_list} /></div> */}
          </div>
        </div>

      </Layout>
    </>
  )
}
