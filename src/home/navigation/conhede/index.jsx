import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
import './index.css'
import axios from 'axios';
class Conhede extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conhede: ''
        }
    }
    async componentDidMount() {
        const { data: res } = await axios.get("https://www.heytap.com/cn/oapi/configs/web/icons/040202,040203")
        // console.log(res);
        this.setState({
            conhede: res.data
        })
    }
    render() {
        const PlaceHolder = ({ className = '', ...restProps }) => (
            <div className={`${className} placeholder`} {...restProps}></div>
        );
        const { conhede } = this.state
        if (conhede === '') {
            return (<div>...</div>)
        }
        conhede.splice(0, 1)
        return (
            <div className='conhede'>
                <Flex justify="around">
                    <PlaceHolder><Flex.Item>官方正品</Flex.Item></PlaceHolder>
                    <PlaceHolder><Flex.Item>满69元包邮</Flex.Item></PlaceHolder>
                    <PlaceHolder><Flex.Item>1年全国联保</Flex.Item></PlaceHolder>
                    <PlaceHolder><Flex.Item>30天换货</Flex.Item></PlaceHolder>
                </Flex>
                <div className='conhedes'>
                    {conhede.map((item, idx) => {
                        return <div key={idx} className='image'>
                            <img src={item.url} />
                            <span>{item.title}</span>
                        </div>
                    })}
                </div>


            </div>
        );
    }
}

export default Conhede;