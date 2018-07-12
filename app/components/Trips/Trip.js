import React from 'react'
import { connect } from 'react-redux'
import { fetchTrip } from '../../actions/actions'


export class Trip extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            url: props.match.params.tripID,
            trip: {}
        };


    }

    // Fetch trip once component did mount
    componentDidMount(){
        this.props.dispatch( fetchTrip( this.state.url ) );
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            trip: Object.keys(nextProps.trip).length ? nextProps.trip : this.state.trip
        });
    }

    render() {

        return (
            <div>{JSON.stringify(this.state)}</div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, ownProps, {trip: state.tripReducer});
};


export default connect(mapStateToProps)(Trip);
