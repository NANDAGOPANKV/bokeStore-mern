import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
    const NavigateTo = useNavigate()
    const [checked, setChecked] = useState(false)
    const [input, setInput] = useState({
        name: "",
        author: "",
        description: '',
        image: '',
        price: '',
    })

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handlePostData = async () => {
        await axios.post('http://localhost:8003/books/', {
            name: String(input.name),
            author: String(input.author),
            description: String(input.description),
            image: String(input.image),
            price: Number(input.price),
            avilable: String(checked)
        }).then((res) => res.data).catch((err) => {
            console.log(err.message);
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(input, checked);
        handlePostData().then(() => NavigateTo('/')).catch((err) => {
            console.log(err);
        })
    }



    return (
        <div className='min-h-[90vh] max-w-[2400px]  '>
            <form onSubmit={handleSubmit} className='flex flex-col items-center mt-[5%] sm:mt-[8%]  max-w-[650px] h-[400px] bg-slate-500 sm:mx-auto p-1 mx-2  rounded-md '>
                <input onChange={handleChange} value={input.name} className='w-full h-full px-3 outline-none text-xl bg-slate-100 rounded-md m-1' name='name' type="text" placeholder='Enter Book Name...' />
                <input onChange={handleChange} value={input.author} className='w-full h-full px-3 outline-none text-xl bg-slate-100 rounded-md m-1' name='author' type="text" placeholder='Enter your Name...' />
                <input onChange={handleChange} value={input.description} className='w-full h-full px-3 outline-none text-xl bg-slate-100 rounded-md m-1' name='description' type="text" placeholder='Enter Description...' />
                <input onChange={handleChange} value={input.price} className='w-full h-full px-3 outline-none text-xl bg-slate-100 rounded-md m-1' name='price' type="number" placeholder='Enter Price...' />
                <input onChange={handleChange} value={input.image} className='w-full h-full px-3 outline-none text-xl bg-slate-100 rounded-md m-1' name='image' type="text" placeholder='Enter Image URL...' />
                <p onChange={() => setChecked(!checked)} className='flex text-center px-2'><input type="checkbox" className='' /> Available</p>
                <div className='w-full rounded-md py-2 '>
                    <button className='w-full bg-orange-500 text-white py-4 rounded-md font-bold text-xl uppercase sm:text-2xl'>Add</button>
                </div>
            </form>
        </div>
    )
}
