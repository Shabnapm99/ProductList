import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return (
        <nav className='flex w-full justify-center'>
            <div className='basis-1/2 flex justify-center lg:justify-end gap-2 lg:gap-5'>
                <div className='w-[14%] lg:h-[80%] h-[60%] flex justify-center items-center lg:mt-1 mt-2'>
                    <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='logo' className='max-w-full max-h-full object-contain' />

                </div>
                <div className='relative'>
                    <input type='text' placeholder='Search for Products, Brands and more' className='text-[8px] md:[10px] lg:text-sm bg-white w-50 lg:w-80 py-1 px-2.5 lg:py-1.5 lg:px-4 rounded focus:outline-none' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-1 top-1/2 -translate-y-1/4 lg:-translate-y-1/2 text-gray-500 text-[10px] lg:text-base' />
                </div>

            </div>
            <div className='basis-1/2 flex items-center justify-center gap-3 lg:gap-12 '>
                <a href='#'><button className='text-[8px] md:text-[10px] lg:text-sm font-semibold bg-white text-blue-600 px-3 lg:px-8 rounded py-0.5 flex '>Login</button></a>
                <ul className='flex justify-between items-center gap-2 lg:gap-8 text-[8px] md:[10px] lg:text-sm font-semibold text-white '>
                    <li><a href='#'>Become a Seller</a></li>
                    <li><a href='#'>More</a></li>
                    <li className='flex gap-1 items-center'><a href='#'><FontAwesomeIcon icon={faCartShopping} />
                        Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}
