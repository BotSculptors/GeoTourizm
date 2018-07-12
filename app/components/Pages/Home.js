import React,{Component} from 'react'
import {bindActionCreators} from "redux"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export class Home extends React.Component {


  // showList (){
  //   return this.props.tours.map((tour) =>{
  //     return(
  //         <Link key={tour.id} to={`/tours/${tour.tour_name}`}><h1>{tour.tour_name}</h1></Link>
  //     )
  //   })
  // }

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
            </div>
        );
    }

}
function mapStateToProps(state) {
  return{
      //tours: state.tours
  };
}


export default connect(mapStateToProps)(Home);
