import React from 'react';
import Card from 'react-bootstrap/Card';


class MovieDay extends React.Component {
    render() {
        return (
            <>

                <Card style={{ width: '18rem' }}>
                 
                    <Card.Body>

                        <Card.Title>
                           Movie
                        </Card.Title>
                        <Card.Text>
                            title : {this.props.title}
                            averageVotes :{this.props.average_votes}
                            image_url: {this.props.image_url}
                            total_count {this.props.total_count}
                        </Card.Text>


                    </Card.Body>
                </Card>

            </>
        )
    }
}
export default MovieDay;