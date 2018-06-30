import React,{Component} from 'react'
import {bindActionCreators} from "redux"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Home_icon from '../../static/images/home.png'
import ImageGallery from 'react-image-gallery';

export class Tour extends React.Component {
  showList (){

    return this.props.tours.map((tour) =>{
    function shownumb() {
      switch (tour.id) {
        case 1:
        return(
          <div className="main_tour_pick">
           <div><img src={tour.tour_number_foto_5} /><h3>{tour.tour_number_5}</h3></div>
           <div><img src={tour.tour_number_foto_4} /><h3>{tour.tour_number_4}</h3></div>
           <div><img src={tour.tour_number_foto_3} /><h3>{tour.tour_number_3}</h3></div>
          </div>
        )
        break;
        case 2:
        return(
          <div className="main_tour_pick">
           <div><img src={tour.tour_number_foto_1} /><h3>{tour.tour_number_1}</h3></div>
           <div><img src={tour.tour_number_foto_3} /><h3>{tour.tour_number_3}</h3></div>
           <div><img src={tour.tour_number_foto_4} /><h3>{tour.tour_number_4}</h3></div>
          </div>
        )
          break;
        case 3:
        return(
          <div className="main_tour_pick">
           <div><img src={tour.tour_number_foto_2} /><h3>{tour.tour_number_2}</h3></div>
           <div><img src={tour.tour_number_foto_4} /><h3>{tour.tour_number_4}</h3></div>
           <div><img src={tour.tour_number_foto_1} /><h3>{tour.tour_number_1}</h3></div>
          </div>
        )
          break;
        case 4:
        return(
          <div className="main_tour_pick">
            <div><img src={tour.tour_number_foto_5} /><h3>{tour.tour_number_5}</h3></div>
            <div><img src={tour.tour_number_foto_1} /><h3>{tour.tour_number_1}</h3></div>
            <div><img src={tour.tour_number_foto_2} /><h3>{tour.tour_number_2}</h3></div>
          </div>
        )
            break;
        case 5:
        return(
        <div className="main_tour_pick">
           <div><img src={tour.tour_number_foto_2} /><h3>{tour.tour_number_2}</h3></div>
           <div><img src={tour.tour_number_foto_4} /><h3>{tour.tour_number_4}</h3></div>
           <div><img src={tour.tour_number_foto_3} /><h3>{tour.tour_number_3}</h3></div>
        </div>
        )
        break;
        default:
      }
  }
     let images = [
     {
       original: tour.img_1,
       thumbnail: tour.img_1
     },
     {
       original: tour.img_2,
       thumbnail: tour.img_2
     },
     {
       original: tour.img_3,
       thumbnail: tour.img_3
     },
     {
       original: tour.img_4,
       thumbnail: tour.img_4
     },
     {
       original: tour.img_5,
       thumbnail: tour.img_5
     }
   ]
      return(
    <div id={tour.id} key={tour.id}>
        <div className="bokmark">
          <NavLink className="bokmark_home"  to="/">
            <img  src={Home_icon}  alt=""/>
          </NavLink>
          <NavLink  to="/">
            <span>Туры в грузию</span>
          </NavLink>
            <span className="bokmark_select">{tour.tour_name}</span>
        </div>
        <div className="titleSection">
          <h1>{tour.tour_name}</h1>
        </div>
      <div className="tabs_content"  >
        <Tabs>
        <TabList>
          <Tab><h3>Описание Тура</h3></Tab>
          <Tab><h3>Описание Маршрута</h3></Tab>
        </TabList>
        <TabPanel>

          <h3>{tour.tour_description}</h3>
        </TabPanel>
        <TabPanel>
          <h2>Встреча</h2>
          <h3>{tour.day_0}</h3>
          <h2>День 1</h2>
          <h3>{tour.day_1}</h3>
          <h2>День 2</h2>
          <h3>{tour.day_2}</h3>
          <h2>День 3</h2>
          <h3>{tour.day_3}</h3>
        </TabPanel>
      </Tabs>
      </div>
    <div className="table_main">
      <table className="info_table" border="1" cellPadding="10" >
        <tbody>
         <tr>
          <th>МЕСТО НАХОЖДЕНИЯ : <span>{tour.place}</span></th>
          <th>ПРОДОЛЖИТЕЛЬНОСТЬ : <span>{tour.time}</span> </th>
         </tr>
         <tr>
          <th>РАССТОЯНИЕ ОТ СТОЛИЦЫ : <span>{tour.distance_capital}</span></th>
          <th>РАССТОЯНИЕ : <span>{tour.distance}</span></th>
        </tr>
        </tbody>
       </table>
       </div>
       <ImageGallery items={images} />
         <div className="toor_lst">
            <h1>Другие туры в Грузию:</h1>

              {shownumb()}

          </div>

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
