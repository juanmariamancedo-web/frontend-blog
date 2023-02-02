import Image from 'next/image'
import { Inter } from '@next/font/google'
import axios from 'axios'
import { Posts } from '@/components/posts'
import { getSearch } from './(search-layout)/prueba/page'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const res = await getSearch(1, 6)
  return (
    <div>
      <main className='pt-14 h-screen flex justify-center items-center'>
        <h1>Home Page</h1>
      </main>
      <section>
        <div className='container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 gap-3'>
          <Posts docs={res.docs}/>
        </div>
      </section>
    </div>
  )
}