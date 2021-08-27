import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios'
import Conhede from './conhede/index'
import Lattice from './lattice/index';
import Mustrob from './mustrob';
import './index.css'
// import Item from 'antd-mobile/lib/popover/Item';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: ''
        }
    }
    async componentDidMount() {
        const { data: res } = await axios.get("https://www.heytap.com/cn/oapi/configs/web/banners/040101,040201");
        console.log(res);
        this.setState({
            weatherInfo: res.data
        })
    }
    render() {
        const { weatherInfo } = this.state;
        if (weatherInfo === '') {
            return (<div>...</div>)
        }
        return (
            <div className='navigation'>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        autoplayInterval={3000}
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                    >
                        {weatherInfo.map((item,idx) => (
                            <a key={idx}>
                                <img
                                    src={item.url}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <Conhede/>
                <Lattice/>
                <Mustrob/>
            </div>
        );

    }
}

export default Navigation;