import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props:any) => {
  console.log("props ==>",props.data.products)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        props.products.map((item:any) =>{
          <h5>{item.title}</h5>
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const Items = await fetch('https://dummyjson.com/products');
  const ResItems = await Items.json()
  return {
    props:ResItems
  }
}


export default Home
