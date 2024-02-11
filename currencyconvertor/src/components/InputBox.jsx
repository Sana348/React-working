import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-4 rounded-lg text-sm flex flex-col sm:flex-row items-center justify-between ${className}`}>
      <div className="flex-grow mb-4 sm:mb-0 sm:mr-2">
        <label htmlFor={amountInputId} className="block text-gray-700 mb-2">
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="flex-grow flex items-center justify-center sm:justify-end">
        <label htmlFor="currencySelect" className="block text-gray-700 mb-2 mr-2 sm:mr-0">
          Currency Type
        </label>
        <select
          id="currencySelect"
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
