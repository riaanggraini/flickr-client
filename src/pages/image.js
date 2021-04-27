import React, { Component } from 'react';
import Card from '../components/card';
import Search from '../components/search'
import Paginate from '../components/pagination'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer

class imageListPage extends Component {
    render(){
        return (
            <div>
                <div>
                    <h1>
                        Images of the day
                    </h1>
                </div>
                <div className="search">
                    <Search store={this.props.store}/>
                </div>
                    <Card store={this.props.store} />
                    <hr></hr>
                    <Paginate  store={this.props.store}/>
            </div>
        )
    }
}
export default imageListPage