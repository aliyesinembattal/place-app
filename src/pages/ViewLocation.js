/* eslint-disable react-hooks/exhaustive-deps */
import { Image, PageHeader, Spin } from 'antd';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import LocationItem from '../components/LocationItem/index';
import countryContext from '../context/country/countryContext';

const ViewLocation = () => {
  const { placeName, placeImg, getNearbyPlaceName, getNearbyPlaceWeather } = useContext(countryContext);
  const location = useLocation();
  const coord = location.search.substring(7) ? location.search.substring(7).split(',') : '';

  useEffect(() => {
    const lat = coord[0];
    const lng = coord[1];
    getNearbyPlaceName(lat, lng);
    getNearbyPlaceWeather(lat, lng);
  }, []);
  return (
    <div className="place-container">
      <PageHeader className="site-page-header" onBack={() => window.history.back()} title={placeImg ? <Image width={'100vh'} height={400} preview={false} src={placeImg} /> : <Spin />} />
      {placeName && <LocationItem placeName={placeName} />}
    </div>
  );
};

export default ViewLocation;
