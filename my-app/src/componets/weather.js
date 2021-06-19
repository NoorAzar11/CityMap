import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {



    render() {
        return (
            <div>
                {
                    this.props.weatherInFoserver.map((item) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                {/* <Card.Header>{this.props.data.lat} {this.props.data.lon}</Card.Header> */}
                                <Card.Body>

                                    <Card.Title>
                                        Daily Weather : {this.date}
                                        <Card.Text> Weather Description :{this.description}
                                        </Card.Text>

                                    </Card.Title>

                                </Card.Body>
                            </Card>
                        )
                    })
                }
        </div>
        )
    }
}

export default Weather;