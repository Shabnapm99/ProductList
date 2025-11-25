import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function FilterDiv({ product, setProduct, copyOfList }) {

    function sortedList(event) {
        console.log(event.target.value);
        if (event.target.value.toLowerCase() !== 'all') {
            let filteredProduct = copyOfList.filter((product) => {
                if (event.target.value.toLowerCase() === product.category.toLowerCase()) {
                    return product
                }
            }
            )
            console.log(filteredProduct)
        setProduct(filteredProduct);
        }
   else{
    setProduct(copyOfList)//since now the Product is set to filteredProduct so we should use the full list of products. filter dont change the original array 
    console.log(copyOfList);
   }
      

    }


    // Sort function

    function sortPrice(event){
        let criteria = event.target.value;
        console.log('Sort according to price');
    }

    function sortRating(event){
        console.log('Sort according to rating');
    }
    return (

        // Filter and sort section
        <section className='m-2 basis-1/4 flex flex-col gap-2 '>
            <div className='bg-white sticky top-0 left-0'>
                <div className='flex justify-between items-center py-3 lg:px-5 px-1 border-b border-gray-300'>
                    <span className='font-semibold text-sm lg:text-[16px]'>Filters</span>
                    <span className='text-[8px] md:[10px] lg:text-[12px] font-semibold text-blue-600'>CLEAR ALL</span>
                </div>

                <div className='lg:px-5 px-1 py-3 text-[8px] md:[10px] lg:text-[12px] font-medium flex flex-col gap-1 border-b border-gray-300'>
                    {/* <span>CATEGORIES</span>
                    <span className='px-3 text-gray-400'>{'<'}  Mobiles & Accessories</span>
                    <span className='px-6'>Mobiles</span> */}

                    {/* Category selection section */}

                    <div>
                        <select className="border border-gray-200 px-3 py-2 rounded text-[8px] md:[10px] lg:text-[12px] focus:outline-none focus:ring-1 focus:ring-blue-500 " defaultValue="selected"
                            onChange={sortedList}>
                            <option value="selected" hidden >CATEGORIES</option>
                            <option value="poco">POCO</option>
                            <option value="realme">Realme</option>
                            <option value="all">All</option>
                        </select>
                    </div>
                </div>

                {/* Sort options */}

                <div className='lg:px-5 px-1 text-[8px] md:[10px] lg:text-[12px] border-b border-gray-300 mt-2'>

                    <div>
                        <span className='font-medium'>SORT</span>
                    </div>

                    <div className='flex flex-col gap-1 py-3'>
                        <div className='flex items-center gap-2'>
                            <input type='radio' id='priceSort' name='sort' onChange={sortPrice} />
                            <label htmlFor='priceSort'>Price</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='radio' id='ratingSort' name='sort' onChange={sortRating}/>
                            <label htmlFor='ratingSort'>Ratinge</label>
                        </div>
                        
                    </div>

                </div>

                {/* Search option and BRAND selection section */}

                <div className='lg:px-5 px-1 text-[8px] md:[10px] lg:text-[12px] border-b border-gray-300 mt-2'>
                    <div>
                        <span className='font-medium '>BRAND</span>
                    </div>

                    {/* <div className='py-2'><button></button>
                    <span className='text-gray-500'>Clear all</span></div> */}
                    <div className='relative'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute left-0 top-1/2 -translate-y-1/2 text-gray-500' />
                        <input type='text' placeholder='Search Brand' className='w-full border-b border-gray-300 pl-8 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500' />
                    </div>


                    <div className='flex flex-col gap-1 py-3'>
                        <div className='flex items-center gap-2'>
                            <input type='checkBox' id='realme' />
                            <label htmlFor='realme'>realme</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkBox' id='oppo' />
                            <label htmlFor='oppo'>OPPO</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkBox' id='vivo' />
                            <label htmlFor='vivo'>vivo</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkBox' id='samsung' />
                            <label htmlFor='samsung'>Samsung</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='checkBox' id='apple' />
                            <label htmlFor='apple'>Apple</label>
                        </div>
                        <span className='text-blue-500 font-medium mt-2 text-[11px]'>134 MORE</span>
                    </div>

                </div>
            </div>
        </section >
    )
}
