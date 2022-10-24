import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className='px-4 bg-slate-500 max-w-[2400px] w-full h-[50px] flex items-center cursor-default '>
            <Link to='/'>
                <p className='text-xl font-semibold text-white capitalize '>Book<span className='uppercase font-bold text-orange-400'>store</span></p>
            </Link>
        </div>
    )
}
