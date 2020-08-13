import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './countDown.less'
import {Link} from "react-router-dom";

export default class CountDown extends Component {

    /**
     * Question：变量之间存在联动绑定关系?
     * 即：我声明了一个变量(非state)与state中变量存在赋值关系，当非state变量改变时，state变量也会变化
     * @type {{num: string}}
     */

    state = {
        num: 'Start'
    }

    inputTime = '';

    regax = /^[0-9]*[1-9][0-9]*$/;

    render() {
        return <div id="countContainer">
                <div className="leaderboard">
                    <div id="countHead">
                        <h1>在线倒计时器</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-md-6">
                    <label><h2>设置时间</h2></label>
                    <input id="editTime" onChange={this.setTimeChange}
                           className="form-control" disabled={this.state.num != 'Start'}/><br/><br/>
                    <button id="startCount" className="btn btn-success" disabled={this.state.num != 'Start'}
                            onClick={this.startCountTime}>
                        <h3>Start</h3>
                    </button>
                </div>
                <div className="col-md-6">
                    <label id="result">{this.state.num}</label>
                </div>
            </div><br/><br/>
            <div className="row">
                <div className="col-md-6">
                    <Link to="/"><h3 id="back">回到主页</h3></Link>
                </div>
            </div>
            </div>
    }

    setTimeChange = (event) => {
        this.inputTime = event.target.value;
    }

    startCountTime = (event) => {
        // 判断输入是否是正整数
        if(this.regax.test(this.inputTime)) {
            this.setState({
                num: this.inputTime
            });
            if (this.state.num == 'Start') {
                this.state.num = this.inputTime;
                const timeLoop = setInterval(() =>
                {
                    if(this.inputTime > 0) {
                        this.setState({
                            num: --this.inputTime
                        });
                    } else {
                        this.cleanUp(timeLoop);
                    }
                },1000);
            }
        } else {
            alert("请输入正确的正整数")
        }
    }

    cleanUp = (timeLoop) => {
        window.clearInterval(timeLoop);
        this.setState({
            num: 'End'
        });
        this.init();
    }

    init = () => {
        // 设置倒计时函数
        setTimeout(() => {
            this.setState({
                num: 'Start'
            });
        },5000);
        this.inputTime = '';
    }
}