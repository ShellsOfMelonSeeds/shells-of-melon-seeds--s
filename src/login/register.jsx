import React, { Component } from "react";
import { Toast } from 'antd-mobile';
import axios from 'axios'
import "./register.css"
import 'antd-mobile/dist/antd-mobile.css';
class login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password2: ''
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
    // 确认密码
    passList2 = (event) => {
        let sanp = document.getElementById('sanp');
        sanp.innerHTML = '';
        this.setState.password2 = event.target.value
    }

    // 注册请求
    loginList = async (event) => {
        event.preventDefault();
        let san = document.getElementById('san');
        let sant = document.getElementById('sant');
        let sanp = document.getElementById('sanp');

        if (this.setState.username === undefined || this.setState.username === '') {
            console.log(1);
            san.innerHTML = '请输入用户名'
            return
        }
        if (this.setState.password === undefined || this.setState.password === '') {
            console.log(1);
            sant.innerHTML = '请输入密码'
            return
        }
        if (this.setState.password !== this.setState.password2) {
            sanp.innerHTML = '两次密码不一致'
            return
        }

        let { data: res } = await axios.post(`/api/register/${this.setState.username}/${this.setState.password}`)

        if (!res) {
            failToast()
            return
        }

        successToast()
        this.props.history.push('/login')

    }
    render() {
        return (
            <div>
                <form action="" id="formList">
                    <h2>注册账号</h2>
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
                    <div>
                        <p>
                            <input type="password" name="password2" placeholder="确认密码" onChange={this.passList2} /><br />
                            <span id="sanp"></span>
                        </p>
                    </div>
                    <p id="btns">
                        <button onClick={this.loginList}>注册</button>
                    </p>
                </form>
            </div>
        )
    }
}
function failToast() {
    Toast.fail('用户名已存在', 2);
}
function successToast() {
    Toast.success("注册成功,请重新登录", 2);

}
export default login;