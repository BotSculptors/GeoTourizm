import React from 'react'
import { connect } from 'react-redux'
import { findBotUsers } from '../../actions/actions'


export class Reviews extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {


        return (

            <div className="titleSection">
                <h1>Reviews</h1>
            </div>


        );
    }



}


export default connect(null)(Reviews);
