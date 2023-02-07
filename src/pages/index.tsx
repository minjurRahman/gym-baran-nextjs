import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from 'Components/Shared/Header'
import Banner from 'Components/Home/Banner'
import HealthySide from 'Components/Home/HealthySide'
import Healthy from 'Components/Home/Healthy'
import BestWorkout from 'Components/Home/BestWorkout'
import DutationExer from 'Components/Home/DutationExer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gym baran</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-[1440px] mx-auto bg-white'>
        <Header></Header>
        <Banner></Banner>
        <HealthySide></HealthySide>
        {/* <Healthy></Healthy> */}
        <DutationExer></DutationExer>
        <BestWorkout></BestWorkout>
      </main>
    </>
  )
}
