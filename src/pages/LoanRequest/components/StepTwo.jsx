import React from 'react';
import TextInput from '../../../components/TextInput/TextInput';

const LRStepTwo = () => {
  return (
    <form className="flex flex-col space-y-4  my-6">
      <div className="flex md:flex-row flex-col md:space-x-10">
        <TextInput placeholder="BRD" label="Bank Name" />
        <TextInput placeholder="000-00-000" label="Bank Account" />
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10">
        <TextInput placeholder="Software Developer" label="Current Job Title" />
        <TextInput placeholder="B Ltd" label="Employee Name" />
      </div>
      <div className="flex flex-row md:space-x-10">
        <TextInput placeholder="e.g: 500,000" label="Salary (Rwf)" />
      </div>
      <div className="flex flex-row space-x-10 md:w-1/2 w-full">
        <TextInput placeholder="TT-8578" label="RRA Tax ID" />
      </div>
    </form>
  );
};

export default LRStepTwo;
