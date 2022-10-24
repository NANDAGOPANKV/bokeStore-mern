import React from 'react'
//axios
import axios from 'axios'
import { useLayoutEffect } from 'react'
// components
import { Card } from '../components/Card'
import { useState } from 'react'
// react loders
import { PulseLoader } from 'react-spinners'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'


// url
const DataURL = 'http://localhost:8003/books'

export const Home = () => {
  const [books, setBooks] = useState([])
  const handleFetData = async () => {
    return await axios.get(DataURL).then((res) => res.data?.books).catch((err) => {
      console.log(err);
    })
  }

  useLayoutEffect(() => {
    handleFetData().then((bookData) => setBooks(bookData))
  }, [])

  console.log(books);

  return (
    <>
      <div className='bg-slate-50 max-w-[2400px] min-h-[90vh] p-8 m-2 '>
        <Link to='/create'><button className='my-4'><GrAdd size={40} /></button></Link>
        <div className=' bg-white mx-auto w-full grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4'>
          {
            books.length === 0 ?
              <div className='flex items-center justify-center text-center  w-full h-full'>
                <PulseLoader />
              </div>
              :
              books?.map((data, index) => {
                return (
                  <Card key={index} data={data} />
                )
              })
          }
        </div>
      </div>
    </>
  )
}
