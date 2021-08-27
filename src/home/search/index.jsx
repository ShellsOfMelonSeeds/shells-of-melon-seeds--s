import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './index.css'
class Search extends Component {
    render() {
        return (

            <div className='Search'>
                <Link to='/searchs'>
                    <div>
                        <SearchBar
                            placeholder="Search"
                            showCancelButton
                            cancelText='搜索'
                        />
                    </div>
                </Link>
            </div>
        );
    }
}

export default Search;