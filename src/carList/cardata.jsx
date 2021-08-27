import { Component } from "react";
import { NavBar, Icon } from 'antd-mobile';

class cardata extends Component {
    render() {
        return (
            <div id="car_data">
                   <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-2)}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >购物车</NavBar>
                <div id="car_css">
                    <img src="https://dsfs.oppo.com/store/cn/m/img/cart.fb3bfa5c.png" alt="" />
                    <p>购物车还没有商品</p>
                    <button onClick={() => { this.props.history.push('/home') }}>去逛逛</button>
                </div>
            </div>
        )
    }
}
export default cardata;