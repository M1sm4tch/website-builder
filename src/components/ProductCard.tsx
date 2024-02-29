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
        <div className='text-white bg-[#FF7724] p-1 w-[20%] rounded-r-lg my-10'>
          <DiamondOutlined className='font-light mr-2'/>
          Best Value
        </div>
      )
    )
  }

  const BestChoice = () => {
    return (
      product.best_choice && (
        <div className='text-white bg-[#FF7724] p-1 w-[20%] rounded-r-lg my-10 items-center'>
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
    <div className='w-full grid grid-cols-3 gap-0 my-20'>
      <div>
        {product.rank}
        <div className='flex flex-col items-center mx-auto my-10 flex-around'>
          <Image src='/product-image.png' alt="product image" height={141} width={103}/>
          {product.company}
        </div>
      </div>
      <div className='text-[#4B5665] text-h-24'>
        <span className='font-bold'>{product.title} </span> - {product.description}
        <div className='text-[#2C384A] font-bold'>Main Highlights</div>
        <div>
          {product.highlights.map((highlight, index) => (
            <span className='mr-1 space-y-0' key={index}>
              {typeof highlight === 'string' ? (
                highlight
              ) : (
                <li className='list-inside my-0 '  style={{ color: '#ffffff' }}>
                  <span className='text-blue-500'>{highlight.value}</span>
                  <span className='text-[#4b5665]'> {highlight.key}</span>
                </li>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center text-white'>
        <div className='bg-[#F3F9FF] mx-auto p-6 rounded-b-md mb-5 flex flex-col items-center text-[#074786]'>
            <div className='text-4xl'>
              {product.rating}
            </div>
            <div>
              {product.reviews}
            </div>
            <Rating count={5} value={(product.rating/2)}/>
        </div>
        <button className='p-4 w-[75%] rounded-lg bg-blue-500'>
          View
        </button>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
