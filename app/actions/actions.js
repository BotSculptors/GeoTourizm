'use strict';
// Init default modules
import axios from 'axios'
import { baseURL as baseURL1 } from '../config'
import { baseURLLocal as baseURL2 } from '../config'



const baseURL = baseURL1;
//const baseURL = baseURL2;


export function fetchTrip(url) {

  return {
    type: 'GET_TRIP',
    payload: axios.get( `${baseURL}/trips/${url}` )
  }

}



export function fetchAllTrips() {

    return {
        type: 'GET_ALL_TRIPS',
        payload: axios.get( `${baseURL}/trips` )
    }

}

