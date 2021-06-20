import React from 'react';
import Card from 'react-bootstrap/Card';
import MovieDay from './movieday';


class Movie extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.movieDetails.map((item) => {

                        return (

                            <MovieDay
                                Title={item.title}
                                average_votes={item.average_votes}
                                total_count={item.total_count}
                              image_url={item.image_url}
                            ></MovieDay>
                        )
                    })
                }
            </>

        )
    }
}
export default Movie;