"use client"
import React, { useState } from 'react';

interface DetailsProps {
    title: string;
    description: string;
    highlights: (string | { key: string; value: string })[];
}

const ProductDetails = ({ title, description, highlights }: DetailsProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSeeMore = () => {
    console.log(isExpanded)
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='mx-4 sm:mx-0 text-[#4B5665] text-h-24 my-auto'>
      <span className='font-bold'>{title}</span> -
      <span className='sm:flex'>{isExpanded ? description : description.slice(0, 50)}</span>
      <button className="text-blue-500 hover:text-blue-700 hover:underline" onClick={handleSeeMore}>
        {isExpanded ? 'See Less ' : 'See More'}
      </button>

      <div className={` ${isExpanded ? '' : 'hidden'}`}>
        {highlights.map((highlight, index) => (
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
  );
};

export default ProductDetails;
