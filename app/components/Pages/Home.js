import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export class Home extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {


        return (
            <div>

                <div className="titleSection">
                    <h1>5 most popular tours</h1>
                </div>

                <br/>



                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((tourID, i) => (

                        <Link key={i} to={`/tours/${tourID}`}>{tourID}</Link>
                    ))}







            </div>



        );
    }



}


export default connect(null)(Home);
