'use client';
import { useState } from 'react';
import { Text } from '../Text';
import Button from '../button/button';

export const Form = (e) => {
  const [formInput, setFormInput] = useState({
    rate: '',
    period: '',
    amount: '',
    payment: '',
  });
  const calculateMG = (amount, rate, period) => {
    const n = period * 12;
    const r = rate / 100 / 12;
    const numerator = r * (1 + r) ** n;
    const denominator = (1 + r) ** n - 1;
    return parseFloat(amount * (numerator / denominator)).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { rate, period, amount } = formInput;
    setFormInput((prev) => {
      return {
        ...prev,
        payment: calculateMG(amount, rate, period),
      };
    });
  };
  return (
    <div className="grid grid-flow-row-dense lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 mb-8">
      <form onSubmit={handleSubmit} className="col-span-2">
        <div className="mb-4">
          <input
            required
            type="number"
            value={formInput.amount}
            onChange={(e) =>
              setFormInput((prevState) => {
                return {
                  ...prevState,
                  amount: e.target.value,
                };
              })
            }
            className="py-2 relative m-0 block w-full min-w-0 flex-auto rounded mortgauge-form text-xs  bg-light-black px-3 text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="exampleSearch1"
            placeholder="Loan Amount"
          />
        </div>
        <div className="mb-4">
          <input
            required
            value={formInput.period}
            onChange={(e) =>
              setFormInput((prevState) => {
                return {
                  ...prevState,
                  period: e.target.value,
                };
              })
            }
            type="number"
            className="py-2 relative m-0 block w-full min-w-0 flex-auto rounded mortgauge-form text-xs bg-light-black px-3 text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="exampleSearch2"
            placeholder="Repayment Period (years)"
          />
        </div>
        <div className="mb-4">
          <input
            required
            type="number"
            value={formInput.rate}
            onChange={(e) =>
              setFormInput((prevState) => {
                return {
                  ...prevState,
                  rate: e.target.value,
                };
              })
            }
            name="amount"
            className="py-2 relative m-0 block w-full min-w-0 flex-auto rounded mortgauge-form text-xs bg-light-black px-3 text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            id="exampleSearch"
            placeholder="Interest Rate (%)"
          />
        </div>
        <div className="flex items-center mb-4">
          <span>
            <Text
              style="text-sm text-white me-4 bg-light-black px-4 py-2 cursor-pointer"
              value="Reset"
              Clickfunc={() => {
                setFormInput(() => {
                  return {
                    rate: '',
                    period: '',
                    amount: '',
                    payment: '',
                  };
                });
              }}
            />
          </span>
          <span>
            <Button
              buttonStyle="bg-gold px-4 py-2"
              textStyle="text-black font-bold text-sm"
              text="Calculate"
            ></Button>
          </span>
        </div>
        <Text style="text-xs mb-2" value="Note:" />
        <Text
          style="text-xs mb-2"
          value="Enter only numeric values (no commmas), using decimal points where needed
                    Non numeric values will cause errors"
        />
      </form>
      {formInput.payment && (
        <div>
          <div className="p-4  rounded bg-light-black mortgauge-form xs:col-span-2 xxs:col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <Text
              style="text-sm mb-2 c-gold"
              value="Your Monthly Repayments "
            />
            <Text style="text-xs mb-2 border rounded p-1 w-fit" value="NGN" />
            <Text
              style="text-3xl mb-2 text-white font-semibold break-words"
              value={formInput.payment}
            />
            <Text style="text-xs mb-2" value="Per Month" />
          </div>
        </div>
      )}
    </div>
  );
};
