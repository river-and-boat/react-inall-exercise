import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './calculator.less'
import {Link} from "react-router-dom";

export default class Calculator extends Component {

    state = {
        result: ''
    }

    expression = [];

    operates = ['+', '-', '*'];

    render() {
        return <div id="calculatorContainer">
            <form id="container">
                <div className="form-group" id="title">
                    <h1>在线计算器</h1>
                </div>
                <div className="form-group">
                    <input className="form-control" disabled id="userName"
                           value={this.state.result}/>
                </div>
                <div className="form-group">
                    <table>
                        <tr>
                            <td><a id="+" className="btn btn-primary" onClick={this.buildExpression}>+</a></td>
                            <td><a id="-" className="btn btn-primary" onClick={this.buildExpression}>-</a></td>
                            <td><a id="*" className="btn btn-primary" onClick={this.buildExpression}>x</a></td>
                        </tr>
                        <tr>
                            <td><a id="7" className="btn btn-primary" onClick={this.buildExpression}>7</a></td>
                            <td><a id="8" className="btn btn-primary" onClick={this.buildExpression}>8</a></td>
                            <td><a id="9" className="btn btn-primary" onClick={this.buildExpression}>9</a></td>
                        </tr>
                        <tr>
                            <td><a id="4" className="btn btn-primary" onClick={this.buildExpression}>4</a></td>
                            <td><a id="5" className="btn btn-primary" onClick={this.buildExpression}>5</a></td>
                            <td><a id="6" className="btn btn-primary" onClick={this.buildExpression}>6</a></td>
                        </tr>
                        <tr>
                            <td><a id="1" className="btn btn-primary" onClick={this.buildExpression}>1</a></td>
                            <td><a id="2" className="btn btn-primary" onClick={this.buildExpression}>2</a></td>
                            <td><a id="3" className="btn btn-primary" onClick={this.buildExpression}>3</a></td>
                        </tr>
                        <tr>
                            <td><a id="0" className="btn btn-primary" onClick={this.buildExpression}>0</a></td>
                            <td><a id="Clear" className="btn btn-primary" onClick={this.clearExpression}>Clear</a></td>
                            <td><a id="=" className="btn btn-primary" onClick={this.getEqualResult}>=</a></td>
                        </tr>
                        <tr>
                            <td><Link to="/"><h4>回到主页</h4></Link></td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    }

    buildExpression = (event) => {
        // 统计运算符数量
        const operateNum = this.expression
            .filter(s => this.operates.indexOf(s) >= 0).length;
        if (operateNum < 2) {
            this.expression.push(event.target.id);
        } else {
            this.expression = [];
        }
        this.setState({
            result: this.expression.join(" ")
                .replace(/\s*/g,"")
        })
    }

    getEqualResult = (event) => {
        let newResult;
        // 统计运算符数量
        const operateNum = this.expression
            .filter(s => this.operates.indexOf(s) >= 0).length;
        if (operateNum > 1) {
            newResult = '';
        } else {
            this.expression.push(event.target.id);
            newResult = this.expression.join(" ")
                .replace(/\s*/g,"") + eval(this.state.result);
        }
        this.setState({
            result: newResult
        });
        this.expression = [];
    }

    clearExpression = () => {
        this.expression = [];
        this.setState({
            result: []
        })
    }
}