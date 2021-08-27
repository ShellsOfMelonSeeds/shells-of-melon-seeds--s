import React, { Component, Fragment } from "react";

class MinNone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_name: '',
            weatherInfo: ''
        }
    }

    componentDidMount() {
        let namelist = document.cookie.split(';');
        let num = [];
        namelist.map((itme, index) => {
            num[index] = itme.replace(' ', '').split('=')
        })
        let obj = {}
        num.map((itme) => {
            obj[itme[0]] = itme[1]
        })
        if (obj.keyname) {
            this.props.history.push('/min')
        }
    }

    render() {
        return (
            <Fragment>
                <div id="a_list">
                    <a href="#" onClick={() => {
                        this.props.history.push('/login')
                    }}>
                        <div id="imges">
                            <img src="https://uc-avatar-cn.heytapimage.com/titans-usercenter-avatar-bucket-cn/default-new.png" alt="" />
                        </div>
                        <div>
                            <h6>登录账号</h6>
                        </div>
                    </a>
                    <button id="btn_list" onClick={() => {
                        this.props.history.push('/login')
                    }}>登录</button>
                </div>
                
            </Fragment>
        )
    }
}

export default MinNone;