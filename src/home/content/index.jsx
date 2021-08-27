import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.css'
class Content extends Component {

    // btnfun(e) {
    //     // console.log(e);
    //     const localname = e.target.localName
    //     const innerhtml = e.target.innerHTML
    // console.log(innerhtml);
    // if (localname === 'span') {

    // }
    // }
    render() {
        return (
            <div className='content'>
                <div className='contents'>
                    <Link to='/home'>
                        <span>首页</span>
                    </Link>
                    <Link to='/classification'>
                        <span>分类</span>
                    </Link>
                    <Link to='/car'>
                        <span>购物车</span>
                    </Link>
                    <Link to='/min'>
                        <span>我的</span>
                    </Link>

                </div>
            </div>
        );
    }
}

export default Content;