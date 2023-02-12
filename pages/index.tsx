import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
const style = {
  wrapper: `flex justify-center h-screen w-screen bg-gray-100 text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between h-screen`,
  sidebar: `flex flex-col justify-between h-screen w-1/6 bg-gray-800`,
  feed: `flex flex-col justify-between h-screen w-2/3 bg-gray-200`,
  widgets: `flex flex-col justify-between h-screen w-1/6 bg-gray-300`,
}

const Home: NextPage = () => {
  return (
   <div className={style.wrapper}>
    <div className={style.content}>
     
      {/* <h2>Sidebar</h2> */}
      <Sidebar />
      {/* feed */}
      <h2>feed</h2>
      {/* widgets */}
      <h2>widget</h2>
      
    </div>

   </div>
  )
}

export default Home
