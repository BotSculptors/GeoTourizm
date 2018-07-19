import React from 'react'
import {connect} from 'react-redux'
import {fetchTrip} from '../../actions/actions'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ImageGallery from 'react-image-gallery';
import Home_icon from '../../static/images/home.png'

export class Trip extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: props.match.params.tripID,
      trip: {}
    };

  }

  // Fetch trip once component did mount
  componentDidMount() {
    this.props.dispatch(fetchTrip(this.state.url));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      trip: Object.keys(nextProps.trip).length
        ? nextProps.trip
        : this.state.trip
    });
  }

  render() {
    //images links
    let images = [
      {
        original: "https://image.ibb.co/kbHqcJ/top_FFLQ7.jpg",
        thumbnail: "https://image.ibb.co/kbHqcJ/top_FFLQ7.jpg"
      }, {
        original: "https://image.ibb.co/hg7Z4y/fullsizerender_1_51_Wp_E.jpg",
        thumbnail: "https://image.ibb.co/hg7Z4y/fullsizerender_1_51_Wp_E.jpg"
      }, {
        original: "https://image.ibb.co/nbtkBd/fullsizerender_2_1b8f_C.jpg",
        thumbnail: "https://image.ibb.co/nbtkBd/fullsizerender_2_1b8f_C.jpg"
      }, {
        original: "https://image.ibb.co/cDOkBd/fullsizerender_3_wdnuv.jpg",
        thumbnail: "https://image.ibb.co/cDOkBd/fullsizerender_3_wdnuv.jpg"
      }, {
        original: "https://image.ibb.co/kajE4y/fullsizerender_4_B9lle.jpg",
        thumbnail: "https://image.ibb.co/kajE4y/fullsizerender_4_B9lle.jpg"
      }
    ]

    return (<div>

      <div className="bokmark">
        <NavLink className="bokmark_home" to="/">
          <img src={Home_icon} alt=""/>
        </NavLink>
        <NavLink to="/trips">
          <span>Туры в грузию</span>
        </NavLink>
        <span className="bokmark_select">{this.state.trip.title}</span>
      </div>
      <div className="titleSection">
        <h1>{this.state.trip.title}</h1>
      </div>

      <div className="tabs_content">
      
          <Tabs>
            <TabList>
              <Tab>
                <h3>Описание Тура</h3>
              </Tab>

              <Tab>
                <h3>Описание Маршрута</h3>
              </Tab>

            </TabList>
            <TabPanel>

              <h3>{this.state.trip.meta_description}</h3>

            </TabPanel>
            <TabPanel>

              <h3>{this.state.trip.directions}</h3>

            </TabPanel>
          </Tabs>

          <div className="info_table">
            <h3>МЕСТО НАХОЖДЕНИЯ :
              <span>default</span>
            </h3>
            <h3>ПРОДОЛЖИТЕЛЬНОСТЬ :
              <span>default</span>
            </h3>
            <h3>РАССТОЯНИЕ ОТ СТОЛИЦЫ :
              <span>default</span>
            </h3>
            <h3>РАССТОЯНИЕ :
              <span>default</span>
            </h3>
          </div>


        <div className="info-panel">
          <div className="map_content">
            <h3>Карта маршрута :</h3>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23785.180684364124!2d46.253085025360704!3d41.82512005050022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40466b9dc92a411b%3A0xf93cf5e29ff8281e!2z0JvQsNCz0L7QtNC10YXQuA!5e0!3m2!1sru!2sge!4v1532012693084" frameBorder="0"></iframe>
          </div>
          <div className="weather_content">
            <h3>Погода :</h3>
            <a target="_blank" href="http://nochi.com/weather/lagodekhi-137204"><img src="https://w.bookcdn.com/weather/picture/3_137204_1_20_333333_300_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=589&anc_id=26656" alt="booked.net"/></a>
          </div>

        </div>
      </div>

      <div className="image_gallery">

        <ImageGallery items={images}/>

      </div>

      <div className="toor_lst">

        <h1>Другие туры в Грузию:</h1>

        <div className="main_tour_pick">
          <div><img src={images[0].original}/>
            <h3>default</h3>
          </div>
          <div><img src={images[1].original}/>
            <h3>default</h3>
          </div>
          <div><img src={images[2].original}/>
            <h3>default</h3>
          </div>
        </div>

      </div>

    </div>);
  }

}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {trip: state.tripReducer});
};

export default connect(mapStateToProps)(Trip);
