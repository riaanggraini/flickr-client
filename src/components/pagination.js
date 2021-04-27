import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap'
import { observer } from 'mobx-react';

@observer
class PaginateImages extends Component {
    handleChange = e => {
        this.props.store.page = e.target.value;
        this.props.store.activePage = e.target.value;
    };

    handlePaginate=(e)=>{
        this.props.store.getImages()
    }

    render() {
        let items = []
        const { activePage , pages} = this.props.store;
      
        for(let i = 1; i <= 10; i++){
            items.push(
                <Pagination.Item 
                onClick={e=> this.handlePaginate(e)} 
                onChange={this.handleChangePage}
                value={i}
                key={i} 
                active={i === activePage}>
                  {i}
                </Pagination.Item>,
            );
        }
        if (pages > 10) {
            items.push(<Pagination.Item key=">>">
                {">>"}
            </Pagination.Item>)
        }
        const paginationBasic = (
            <div>
              <Pagination> {items} </Pagination>
            </div>
          );
        return (
            paginationBasic
        
        )
    }
}

export default PaginateImages