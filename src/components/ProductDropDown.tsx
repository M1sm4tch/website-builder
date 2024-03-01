"use client"
import React, { useState, useEffect } from 'react';
import Select from 'react-select';


type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: 'Top Rated', label: 'Top Rated' },
  { value: 'Featured', label: 'Featured' },
  { value: 'Most Popular', label: 'Most Popular' }
];

const ProductDropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), [])

  const handleChange = (newValue: any, actionMeta: any) => {
    setSelectedOption(newValue as Option);
  };

  return (
    <div>
      <Select
        instanceId={'wsad123wqwe'}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        unstyled
        isSearchable={false}
        className='bg-white hover:border-gray-200 hover:border w-[100px]'
        hideSelectedOptions
        styles = {{
          menu: (baseStyles, state)=> ({
            ...baseStyles,
            backgroundColor: "white",
            paddingTop: "0px",
            padding: "5px",
            width: "100px",
            boxShadow: "2px",
          })
        }}
      />
    </div>
  );
};

export default ProductDropdown;
