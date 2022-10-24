import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { GrUpdate } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Card = ({ data }) => {
    const NavigateTo = useNavigate()

    const handleUpdate = (updId) => {
        console.log(updId);
        NavigateTo(`/update/${updId}`)

    }
    const handleDelete = async (updId) => {
        console.log(updId);
        await axios.delete(`http://localhost:8003/books/${updId}`).then(() => {
            alert(`Delete ${data?.name} `)
        })
            .catch((err) => {
                console.log(err.message);
            }).finally(() => {
                console.log('Working With Delete');
            })
    }


    return (
        <>
            <div className='w-full max-h-[550px] bg-slate-600 rounded-sm  p-2 flex items-center flex-col text-white sm:font-semibold md:font-bold'>
                <img className='w-[200px] h-[30vh]  ' src={data?.image} alt={data?.name} />
                <p>{data?.author}</p>
                <h3>{data?.name}</h3>
                <p>{data?.description}</p>
                <h2>Rs {data?.price}</h2>
                <div className='flex items-center justify-evenly font-bold w-full text-white'>
                    <button onClick={() => handleUpdate(data?._id)} className='m-1 bg-orange-500 text-white px-4 py-1 rounded-md capitalize sm:text-xl ' ><GrUpdate size={25} /></button>
                    <button onClick={() => handleDelete(data?._id)} className='m-1 bg-orange-500 text-white px-4 py-1 rounded-md capitalize sm:text-xl '><MdDeleteForever size={25} /></button>
                </div>
            </div>
        </>
    )
}
