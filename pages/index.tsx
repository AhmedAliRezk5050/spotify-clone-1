import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../components/SideBar/SideBar'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify clone 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <SideBar />
        {/* center */}
      </main>
      <div className="">{/* player */}</div>
    </div>
  )
}

export default Home
