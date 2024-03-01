import React from 'react'
import DealCardVertical from './DealCardVertical'
import { SpecialDealProduct } from './Interfaces/interface';

const DealSectionProducts : SpecialDealProduct[] = [
    {
        id: 1,
        special: ['20% off', 'Limited time'],
        title: "Webbuilder 1",
        description: "Computer Modern classic with wix support",
        original_price: 49.96,
        discounted_price: 39.96,
        discount_percentage: 20,
        image: "/product-image.png"
    },  {
        id: 2,
        special: ['20% off', 'Limited time'],
        title: "Webbuilder 1",
        description: "Computer Modern classic with wix support",
        original_price: 49.96,
        discounted_price: 39.96,
        discount_percentage: 20,
        image: "/product-image.png"
    },  {
        id: 3,
        special: ['20% off', 'Limited time'],
        title: "Webbuilder 1",
        description: "Computer Modern classic with wix support",
        original_price: 49.96,
        discounted_price: 39.96,
        discount_percentage: 20,
        image: "/product-image.png"
    },
]

const DealsBanner = () => {
  return (
    <div className='flex flex-col items-center '>
        <div className='text-[#2C384A] text-2xl text-center sm:text-left sm:text-4xl sm:w-[80vw]'>
            Related deals you might look for
        </div>
        <div className='flex flex-row gap-2 w-full overflow-x-auto'>
            {DealSectionProducts.map((product)=>(
                <DealCardVertical key={product.id} product={product} className={''} />
            ))}
        </div>
    </div>
  )
}

export default DealsBanner