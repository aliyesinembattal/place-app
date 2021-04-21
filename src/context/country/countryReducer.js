/* eslint-disable import/no-anonymous-default-export */

import { GET_LOCATION, GET_LOCATION_IMG, SEARCH_LOCATIONS, SET_LOADING, SET_PLACE_IMG } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };
    case GET_LOCATION_IMG:
      return {
        ...state,
        locationImg: action.payload,
        loading: false,
      };
    case GET_LOCATION:
      return {
        ...state,
        placeName: { ...state.placeName, ...action.payload },
        loading: false,
      };
    case SET_PLACE_IMG:
      return {
        ...state,
        placeImg: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      break;
  }
};
