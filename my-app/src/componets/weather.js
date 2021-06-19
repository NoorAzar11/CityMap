import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component{



render(){
    return (
        <div>
              <Card style={{ width: '18rem' }}>
                  {/* <Card.Header>{this.props.data.lat} {this.props.data.lon}</Card.Header> */}
              <Card.Body>

              <Card.Title>
{this.props.date}
{this.props.description}

              </Card.Title>

              </Card.Body>
              </Card>
        </div>
    )
}
}

export default Weather;