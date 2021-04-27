import React, { Component } from 'react';
import { InputGroup, Button,FormControl } from 'react-bootstrap'
import { observer } from 'mobx-react';

@observer
class SearchImages extends Component {

    handleChange = e => {
        this.props.store.searchKey = e.target.value;
    };
      
    handleSubmit=(e)=>{
        this.props.store.getImages()
    }
    render() {
        const { searchKey } = this.props.store;
        return (
            <div class="row">
                <div className="inputSearch ">
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="type your search key here"
                        aria-label="key"
                        aria-describedby="basic-addon2"
                        value={searchKey} onChange={this.handleChange} 
                        />
                        <Button className="buttonSearch" onClick={e=> this.handleSubmit(e)} variant="outline-secondary">Search</Button>
                    </InputGroup>
                </div>
            </div> 
        )
    }
}

export default SearchImages