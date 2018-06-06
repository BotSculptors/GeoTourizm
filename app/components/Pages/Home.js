import React from 'react'
import { connect } from 'react-redux'
import { findBotUsers } from '../../actions/actions'


export class Home extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {


        return (
            <main>

                <div className="mainIn">
                    <div className="titleSection">
                        <h1>5 most popular tours</h1>
                    </div>
                </div>


            </main>
        );
    }



}


export default connect(null)(Home);
