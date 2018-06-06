import React from 'react'
import { connect } from 'react-redux'
import { findBotUsers } from '../../actions/actions'


export class Blog extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {


        return (

            <div className="titleSection">
                <h1>Blog</h1>
            </div>


        );
    }



}


export default connect(null)(Blog);