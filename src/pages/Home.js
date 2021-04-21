import { Spin } from 'antd';
import React, { useContext } from 'react';
import LocationList from '../components/LocationList/index';
import Search from '../components/Search/index';
import countryContext from '../context/country/countryContext';
import './style.scss';
const Home = () => {
  const { loading } = useContext(countryContext);

  return (
    <div className="home-container">
      <div className="home-header">
        <Search />
        <div>
          <p>
            PLACE<span>APP</span>
          </p>
        </div>
      </div>
      <div className="home-content">{loading ? <Spin /> : <LocationList />}</div>
    </div>
  );
};

export default Home;
