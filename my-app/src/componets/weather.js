import React from 'react';
import Card from 'react-bootstrap/Card';
import WeatherDay from './weatherday';

class Weather extends React.Component {



    render() {
        return (
            <>
                {
                     
                   this.props.weatherInFoserver.map((item)=> {
                       return(
                        <WeatherDay
                        date={item.date}
                        descriptiopn={item.descriptiopn}
                           
                              > </WeatherDay>

                       )
                   })
                    
                }
            </>
        )
            }
        }
       
export default Weather;