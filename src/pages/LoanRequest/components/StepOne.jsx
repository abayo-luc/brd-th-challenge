import React, { useState, useEffect } from 'react';
import { Checkbox, Select } from 'antd';
import { Provinces, Districts, Sectors, Villages, Cells } from 'rwanda';
import TextInput, {
  TextInputContainer,
} from '../../../components/TextInput/TextInput';

const { Option } = Select;

const LRStepOne = () => {
  const [agreed, setAgreed] = useState(false);
  const [province, setProvince] = useState();
  /**control district change */
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState();
  useEffect(() => {
    if (province) setDistricts(Districts(province) || []);
  }, [province]);

  /**control sector change */
  const [sectors, setSectors] = useState([]);
  const [sector, setSector] = useState();
  useEffect(() => {
    if (province?.trim() && district?.trim())
      setSectors(Sectors(province, district));
  }, [province, district]);

  /**control cell change */
  const [cells, setCells] = useState([]);
  const [cell, setCell] = useState();
  useEffect(() => {
    if (province && district && sector)
      setCells(Cells(province, district, sector));
  }, [province, district, sector]);

  /**control village change */
  const [villages, setVillages] = useState([]);
  const [village, setVillage] = useState();
  useEffect(() => {
    if (province && district && sector && cell)
      setVillages(Villages(province, district, sector, cell) || []);
  }, [province, district, sector, cell]);

  return (
    <form className="flex flex-col space-y-4 my-6">
      <div className="flex md:flex-row flex-col md:space-x-10">
        <TextInput placeholder="John" label="First Name" />
        <TextInput placeholder="Doe" label="Last Name" />
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10">
        <TextInput placeholder="me@example.com" type="email" label="Email" />
        <TextInput placeholder="25078927275" label="Phone Number" />
      </div>
      <div className="flex md:flex-row flex-col md:space-x-10">
        <TextInput
          placeholder="1234567890098765"
          type="number"
          label="National ID"
        />
      </div>
      <div>
        <TextInputContainer label="Address">
          <div className="flex md:flex-row flex-col justify-between space-y-2 md:space-y-0">
            <Select
              placeholder="Select Province"
              className="md:w-32 w-full"
              onChange={(value) => {
                setProvince(value);
                setDistrict();
                setSector();
                setCell();
                setVillage();
              }}
              value={province}
            >
              {Provinces().map((item) => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
            <Select
              placeholder="Select District"
              className="md:w-32 w-full"
              value={district}
              onChange={(value) => {
                setDistrict(value);
                setSector();
                setCell();
                setVillage();
              }}
            >
              {districts?.map((item) => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
            <Select
              placeholder="Select Sector"
              className="md:w-32 w-full"
              value={sector}
              onChange={(value) => {
                setSector(value);
                setCell();
                setVillage();
              }}
            >
              {sectors?.map((item) => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
            <Select
              placeholder="Select Cell"
              className="md:w-32 w-full"
              value={cell}
              onChange={(value) => {
                setCell(value);
                setVillage();
              }}
            >
              {cells?.map((item) => (
                <Option value={item} key={item}>
                  {item}
                </Option>
              ))}
            </Select>
            <Select
              placeholder="Select Village"
              className="md:w-32 w-full"
              value={village}
              onChange={(value) => setVillage(value)}
            >
              {villages?.map((item) => (
                <Option value="Kigali" key={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
        </TextInputContainer>
      </div>
      <div>
        <Checkbox
          onChange={(e) => setAgreed(e.target.checked)}
          checked={agreed}
        >
          <>
            <p className="text-xs">
              By checking this, I agree to the following the terms and
              conditions.
              <a href="/" className="mx-2 text-primary">
                Learn more
              </a>
            </p>
          </>
        </Checkbox>
      </div>
    </form>
  );
};

export default LRStepOne;
