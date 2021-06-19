import React from 'react';
import Card from 'react-bootstrap/Card';



class Movie extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.movieDetails.map((Item) =>
                     return(
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>

                                <Card.Title> You Fav Movies </Card.Title> 
                                    <Card.Text> 
                                        Title: {item.title}
                                        AvgVotes: {item.average_votes}
                                        Votes:{item.vote_count}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                                )
                            })
                        }
</div>

)
}
}
export default Movie;