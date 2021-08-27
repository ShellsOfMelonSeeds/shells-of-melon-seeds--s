import React, { Component } from 'react';
import { NavBar, Icon, Carousel, WingBlank, Tag, Stepper, List, Button } from
    'antd-mobile';
import { Link } from 'react-router-dom'
import './details.css'
// import carList from '../carList/carlist';
import axios from 'axios';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1,
            val1: 2,
            arr: 0,
            obj:'',
            reslist: ''
        };
    }
    onChange = (val) => {
        // console.log(val);
        this.setState({ val });
    }
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }

   async componentDidMount() {
        let namelist = document.cookie.split(';');
        let num = [];
        namelist.map((itme, index) => {
            num[index] = itme.replace(' ', '').split('=')
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

        const skuId = this.props.location.search
        let str = skuId.slice(1, skuId.lenght)
        let arr = str.split('=')
        const { data: res } = await axios.get(`https://www.heytap.com/cn/oapi/goods/web/info/skuId?skuId=${arr[1]}`)
        this.setState({
            reslist: res
        })
        this.setState({
            arr: arr[1]
        })
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    car = async () => {
        // console.log(this.state.obj*1);
        // console.log(this.state.arr*1);
        let { data: res } = await axios.post(`/api/carlist/${this.state.obj*1}/${this.state.arr*1}`)
        if(res){
            alert('添加成功')
        }else{
            alert('商品已拥有')
        }
        // console.log(res);

    }

    render() {
        function onChange(selected) {
            console.log(`tag selected: ${selected}`);
        }
        const reslist = this.state.reslist
        if (reslist === '') {
            return (<div>...</div>)
        }
        const listSellMaps = reslist.data.listSellMaps
        const price = reslist.data.price
        const name = reslist.data.name
        const attributes = reslist.data.attributes
        const configs = attributes.configs[0].values
        const skuItems = attributes.skuItems
        const duoDuanDetailImages = reslist.data.duoDuanDetailImages
        return (
            <div className='detailss'>
                <div className='details'>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onClick={()=> this.props.history.go(-1)}
                        >
                        <span>商品详情</span>
                        <span>用户评价</span>
                        <span>参数及包装</span>
                    </NavBar>
                </div>
                <div>
                    <WingBlank>
                        <Carousel
                            autoplay={false}
                            infinite
                        >
                            {duoDuanDetailImages.map(vals => (
                                <a
                                    key={vals}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={vals.url}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div className='detail1s'>
                    <div className='detail2s'>
                        <h1>{name}</h1>
                        {listSellMaps.map((item) => (
                            <span>{item.subTitle}</span>
                        ))}
                        <b>￥{price}</b>
                    </div>
                </div>
                <div className='detail3s'>
                    <div>
                        <div className='box1'>
                            颜色
                            {configs.map((item) => (
                                <Tag onChange={onChange}>{item.item}</Tag>
                            ))}

                        </div>
                        <div className='box2'>
                            配置
                                {skuItems.map((item) => (
                                    <Tag onChange={onChange}>{item.key2}</Tag>
                                ))}
                        </div>
                        <div className='box3'>
                            <List>
                                <List.Item
                                    wrap
                                    extra={
                                        <Stepper
                                            style={{ width: '100%', minWidth: '100px' }}
                                            showNumber
                                            max={10}
                                            min={1}
                                            value={this.state.val}
                                            onChange={this.onChange}
                                        />}
                                >
                                    数量
                                </List.Item>
                            </List>
                        </div>
                    </div>
                </div>
                <div className='detail5s'>
                    <div className='detail4s'>
                        <Link to='/home'>
                            <span>首页</span>
                        </Link>
                        <span>客服</span>
                        <Link to='/car'>
                            <span>购物车</span>
                        </Link>
                        <Button
                            type="warning"
                            style={{ width: '100px', height: '40px' }}
                            onClick={this.car}
                        >加入购物车
                        </Button>
                        <Button type="warning" style={{ width: '100px', height: '40px' }}>立即购买</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;