import { useState } from 'react';

export const usePrice = (initialPrice: string = '') => {
  const [value, setValue] = useState<string>(initialPrice);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    const price = Number(inputValue.replace(/[^0-9]/g, ''));
    const isEmptyPrice = inputValue === '' || price === 0;

    isEmptyPrice ? setValue('') : setValue(price.toLocaleString());
  };

  return {
    value,
    onChange,
  };
};
