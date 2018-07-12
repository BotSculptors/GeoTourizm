import React from 'react'
import { connect } from 'react-redux'
import {fetchAllTrips, fetchTrip} from '../../actions/actions'
import { Link } from 'react-router-dom'


export class Trips extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            trips: [],
            baseURL: props.match.path + '/'
        };

    }


    // Fetch trips once component did mount
    componentDidMount(){
        this.props.dispatch( fetchAllTrips() );
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            trips: nextProps.trips.length ? nextProps.trips : this.state.trips
        });
    }



    render() {

        const {trips, baseURL} = this.state;


        return (

            <div>

                <div className='titleSection'><h1>Trips</h1></div>


                {trips.map((trip, t) => (
                    <div key={t} className='gridBlockOfTrip'>


                        <Link to={baseURL + trip.page_url} className='title'>{trip.title}</Link>
                        <div className='overview'></div>
                    </div>
                ))}


            </div>
        );
    }



}


const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {trips: state.tripsReducer});
};


export default connect(mapStateToProps)(Trips);
