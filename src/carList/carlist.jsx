import React, { Component } from "react";
import Content from '../home/content/index'
import axios from 'axios'
import './carlist.css'
import { NavBar, Icon } from 'antd-mobile';

class carList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: '',
            car_data_list: [],
            valuess: [],
            car_value: 1,
            money: 0,
            arr_list: [],
            num_money: 0
        }
    }

    componentDidMount() {
        this.newcommper()

    }

    newcommper = async () => {
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
        this.setState({ obj: obj.keyname })

        let { data: res } = await axios.post(`/api/cardata/${obj.keyname}`)

        this.setState({ car_data_list: res })
        // console.log(res);

        if (res == false) {
            this.props.history.push('/cardata')
            return
        }
        let arr = []
        res.map((itme) => {
            arr.push(itme.quantity)
            // console.log(itme.quantity);
            return
        })
        // console.log(arr);
        this.setState({ arr_list: arr })
        // console.log(this.state.arr_list);
        let data = this.state.car_data_list
        if (data == false || data == []) {
            return <div id="car_css">
                <img src="https://dsfs.oppo.com/store/cn/m/img/cart.fb3bfa5c.png" alt="" />
                <p>购物车还没有商品</p>
                <button onClick={() => { this.props.history.push('/home') }}>去逛逛</button>
            </div>
        }

        let arrPromise = [];
        data.map((itme) => {
            arrPromise.push(axios.get(`https://www.heytap.com/cn/oapi/goods/web/info/skuId?skuId=${itme.id}`));
        })

        let arr_money = [];
        Promise.all(arrPromise).then((values) => {
            let vv = values.map((itme, index) => {

                arr_money.push(itme.data.data.promotedPrice)

                return (<div key={index} id="car_box" >
                    <input type="checkbox" />
                    <div id="car_listbox">
                        <img src={`${itme.data.data.url}`} alt="" id="car_img" />
                        <div id="car_name">
                            <h2>{itme.data.data.name}</h2>
                            <div id="mane">
                                <span>￥{itme.data.data.promotedPrice}</span>
                                <div id="car_btn" onClick={(evene) => this.Stepper(evene, itme.data.data.goodsSkuId)}>
                                    <button className="reduce">-</button>
                                    <input type="text" value={this.state.arr_list[index]} disabled className="btn_inp" />
                                    <button className="plus">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            })
            this.setState({ valuess: vv })
            this.setState({ money: arr_money })

            return vv
        }).then(() => {
            let num = 0;
            this.state.money.map((itme, index) => {
                num += itme * this.state.arr_list[index]
                // console.log(1);
            })
            // console.log(2);
            this.setState({ num_money: num })
            this.forceUpdate()
        })
    }

    Stepper = (e, KeyId) => {
        let ev = e || window.evene;
        let target = ev.target || ev.srcElement;
        if (target.className == 'plus') {
            target.previousSibling.value = (target.previousSibling.value * 1) + 1;
            // console.log(target.previousSibling.value);
            this.setState({ car_value: target.previousSibling.value });
            axios.post(`/api/plus/${this.state.obj}/${KeyId}/${target.previousSibling.value}`)
            // console.log(res);
            this.newcommper()
            // console.log(11);
            // this.forceUpdate()
        }
        if (target.className == 'reduce' && target.nextSibling.value > 1) {
            target.nextSibling.value = (target.nextSibling.value * 1) - 1;
            // console.log(target.nextSibling.value);
            this.setState({ car_value: target.nextSibling.value });
            axios.post(`/api/plus/${this.state.obj}/${KeyId}/${target.nextSibling.value}`)
            // console.log(res);
            this.newcommper()
            // console.log(22);
            // this.forceUpdate()
        }
    }

    settlement = async () => {
       let res = await axios.post(`/api/Purchased/${this.state.obj}/`)
    //    this.forceUpdate()
       this.newcommper()
       console.log(res);
    }

    render() {

        let qian = this.state.num_money

        return (
            <div id="car_data">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >购物车</NavBar>
                
                <div>
                    {this.state.valuess}
                </div>
                <div id="car_botn">
                    <span>合计￥{qian}</span>
                    <button onClick={this.settlement}>结算</button>
                </div>
                <Content/>
            </div>
            
        )
    }
}



export default carList;