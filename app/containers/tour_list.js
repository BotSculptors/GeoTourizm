import React,{Component} from 'react'
import {bindActionCreators} from "redux"
import { connect } from 'react-redux'



class ToursList extends Component{
  showList (){
    return this.props.tours.map((tour) =>{
      return(
        <li key={tour.id}>tour.tour_name}</li>
      )
    })
  }
  render(){
    return(
          {this.showList()}
    );
  };
}

function mapStateToProps(state) {
  return{
    tours: state.tours
  };
}

export default connect (mapStateToProps)(ToursList);
