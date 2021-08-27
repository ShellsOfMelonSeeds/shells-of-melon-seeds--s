import React, { Component } from 'react';
import axios from 'axios'
import { WingBlank, Button, ActionSheet, Grid } from 'antd-mobile';
import Search from '../home/search/index'
import Content from '../home/content/index'
import './index.css'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
class ClassiFication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classification: ''
        }
    }
    async componentDidMount() {
        const { data: res } = await axios.get("https://www.heytap.com/cn/oapi/goods/web/products/010206,010225,010226,010227,010239,010238,010229,010228,010211,010214,010212,010213,010216,010218,010221,010217,010220,010215");
        // console.log(res);
        this.setState({
            classification: res.data
        })
    }
    render() {
        // console.log(this.props.history)
        const { classification } = this.state
        if (classification === '') {
            return (<div>...</div>)
        }
        const productDetailss = classification.map(item => {
            return item.productDetailss
        })
        // console.log(productDetailss);
        const data1 = productDetailss[0].map((item) => ({
            icon: item.url,
            name: item.title,
            price: item.price,
            id: item.skuId
        }));
        const data2 = productDetailss[2].map((item) => ({
            icon: item.url,
            name: item.title,
            price: item.price,
            id: item.skuId
        }));
        const data3 = productDetailss[14].map((item) => ({
            icon: item.url,
            name: item.title,
            price: item.price,
            id: item.skuId
        }));
        return (
            <div className='nvalists'>
                <Search/>
                <div>
                    <WingBlank>
                        <Button>热门推荐</Button>
                    </WingBlank>
                    <Grid data={data1}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}
                            onClick={() => {this.props.history.push(`/details/?skuId=${dataItem.id}`)}}
                            >
                                <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '10px', marginTop: '12px' }}>
                                    <span>{dataItem.name}</span>
                                </div>
                                <span>￥{dataItem.price}</span>
                            </div>
                            
                        )}
                    />
                </div>
                <div>
                    <WingBlank>
                        <Button>无线耳机</Button>
                    </WingBlank>
                    <Grid data={data2}
                        // activeClassName='123'
                        // activeStyle={true}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}
                            onClick={() => {this.props.history.push(`/details/?skuId=${dataItem.id}`)}}>
                                <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '8px', marginTop: '12px' }}>
                                    <span>{dataItem.name}</span>
                                </div>
                                <span>￥{dataItem.price}</span>
                            </div>
                        )}
                    />
                </div>
                <div>
                    <WingBlank>
                        <Button>日用百货</Button>
                    </WingBlank>
                    <Grid data={data3}
                        // activeClassName='123'
                        // activeStyle={true}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}
                            onClick={() => {this.props.history.push(`/details/?skuId=${dataItem.id}`)}}>
                                <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '8px', marginTop: '12px' }}>
                                    <span>{dataItem.name}</span>
                                </div>
                                <span>￥{dataItem.price}</span>
                            </div>
                        )}
                    />
                </div>
                <Content/>
            </div>
        );
    }
}

export default ClassiFication;