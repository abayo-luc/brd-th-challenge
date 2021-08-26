import React from 'react';
import { Input } from 'antd';

const TextInput = ({ label, ...props }) => {
  return (
    <div className="w-full m-0 p-0">
      {label?.trim() && (
        <label className="text-sm font-light text-gray-500">{label}</label>
      )}
      <Input {...props} />
    </div>
  );
};

export const TextInputContainer = ({ label, children }) => {
  return (
    <div className="w-full m-0 p-0">
      {label?.trim() && (
        <label className="text-sm font-light text-gray-500">{label}</label>
      )}
      {children}
    </div>
  );
};
export default TextInput;
