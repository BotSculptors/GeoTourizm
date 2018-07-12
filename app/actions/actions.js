'use strict';
// Init default modules
import axios from 'axios'
import { baseURL } from '../config'
import { baseURLLocal } from '../config'




export function fetchTrip(url) {

  return {
    type: 'GET_TRIP',
    payload: axios.get( `${baseURLLocal}/trips/${url}` )
  }

}



export function fetchAllTrips() {

    return {
        type: 'GET_ALL_TRIPS',
        payload: axios.get( `${baseURLLocal}/trips` )
    }

}

