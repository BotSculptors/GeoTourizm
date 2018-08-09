import React from 'react'
import {connect} from 'react-redux'
import {fetchAllTrips, fetchTrip} from '../../actions/actions'
import {Link} from 'react-router-dom'

export class Trips extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      trips: [],
      baseURL: props.match.path + '/'
    };

  }

  // Fetch trips once component did mount
  componentDidMount() {
    this.props.dispatch(fetchAllTrips());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      trips: nextProps.trips.length
        ? nextProps.trips
        : this.state.trips
    });
  }

  render() {

    const {trips, baseURL} = this.state;

    return (<div>
      <div className='titleSection'>
        <h1>Туры в Грузию :
        </h1>
      </div>
      <div className='Trips'>
        {/*<div className='gridBlockOfTrip'>

    <Link to={"/trips"} className='title'>
      Тур 2
    </Link>

    <div className='overview'></div>

  </div>
  <div className='gridBlockOfTrip'>

    <Link to={"/trips"} className='title'>
      Тур 3
    </Link>

    <div className='overview'></div>

  </div> */
        }

        {
          trips.map((trip, t) => (<div key={t} className='gridBlockOfTrip'>

            <Link to={baseURL + trip.page_url} className='title'>
              <div className="img_trip">
                <img src="https://image.ibb.co/kO7TWd/sataflia_13_1_g_MEp_L.jpg"></img>
              </div>
              <div className="trips_info">
                <div className="location_trip">
                  <i className="material-icons">
                    location_on
                  </i>
                  <span>Кахетия.Лагодехи</span>
                </div>

                <div className="title_trip">
                  <span>{trip.title}</span>
                </div>
              </div>

            </Link>
            <div className='overview'>
              <div className="derections_trip">
                <span>{trip.directions}</span>
              </div>
              <div className="data_trip">
                <div className="price_trip">
                  <i className="material-icons">
                    attach_money
                  </i>
                  <span>Price</span>
                </div>

                <div className="time_trip">

                  <i className="material-icons">
                    access_time
                  </i>
                  <span>Time
                  </span>
                </div>

                <div className="type_trip">
                  <i className="material-icons">
                    public
                  </i>
                  <span>Type</span>
                </div>
              </div>

            </div>

          </div>))
        }
      </div>
    </div>);
  }

}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {trips: state.tripsReducer});
};

export default connect(mapStateToProps)(Trips);
