import { Component } from "react";

class cardata extends Component {
    render() {
        return (
            <div id="car_data">
                <h6>购物车</h6>
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