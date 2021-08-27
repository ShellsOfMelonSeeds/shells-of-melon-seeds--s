import React, { Component } from 'react';
import Search from './search';
import Content from './content/index';
import Navigation from './navigation';

// import Content from './content';

import 'antd-mobile/dist/antd-mobile.css';
import './index.css'
// import ClassiFication from '../classification/index';
class Homepage extends Component {
    render() {
        return (
            <div className='Homepage'>
                <Search/>
                <Navigation/>
                <Content/>
            </div>
        );
    }
}

export default Homepage;