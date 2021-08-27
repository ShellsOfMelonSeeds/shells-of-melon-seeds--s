import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import './index.css'
class Search extends Component {
    render() {
        return (
            <div className='Search'>
                <SearchBar
                    placeholder="Search"
                    showCancelButton
                    cancelText='搜索'
                />
            </div>
        );
    }
}

export default Search;