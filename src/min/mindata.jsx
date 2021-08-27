import axios from "axios";
import { Component } from "react";
import { NavBar, Icon } from 'antd-mobile';
import './mindata.css'

class mindata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: '',
            value_data: []
        }
    }
    async componentDidMount() {
        this.mincar()
    }

    mincar = async () => {
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
            return
        }

        let { data: res } = await axios.post(`/api/success/${obj.keyname}`)
        let arr = []
        res.map((itme) => {
            arr.push(itme.id)
        })
        console.log(arr);
        let arr_datas = []
        arr.map((itme) => {
            console.log(itme);
            arr_datas.push(axios.get(`https://www.heytap.com/cn/oapi/goods/web/info/skuId?skuId=${itme}`))
        })
        Promise.all(arr_datas).then((value) => {
            let min_car_list = value.map((itme, index) => {
                console.log(itme);
                return <div key={index} id="car_box" >
                    <div id="car_listbox">
                        <img src={`${itme.data.data.url}`} alt="" id="car_img" />
                        <div id="car_name">
                            <h2>{itme.data.data.name}</h2>
                            <div id="mane">
                                <span>￥{itme.data.data.promotedPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            })
            this.setState({ value_data: min_car_list })
            return min_car_list

        })
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >已购买</NavBar>
                <div id="mincar_box">
                    <div id="">
                        {this.state.value_data}
                    </div>
                </div>
            </div>

        )
    }
}
export default mindata;