import React from 'react';
import { Product } from '@/data/products';
import Image from 'next/image'
import Rating from './Rating'
import { DiamondOutlined } from '@mui/icons-material';
import { TrophyIcon } from '@heroicons/react/24/outline';


interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const BestValue = () => {
    return (
      product.best_value && (
        <div className='text-white bg-[#FF7724] p-1 px-5 w-fit sm:w-[20%] rounded-r-lg'>
          <DiamondOutlined className='font-light mr-2'/>
          Best Value
        </div>
      )
    )
  }

  const BestChoice = () => {
    return (
      product.best_choice && (
        <div className='text-white bg-[#FF7724] p-1 px-5 w-fit  rounded-r-lg items-center'>
          <TrophyIcon className='h-4 inline mr-2'/>
          Best Choice
        </div>
      )
    )
  }


  return (
    <>
    <BestChoice />
    <BestValue />
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-0 border border-solid p-2 my-2 border-gray-200 hover:shadow-inner'>
      <div>
        {product.rank}
        <div className='flex flex-col items-center mx-auto my-auto flex-around'>
          <Image src='/product-image.png' alt="product image" width={564} height={412} className='w-[90%] h-auto sm:w-[50%]'/>
          {product.company}
        </div>
      </div>
      <div className='mx-4 sm:mx-0 text-[#4B5665] text-h-24 my-auto'>
        <span className='font-bold'>{product.title}</span> - 
        <span className='sm:flex'>{product.description.slice(0, 50)}</span> {/* Truncate description */}
        <button id="seeMoreBtn" className="text-blue-500 hover:text-blue-700">See More</button>

        <div id="productDetails" className="product-details hidden">
          {product.highlights.map((highlight, index) => (
            <span className='mr-1 space-y-0' key={index}>
              {typeof highlight === 'string' ? (
                highlight
              ) : (
                <li className='list-inside my-0' style={{ color: '#ffffff' }}>
                  <span className='text-blue-500'>{highlight.value}</span>
                  <span className='text-[#4b5665]'> {highlight.key}</span>
                </li>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center text-white'>
        <div className='bg-[#F3F9FF] my-4 mx-auto p-3 sm:p-6 rounded-b-md mb-5 grid grid-cols-2 sm:flex flex-col items-center text-[#074786]'>
            <div className='text-base inline sm:block sm:text-4xl'>
              {product.rating}
            </div>
            <div className='inline sm:block'>
              {product.reviews}
            </div>
            <Rating count={5} value={(product.rating/2)}/>
        </div>
        <button className='hidden sm:block p-4 w-[75%] rounded-lg bg-blue-500'>
          View
        </button>
      </div>
      <button className='sm:hidden h-[50%] w-[70%] m-auto rounded-lg bg-blue-500 text-white'>
          View
      </button>
    </div>
    </>
  );
};

export default ProductCard;
