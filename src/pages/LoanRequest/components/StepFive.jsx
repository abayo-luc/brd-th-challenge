import React from 'react';
import { Avatar, Collapse, Tag, List, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const data = [
  'JeanLucAbayo.bank_statement.pdf',
  'JeanLucAbayo.tax_return.pdf',
  'JeanLucAbayo.credit_history.pdf',
  'JeanLucAbayo.id.png',
];

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'RWF',
});

const getTotalAmount = (p, r, t) => p * (1 + r / 12) ** (12 * t);

const LRStepFive = () => {
  return (
    <div className="my-4 flex flex-col space-y-10">
      <div className="flex flex-row items-center w-2/3">
        <div className="flex flex-row justify-between w-full mx-2">
          <div className="flex flex-row items-center">
            <Avatar
              size={60}
              icon={<UserOutlined />}
              src="https://avatars.githubusercontent.com/u/20681465?v=4"
            />
            <div className="mx-2">
              <h3 className="text-xl font-light ">Jean Luc Abayo</h3>
              <p className="text-base font-light text-gray-500">
                Software Developer
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-light ">Company</h3>
            <p className="text-base font-light text-gray-500">A&B Tech Ltd</p>
          </div>
        </div>
      </div>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Personal Information" key="1">
          <ul>
            <li>
              <span className="font-semibold">Email:</span> jean.abayo@gmail.com
            </li>
            <li>
              <span className="font-semibold">Phone Number:</span> 250789272775
            </li>
            <li className="flex flex-row justify-between">
              <p>
                <span className="font-semibold">National ID:</span>{' '}
                1234567890098765
              </p>
              <Tag icon={<CheckCircleOutlined />} color="success">
                Verified
              </Tag>
            </li>
            <li>
              <span className="font-semibold">Address: </span> Kigali / Gasabo /
              Kimironko / Bibare / Ingeri
            </li>
            <li>
              <span className="font-semibold">Street Address:</span> KG 200 St
            </li>
          </ul>
        </Panel>
        <Panel header="Financial Information" key="2">
          <ul>
            <li>
              <span className="font-semibold">Bank Name:</span> Bank of Kigali
            </li>
            <li>
              <span className="font-semibold">Bank Account:</span>
              080-85775-86788
            </li>
            <li>
              <span className="font-semibold">Job Title:</span> Senior Software
              Engineer
            </li>
            <li>
              <span className="font-semibold">Employee:</span> A&B Tech Ltd
            </li>
            <li>
              <span className="font-semibold">Salary: </span> Rwf 2,000,000.00
            </li>
            <li>
              <span className="font-semibold">RRA Tax ID: </span> TTR-7576
            </li>
          </ul>
        </Panel>
        <Panel header="Documents" key="3">
          <List
            bordered
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                {index + 1}.<Typography.Text mark>[FILE]</Typography.Text>
                {item}
              </List.Item>
            )}
          />
        </Panel>
        <Panel header="Loan Calculation" key="4">
          <ul>
            <li>
              <span className="font-semibold">Requested Amount:</span>{' '}
              {formatter.format(10000000)}
            </li>
            <li>
              <span className="font-semibold">Interest Rate:</span>
              12%
            </li>
            <li>
              <span className="font-semibold">Repayment Period:</span> 12 Years
            </li>
            <li>
              <span className="font-semibold">Final Amount:</span>{' '}
              {formatter.format(getTotalAmount(10000000, 0.12, 12))}
            </li>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
};

export default LRStepFive;
