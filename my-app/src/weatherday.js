import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component{
    render () {
        return (
            <>
                            <Card style={{ width: '18rem' }}>
                                {/* <Card.Header>{this.props.data.lat} {this.props.data.lon}</Card.Header> */}
                                <Card.Body>

                                    <Card.Title>
                                        Daily Weather : {this.props.date}
                                    </Card.Title>
                                    <Card.Text> Weather Description : {this.props.description}
                                    </Card.Text>


                                </Card.Body>
                            </Card>
        
            </>
        )
    }
}
export default WeatherDay;