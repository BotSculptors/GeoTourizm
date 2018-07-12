import { combineReducers } from 'redux'
import { LOCATION_CHANGE, routerReducer, routerMiddleware } from 'react-router-redux'

function tripReducer(state={}, action){


    switch ( action.type ){


        // Clearing state on Location Change
        //case LOCATION_CHANGE:
            //return Object.assign(state, {trip: {}});


        // Get trip success
        case 'GET_TRIP_FULFILLED':
            return action.payload.data.data;


        // Get trip failure
        // case 'GET_TRIP_REJECTED':
        //     return Object.assign(state, {
        //         trip: {}
        //     });

        default:
            return state;

    }

}



const rootReducer = combineReducers({
    tripReducer: tripReducer,
    routing: routerReducer
});

export default rootReducer;



