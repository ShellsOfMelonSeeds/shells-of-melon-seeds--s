import React, { Component } from "react";
import { Toast } from 'antd-mobile';
import axios from 'axios'
import "./login.css"
import 'antd-mobile/dist/antd-mobile.css';
// 为实验git
class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    // 获取用户名
    userList = (event) => {
        let san = document.getElementById('san');
        san.innerHTML = '';
        this.setState.username = event.target.value
    }
    // 获取密码
    passList = (event) => {
        let sant = document.getElementById('sant');
        sant.innerHTML = '';
        this.setState.password = event.target.value
    }
    // 跳转注册
    btnList = () => {
        this.props.history.push('./register')
    }
    // 登录请求
    loginList = async (event) => {
        event.preventDefault();
        let san = document.getElementById('san');
        let sant = document.getElementById('sant');
        san.innerHTML = '';
        sant.innerHTML = '';
        if (this.setState.username === undefined || this.setState.username === '') {
            // console.log(1);
            san.innerHTML = '请输入用户名'
            return
        }
        if (this.setState.password === undefined || this.setState.password === '') {
            // console.log(1);
            sant.innerHTML = '请输入密码'
            return
        }
        let { data: res } = await axios.post(`/api/login/${this.setState.username}/${this.setState.password}`)
        // console.log(res);
        if (!res) {
            failToast()
            return
        }
        successToast()
        document.cookie = 'keyname' + '=' + res.id
        // this.props.history.push('/min')
        this.props.history.go(-1)
    }
    render() {
        return (
            <div>
                <form action="" id="formList">
                    <h2>账号登陆</h2>
                    <div>
                        <p>
                            <input type="text" name="username" placeholder="请输入用户名" onChange={this.userList} /><br />
                            <span id="san"></span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <input type="password" name="password" placeholder="请输入密码" onChange={this.passList} /><br />
                            <span id="sant"></span>
                        </p>
                    </div>
                    <p id="btn">
                        <button onClick={this.loginList}>登录</button>
                        <button onClick={this.btnList}>注册</button>
                    </p>
                </form>
            </div>
        )
    }
}
function successToast() {
    Toast.success('登陆成功', 1);
}
function failToast() {
    Toast.fail('用户名或密码错误', 1);
}
export default login;