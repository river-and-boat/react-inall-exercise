import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import './header.less'
import Calculator from "../calculator/Calculator";
import CountDown from "../count-down/CountDown";
import Home from "../home/Home";
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Header extends Component {
    render() {
        return <BrowserRouter>
            <div className="topnav">
                <Link to="counter"><h4>在线倒计时器</h4></Link>
                <Link to="calculator"><h4>在线计算器</h4></Link>
                <Link to="/"><h4>Home</h4></Link>
            </div>
            <Switch>
                <Route path="/calculator" component={Calculator}></Route>
                <Route path="/counter" component={CountDown}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    }
}