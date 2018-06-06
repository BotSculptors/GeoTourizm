import React from 'react'
import { connect } from 'react-redux'
import { findBotUsers } from '../../actions/actions'


export class Tour extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.props.match.params.tourID)
    }




    render() {


        return (

            <div className="titleSection">
                <h1>Tour #{this.props.props.match.params.tourID}</h1>
            </div>




        );
    }



}


export default connect(null)(Tour);
