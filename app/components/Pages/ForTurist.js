import React from 'react'
import { connect } from 'react-redux'
import { findBotUsers } from '../../actions/actions'


export class ForTurist extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {


        return (

            <div className="titleSection">
                <h1> ForTurist</h1>
            </div>


        );
    }



}


export default connect(null)( ForTurist);
