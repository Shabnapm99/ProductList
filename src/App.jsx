import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import FilterDiv from './components/FilterDiv'
import ProductListPage from './components/ProductListPage'

function App() {

  const [products, setProduct] = useState([
    {
      id: 1,
      title: 'POCO C75 5G (Aqua Bliss, 64 GB)',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70',
      category: 'POCO',
      price: '7,499',
      prevValue: '10,999',
      offerPercentage: '31',
      offerPrice: '5,650',
      rating: 4,
      reviewCount: '5,807',
      ratingCount: '1,29,220',
      description: ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
        '17.48 cm (6.88 inch) HD+ Display', '50MP Rear Camera | 5MP Front Camera', '5160 mAh Battery', '4s Gen 2 5G Processor',
        '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
      ]
    },

    {
      id: 2,
      title: 'realme P3x 5G (Midnight Blue, 128 GB)',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70',
      category: 'Realme',
      price: '12,999',
      prevValue: '17,999',
      offerPercentage: '27',
      offerPrice: '10,100',
      rating: 4.4,
      reviewCount: '837',
      ratingCount: '20,449',
      description: ['8 GB RAM | 128 GB ROM', '17.07 cm (6.72 inch) Full HD Display', '50MP Rear Camera | 8MP Front Camera',
        '6000 mAh Battery', 'Dimensity 6400 Processor', '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
      ]
    },

    {
      id: 3,
      title: 'POCO M7 5G (Mint Green, 128 GB)',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/w/0/-original-imah9wydggh9mtxt.jpeg?q=70',
      category: 'POCO',
      price: '8,999',
      prevValue: '12,999',
      offerPercentage: '30',
      offerPrice: '6,900',
      rating: 4.1,
      reviewCount: '2,800',
      ratingCount: '59,236',
      description: ['6 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
        '17.48 cm (6.88 inch) HD+ Display', '50MP Rear Camera | 8MP Front Camera', '5160 mAh Battery', '4 Gen 2 5G Processor',
        '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
      ]
    }]

  )

  const [copyOfProducts,setCopy] = useState(products);//make a copy of original array for backup

  return (
    <div>
      <header className='w-full h-16 bg-blue-500 flex items-center sticky top-0 left-0 z-50'>
        <NavBar product={products} setProduct={setProduct} copyOfList={copyOfProducts}/>
      </header>
      <main className='bg-gray-200 flex justify-between'>
        <FilterDiv product={products} setProduct={setProduct} copyOfList={copyOfProducts}/>
        <section className='my-2 basis-3/4'>
          <div className='flex flex-col bg-white '>
            <div className='flex gap-2 lg:gap-5 items-center m-2'>
              <p className='font-semibold text-[8px] md:[10px] lg:text-base'>Mobiles</p>
              <p className='text-[8px] md:[10px] lg:text-[13px] text-gray-500'>(Showing 1 – 24 products of 867 products)</p>
            </div>
            {
              products.map((product) => {
                return (
                  // <ProductListPage key={product.id} title={product.title} imageUrl={product.image} price={product.price} prevPrice={product.prevValue} offerPercentage={product.offerPercentage} offerPrice={product.offerPrice} rating={product.rating} ratingCount={product.ratingCount} reviewCount={product.reviewCount} descriptionList={product.description} category={product.category} />
                  <ProductListPage key={product.id} product={product} />

                )
              }
              )
            }

          </div>
        </section>

      </main>
    </div>

  )
}

export default App
