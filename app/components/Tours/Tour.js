import React,{Component} from 'react'
import {bindActionCreators} from "redux"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Tour extends React.Component {
  showList (){
    return this.props.tours.map((tour) =>{
      return(
      <div key={tour.id}>
        <div className="titleSection">
          <h1>{tour.tour_name}</h1>
        </div>
          <h3>{tour.tour_description}</h3>
      </div>

      )
    })
  }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                    {this.showList()}
            </div>
        );
    }

}
function mapStateToProps(state) {
  return{
    tours: state.tours
  };
}


export default connect(mapStateToProps)(Tour);
