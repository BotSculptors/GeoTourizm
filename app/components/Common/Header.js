import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import search from '../../static/images/search.png'
import earth from '../../static/images/earth.png'
import logo from '../../static/images/logo.png'

export class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (<header>
      <div className="navbar">
        <NavLink className="name" to="/">
          <h1>ГеоТуризм</h1>
        </NavLink>

        <div className="navigation">
          <NavLink className="turist" to="/forturist">
            <h2>Туристу</h2>
          </NavLink>
          <NavLink className="blog" to="/blog">
            <h2>Блог</h2>
          </NavLink>
          <NavLink className="contakti" to="/contact">
            <h2>Контакты</h2>
          </NavLink>
          <NavLink className="otzivi" to="/reviews">
            <h2>Отзывы</h2>
          </NavLink>
          <NavLink className="oproekte" to="/about">
            <h2>О проекте</h2>
          </NavLink>

        </div>
        <div className="select_value">
          <h2>Отображать валюту в :
          </h2>
          <select>
            <option value="dollar">$</option>
            <option value="evro">€</option>
            <option value="rub">₽</option>
          </select>
        </div>
        <div className="search">
          <img src={search}></img>
          <input placeholder="Искать тур"></input>
        </div>
        <NavLink className="tour_pick" to="/tour-pick">
          <img src={earth}></img>
          <p>Подобрать тур</p>
        </NavLink>
      </div>
    </header>);
  }
}

export default connect(null)(Header);
