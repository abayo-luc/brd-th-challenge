import React from 'react';
import { Table, Select, Badge, Card } from 'antd';

const { Option } = Select;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'RWF',
});

const columns = [
  {
    title: 'Names',
    key: 'names',
    render: (_text, data) => `${data.firstName} ${data.lastName}`,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'ID',
    dataIndex: 'nid',
    key: 'nid',
  },
  {
    title: 'Initial Principal',
    dataIndex: 'initialAmount',
    key: 'initialAmount',
    render(amount) {
      return formatter.format(amount);
    },
  },
  {
    title: 'Time (Years)',
    dataIndex: 'paymentPeriod',
    key: 'paymentPeriod',
    width: 60,
  },
  {
    title: 'Stage',
    key: 'stage',
    dataIndex: 'stage',
    width: 250,
    render: (stage) => (
      <Badge.Ribbon text={stage?.status} color={stage?.color}>
        <Card size="small" bordered={false}>
          {stage?.message}
        </Card>
      </Badge.Ribbon>
    ),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render(status) {
      console.log(status);
      return (
        <Select defaultValue={status} style={{ width: 120 }}>
          <Option value="Accepted">Accept</Option>
          <Option value="Rejected">Reject</Option>
          <Option value="Incomplete">Incomplete</Option>
          <Option value="Completed">Completed</Option>
        </Select>
      );
    },
  },
];

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    email: 'john@brown.com',
    phone: '250789272775',
    nid: '09764683655386453',
    initialAmount: 20000000,
    paymentPeriod: 13,
    stage: {
      status: 'ACCEPTED',
      color: 'blue',
      message: 'Loan waiting to be handed out',
    },
    status: 'Accepted',
  },
  {
    key: '2',
    firstName: 'Eric',
    lastName: 'Mwami',
    email: 'eric.mwami@gmail.com',
    phone: '250789272775',
    nid: '12345678654326806',
    initialAmount: 25700000,
    paymentPeriod: 16,
    stage: {
      status: 'REPAYING',
      color: 'green',
      message: 'Loan repayment completed at 30%',
    },
    status: 'Accepted',
  },
  {
    key: '3',
    firstName: 'Cloude',
    lastName: 'Yuhi',
    email: 'cloude.yuhi@gmail.com',
    phone: '250789272775',
    nid: '1234567890987654',
    initialAmount: 19000000,
    paymentPeriod: 5,
    stage: {
      status: 'REJECTED',
      color: 'red',
      message: 'Loan request was rejected',
    },
    status: 'Rejected',
  },
];
const LoanList = () => {
  return (
    <div className="flex flex-col w-full">
      <Table
        columns={columns}
        dataSource={data}
        className="md:w-10/12 w-full self-center overflow-auto"
        responsive={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        pagination={{ hideOnSinglePage: true }}
      />
    </div>
  );
};

export default LoanList;
