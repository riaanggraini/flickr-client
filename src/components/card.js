import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import { observer } from 'mobx-react';

@observer
class CardImages extends Component {

  componentDidMount() {
    this.props.store.getImages(1, 20)
  }
    render() {
      const { images } = this.props.store;
        return (
          <div>
            { images.data
             ? images.data.map((image) => {
                const content = []
                content.push(
                    <Card spacing={24} className="card">
                        <Card.Img variant="top" src={image.path} />
                        <Card.Body>
                            <Card.Title className="text-muted">{image.title}</Card.Title>     
                        </Card.Body>
                    </Card>
                )
                return content
          })
          : "Loading..."}
          </div>
        )
    }
}

export default CardImages