import { message } from 'antd';
import axios from 'axios';
import React, { useReducer } from 'react';
import { GET_LOCATION, GET_LOCATION_IMG, SEARCH_LOCATIONS, SET_LOADING, SET_PLACE_IMG } from '../types';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';

const CountryState = (props) => {
  const initialState = {
    locations: [],
    placeName: {},
    placeImg: '',
    locationImg: '',
    loading: false,
  };
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const geonamesUserName = process.env.REACT_APP_API_USERNAME;

  const searchLocation = async (location, rowCount) => {
    //loading true
    setLoading();
    try {
      const res = await axios.get(`http://api.geonames.org/searchJSON?q=${location}&username=${geonamesUserName}&country=&${rowCount}`);
      dispatch({
        type: SEARCH_LOCATIONS,
        payload: res.data,
      });
    } catch (error) {
      message.error(error.toString());
    }
  };

  const getNearbyPlaceName = async (lat, lng) => {
    //loading true
    setLoading();
    try {
      const res = await axios.get(`http://api.geonames.org/findNearbyPlaceNameJSON?username=${geonamesUserName}&lat=${lat}&lng=${lng}`);
      dispatch({
        type: GET_LOCATION,
        payload: res.data.geonames[0],
      });
    } catch (error) {
      message.error(error.toString());
    }
  };
  const getNearbyPlaceWeather = async (lat, lng) => {
    //loading true
    setLoading();
    try {
      const res = await axios.get(`http://api.geonames.org/findNearByWeatherJSON?username=${geonamesUserName}&lat=${lat}&lng=${lng}`);
      dispatch({
        type: GET_LOCATION,
        payload: res.data.weatherObservation,
      });
    } catch (error) {
      message.error(error.toString());
    }
  };

  const getLocationImg = async (name, count) => {
    setLoading();
    try {
      const res = await axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${name}&image_type=photo&per_page=${count}`);
      dispatch({
        type: GET_LOCATION_IMG,
        payload: res.data.hits,
      });
    } catch (error) {
      message.error(error.toString());
    }
  };

  const setPlaceImg = (src) => {
    dispatch({
      type: SET_PLACE_IMG,
      payload: src,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <CountryContext.Provider
      value={{
        locations: state.locations,
        placeName: state.placeName,
        placeImg: state.placeImg,
        locationImg: state.locationImg,
        loading: state.loading,
        searchLocation,
        getNearbyPlaceName,
        getNearbyPlaceWeather,
        getLocationImg,
        setPlaceImg,
        setLoading,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
