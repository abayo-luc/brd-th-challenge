import { Button, Steps } from 'antd';
import React from 'react';
import LRStepFour from './components/SetpFour';
import LRStepFive from './components/StepFive';
import LRStepOne from './components/StepOne';
import LRStepThree from './components/StepThree';
import LRStepTwo from './components/StepTwo';
const { Step } = Steps;

const steps = [
  {
    title: 'Personal Info',
  },
  {
    title: 'Financial Info',
  },
  {
    title: 'Documents',
  },
  {
    title: 'Loan Calc',
  },
  {
    title: 'Review',
  },
];

const LoanRequest = () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <div className="flex flex-col items-center w-full h-full md:mx-0 mx-2">
      <div className="md:w-2/3 w-full my-2">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </div>
      <div className="md:w-2/3 w-full my-4">
        <h1 className="text-xl font-bold text-primary">Loan Request Form</h1>
        <h3 className="text-sm">
          Register in the our app to start your first loan application
        </h3>
        {
          [
            <LRStepOne />,
            <LRStepTwo />,
            <LRStepThree />,
            <LRStepFour />,
            <LRStepFive />,
          ][current]
        }
        <div
          className={`flex md:flex-row flex-col my-2 space-y-2 ${
            current > 0 ? 'justify-between' : 'justify-end'
          }`}
        >
          {current > 0 && (
            <Button
              shape="round"
              size="middle"
              className="md:w-1/6 w-full"
              onClick={() => setCurrent(current - 1)}
            >
              Next
            </Button>
          )}
          <Button
            type="primary"
            shape="round"
            size="middle"
            className="md:w-1/6 w-full"
            onClick={() => {
              if (current < 4) {
                setCurrent(current + 1);
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanRequest;
