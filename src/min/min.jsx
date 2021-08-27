import axios from "axios";
import React, { Component, Fragment } from "react";
import Content from '../home/content/index'
import { Modal } from 'antd-mobile';
import './min.css'

class Min extends Component {
    constructor(props) {
        super(props)
        this.state = {
            is_name: '',
            res_list: []
        }
    }

    async componentDidMount() {
        // 获取查找cookie
        let namelist = document.cookie.split(';');
        let num = [];
        namelist.map((itme, index) => {
            num[index] = itme.replace(' ', '').split('=')
        })
        let obj = {}
        num.map((itme) => {
            obj[itme[0]] = itme[1]
        })
        if (obj.keyname == undefined) {
            this.props.history.push('/login')
            return
        }
        const { data: res } = await axios.post(`/api/min/${obj.keyname}`)
        this.setState({ is_name: res })

        const { data: res_list } = await axios.get(' https://www.heytap.com/cn/oapi/goods/web/info/skuId?skuId=4108')
        this.setState({ res_list: res_list })
    }
    // 退出登录请求
    btnList = () => {
        const alert = Modal.alert;
        const alertInstance = alert('警告', '确定要退出吗', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            {
                text: '确定', onPress: () => {
                    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                    if (keys) {
                        for (var i = keys.length; i--;)
                            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
                        window.location.reload();
                    }
                }
            },
        ]);
        setTimeout(() => {
            console.log('auto close');
            alertInstance.close();
        }, 500000);
    };
    // 内容渲染
    content_list = () => {

        const res_list = this.state.res_list.data
        if (res_list !== undefined) {
            const arr = res_list.duoduanPackageList.map((itme) => {
                // console.log(itme);
                return <div key={itme.skuId} id="collocation">
                    <img src={itme.url} alt="" />
                    <h6>{itme.packageName}</h6>
                    <p><span>￥{itme.promotedPrice}</span> <span>￥{itme.originalPrice}</span></p>
                </div>
            })
            return arr
        }


    };


    order=()=>{
        this.props.history.push('/mindata')
    }
    render() {
        return (
            <Fragment>
                <div id="a_list">
                    <a href="#">
                        <div id="imges">
                            <img src="https://uc-avatar-cn.heytapimage.com/titans-usercenter-avatar-bucket-cn/avatar/6.png?imgModifyTime=null" alt="" />
                        </div>
                        <div>
                            <h6>{this.state.is_name}</h6>
                        </div>
                    </a>
                    <button id="btn_list" onClick={this.btnList}>退出登录</button>
                </div>

                <div id="order_list" onClick={this.order}>
                    <p>我的订单</p>
                    <span>全部订单 {'>'}</span>
                </div>

                <div id="cot_list">
                    <div id="cot_h">超值搭配</div>
                    <div id="cot_b">
                        {this.content_list()}
                    </div>
                </div>
                <Content/>
            </Fragment>
        )
    }
}
export default Min;