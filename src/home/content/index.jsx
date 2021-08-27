import React, { Component } from 'react';
import './index.css'
class Content extends Component {

    render() {
        return (
            <div className='content'>
                <div className='contents'>
                    <span>首页</span>
                    <span>分类</span>
                    <span>购物车</span>
                    <span>我的</span>
                </div>
            </div>
        );
    }
}

export default Content;