import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import './index.css'
// import axios from 'axios';
class Lattice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lattice:
                [
                    { id: '24728', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210821120801611fd79a003a5.png?_w_=496&_h_=306' },
                    { id: '6181', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210821120844611fdbc0e8d90.png?_w_=496&_h_=306' },
                    { id: '29117', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210820060858611f82be79c6e.png?_w_=496&_h_=306' },
                    { id: '5476', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/2021082304084861235790c787d.png?_w_=496&_h_=306' },
                    { id: '27321', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210821120803611fd5f71e36a.png?_w_=496&_h_=306' },
                    { id: '5477', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210818060851611ce5cf79712.png?_w_=496&_h_=306' },
                    { id: '21791', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210821120805611fd94191b2e.png?_w_=496&_h_=306' },
                    { id: '26042', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210821120835611fdb03bce39.png?_w_=496&_h_=306' },
                ],
            lattices:
                [
                    { id: '22398', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210820070805611f8c9d3c9cb.png?_w_=240&_h_=306' },
                    { id: '22399', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210820070820611f8c706701c.png?_w_=240&_h_=306' },
                    { id: '28597', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/202108140108456116b29986fc0.png?_w_=240&_h_=306' },
                    { id: '28598', title: 'OPPO Reno6', url: 'https://dsfs.oppo.com/archives/202108/20210818060814611cdf1a8d10a.png?_w_=240&_h_=306' },
                ]
        }
    }
    render() {
        const { lattice, lattices } = this.state
        // console.log(this.state.lattice);
        const data = lattice.map((item) => ({
            icon: item.url
        }))
        const data1 = lattices.map((item) => ({
            icon: item.url
        }))
        return (
            <div className='lattice'>
                <Grid
                    data={data}
                    columnNum={2}
                    itemStyle={{ height: '100px', background: '#f6f5ec' }}
                />
                <Grid
                    data={data1}
                    columnNum={4}
                    itemStyle={{ height: '150px', background: '#f6f5ec' }}
                />
            </div >
        );
    }
}

export default Lattice;