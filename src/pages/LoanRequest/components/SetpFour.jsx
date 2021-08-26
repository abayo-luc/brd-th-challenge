import React, { useState } from 'react';
import { Card } from 'antd';
import TextInput from '../../../components/TextInput/TextInput';
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'RWF',
});

/**
 *
 * @param {principle} p
 * @param {interest rate} r
 * @param {payment time} t
 * @returns amount
 */
const getTotalAmount = (p, r, t) => p * (1 + r / 12) ** (12 * t);

const LRStepFour = () => {
  const [amount, setAmount] = useState();
  const [paymentTime, setPaymentTime] = useState();
  return (
    <form className="flex flex-col space-y-4 my-6">
      <div className="flex md:flex-row flex-col md:space-x-10">
        <TextInput
          placeholder="10,000,000"
          label="Desired Amount (Rwf)"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <TextInput
          placeholder="12"
          label="Payment Time (Years)"
          type="number"
          onChange={(e) => setPaymentTime(e.target.value)}
          value={paymentTime}
        />
      </div>
      <div>
        <p className="text-base">
          Interest rate <span className="text-primary">12%</span>
        </p>
        {amount && paymentTime && (
          <h1 className="text-xl font-semibold">
            Total payment:
            <span className="mx-2">
              {formatter.format(
                getTotalAmount(
                  parseFloat(amount),
                  0.05,
                  parseFloat(paymentTime)
                )
              )}
            </span>
          </h1>
        )}
      </div>
      <div className="self-center">
        <h1 className="text-lg text-primary leading-relaxed">
          Choose the best financial options, and enjoy the experience
        </h1>
        <p>
          As a domestic or DACA graduate student, you can borrow with a fixed
          interest rate of 7.99% (8.89% APR¹). This is the maximum rate and will
          not increase. However, MPOWER offers borrowers 3 ways to qualify for
          discounts:
          <ol class="list-decimal mx-8 my-4">
            <li>
              0.50% rate discount by making your loan payments through automatic
              withdrawal from a U.S. bank account
            </li>
            <li>
              an additional 0.50% discount for making 6 consecutive on-time
              payments through automatic withdrawal,
            </li>
            <li>
              and another 0.50% discount for reporting proof of graduation and
              employment
            </li>
          </ol>
        </p>
        <div className="flex md:flex-row flex-col md:space-x-10 space-y-6">
          <Card
            title="Graduate student with regular interest rate"
            className="w-full shadow-md rounded-md cursor-pointer"
            hoverable
          >
            <p>
              The APR is calculated using the following assumptions: A loan is
              approved in the amount of $10,000 with a 5% origination fee of
              $500. The student will start making payments 45 days after loan
              disbursement. Payments will be interest only until graduation plus
              an additional 6-month grace period. The remaining months of
              repayment are calculated using a 120-month amortization schedule.
              All payments are made on-time, a forbearance is never utilized,
              and there is no pre-payment of any principal.
            </p>
          </Card>
          <Card
            title="Graduate student with discounted interest rate]"
            className="shadow-md rounded-md cursor-pointer"
            hoverable
          >
            <p>
              he APRs with discounts are calculated using the following
              assumptions: A loan is approved in the amount of $10,000 with a 5%
              origination fee of $500. The student will start making payments 45
              days after loan disbursement. The borrower signs up for automatic
              debit immediately after the loan is disbursed and remains on it
              for the life of the loan, which reduces the rate by 0.50%. The
              first 6 payments are made on time, which allows the borrower to
              earn another 0.50% discount from the 7th payment onward. This
              discount continues for the life of the loan due to all payments
              being made on time. Six months after graduating the borrower
              provides proof of employment, which further reduces the interest
              rate by 0.50% from the 7th payment after graduation onward. A
              forbearance is never utilized and there is no prepayment of any
              principal.
            </p>
          </Card>
        </div>
      </div>
    </form>
  );
};

export default LRStepFour;
