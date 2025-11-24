import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import DescriptionList from './DescriptionList'

function ProductListPage({product}) {

    function addToCart() {
        alert(`${product.title} added to cart`);
        console.log(`You selected ${product.title}`);
    }

    return (
        <div className="border border-gray-200 flex flex-col md:flex-row justify-between px-1 py-5 gap-4 md:gap-0 box-border overflow-hidden">
            {/* Image container */}
            <div className=" W-full md:basis-1/4 flex justify-center items-center">
                <div className="w-3/4 h-48 md:h-32 flex items-center justify-center">
                    <img src={product.image} alt='product image' className='max-w-full max-h-full object-contain'></img>
                </div>

            </div>

            {/* Details and description */}
            <div className="W-full md:basis-2/4 flex flex-col gap-4">
                <div id="title">
                    <p className="text-sm md:text-base lg:text-lg font-bold mb-1">{product.title}</p>
                    <div className="flex items-center gap-5">
                        <button className="bg-green-700 rounded-md w-auto h-5 p-1 text-white text-[9px] lg:text-[11px] font-medium flex justify-center items-center gap-1.5 max-w-full">{product.rating}
                            <FontAwesomeIcon icon={faStar} />
                        </button>
                        <p className="text-gray-500 font-medium text-[7px] md:text-[9px] lg:text-[13px]">{product.ratingCount} Ratings & {product.reviewCount} Reviews</p>
                    </div>
                    <p className='text-[8px] md:[10px] lg:text-[12px] mt-2 font-medium'>{product.category}</p>
                </div>

                <div id="details">
                    <ul className="list-disc marker:text-gray-400 text-[7px] md:text-[9px] lg:text-[13px]">
                        <DescriptionList descriptions={product.description} />
                    </ul>

                </div>
            </div>

            {/* Price details */}
            <div className='W-full md:basis-1/4 pr-0 md:pr-10'>
                <div className="flex items-center gap-6">
                    <h2 className=" text-[18px] lg:text-[24px] font-medium">₹{product.price}</h2>
                    <div className="w-16 md:w-19"><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' alt='logo' className='max-w-full' />
                    </div>
                </div>
                <div>
                    <div className="flex gap-3">
                        <p className="text-gray-500 line-through text-[7px] md:text-[9px] lg:text-sm">₹{product.prevValue}</p>
                        <p className="text-green-700 font-medium text-[7px] md:text-[9px] lg:text-sm">{product.offerPercentage}% off</p>
                    </div>
                    <p className="text-green-600 text-[8px] md:[10px] lg:text-[12px] font-medium">Super Deals</p>
                    <p className="text-[8px] md:[10px] lg:text-[13px]">Upto <span className="font-bold">₹{product.offerPrice}</span> off on Exchange</p>
                </div>
                <button className='rounded bg-amber-400 h-6 md:h-10 text-white font-semibold flex justify-center items-center gap-3 px-6 mt-2 w-auto text-[9px] md:text-md mx-auto'
                onClick={addToCart}>

                    <FontAwesomeIcon icon={faCartShopping} />
                    <p className=''>ADD TO CART</p>
                </button>
            </div>

        </div>
    )
}

export default ProductListPage