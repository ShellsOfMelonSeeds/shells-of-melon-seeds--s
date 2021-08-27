import React, { Component } from 'react';
import { SearchBar, Tag } from 'antd-mobile';
import Content from '../content/index'
import '../search/searchs.css'
class Searchs extends Component {
    render() {
        return (
            <div>
                <div>
                    <SearchBar
                        placeholder="Search"
                        showCancelButton
                        cancelText='搜索'
                    />
                </div>
                <div className='searchs'>
                    <h3>历史搜索</h3>
                    <Tag data-seed="logId">Basic</Tag>
                </div>
                <Content/>
            </div>
        );
    }
}

export default Searchs;