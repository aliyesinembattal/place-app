/* eslint-disable react-hooks/exhaustive-deps */
import { Input, message } from 'antd';
import React, { Fragment, useContext, useEffect } from 'react';
import countryContext from '../../context/country/countryContext';

const { Search } = Input;
const Index = () => {
  const { searchLocation, getLocationImg } = useContext(countryContext);

  const handleSearch = (value) => {
    if (value) {
      searchLocation(value, 100); // name =name ,count=100
      getLocationImg(value, 101); // location="Ankara",rowCount=101
    } else message.warning('Lütfen aramak istediğiniz lokasyonu giriniz.');
  };
  useEffect(() => {
    handleSearch('London');
  }, []);
  return (
    <Fragment>
      <Search style={{ width: '40%' }} placeholder="Location" allowClear enterButton="Search" size="large" onSearch={handleSearch} />
    </Fragment>
  );
};

export default Index;
