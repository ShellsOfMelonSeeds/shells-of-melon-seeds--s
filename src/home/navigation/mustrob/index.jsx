import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import './index.css'
class Mustrob extends Component {
    render() {
        const data = Array.from(new Array(12)).map((_val, i) => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: `name${i}`,
        }));
        return (
            <div className='mustrob'>
                <div className='mustrobsnopo'>
                    <span>今日必抢</span>
                    <span>00:22:00</span>
                    <span>后结束</span>
                    <span>更多</span>
                </div>
                <div className='mustrobs'>
                    <Grid 
                    data={data}
                    columnNum={2}
                    hasLine={false} 
                    isCarousel
                    />
                </div>
            </div>
        );
    }
}

export default Mustrob;