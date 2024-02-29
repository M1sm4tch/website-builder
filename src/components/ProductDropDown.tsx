"use client"
import React, { useState } from 'react';
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

  const handleChange = (newValue: any, actionMeta: any) => {
    setSelectedOption(newValue as Option);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        unstyled
        isSearchable={false}
      />
    </div>
  );
};

export default ProductDropdown;
