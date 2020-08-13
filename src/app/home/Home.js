import React, {Component} from 'react';
import './home.less';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";

export default class Home extends Component{
  render() {
    return <div>
      <div className="container">
        <div className="leaderboard">
          <div id="imgHero">
            <h1>在线实用工具</h1>
            <img src={require("../../images/hero-image.png")}/>
          </div>
        </div>
        <div id="operator" className="row">
          <div className="col-md-6">
            <Link to="/calculator"><img id="calculator" src={require("../../images/calculator.png")}/></Link><br/>
          </div>
          <div className="col-md-6">
            <Link to="/counter"><img id="counter" src={require("../../images/timer.png")}/></Link><br/>
          </div>
        </div>
      </div>
    </div>
  }
};