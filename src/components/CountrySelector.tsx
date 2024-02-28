import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'country-list';

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState<{ label: string; value: string } | null>(null);

  const options = useMemo(() => {
    const countries: { code: string; name: string }[] = countryList.getData();
    return countries.map((country) => ({
      value: country.code,
      label: country.name,
    }));
  }, []);
  

  const handleCountryChange = (selectedOption : any) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div>
      <Select
        options={options}
        value={selectedCountry}
        onChange={handleCountryChange}
        unstyled
        className='w-40 focus:outline-none py-2 px-4 font-extralight text-sm'
      />
    </div>
  );
};

export default CountrySelector;
