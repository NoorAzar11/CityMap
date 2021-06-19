import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Weather from './componets/weather';
import Movie from './componets/movie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area1: '',
      areaData: '',
      Errors: '',
      showIng: false,
      megErrors: false,
      mapping: false,
      weatherDisplay: false,
      weatherInFoserver: {},
      movieDisplay:false,
      movieDetails:{}
    }
  }

  area = async (event) => {
    event.preventDefault();
   

    let areaUrl = `https://us1.locationiq.com/v1/search.php?key=pk.06915dffe039345c0d7fadff6230b3cc&q=${this.state.area1.toLowerCase()}&format=json`;
    //localhost:3012/test/getweather 
    // let serverURl = process.env.REACT_APP_SERVER;
let serverURl='http://localhost:3012';
    const url = `${serverURl}/getweather?areaName=${this.state.area1.toLowerCase()}`;
    const weatherData2=await axios.get(`${serverURl}/getweather?areaName=${this.state.area1.toLowerCase()}`);
    console.log(weatherData2);
    const movieData2=await axios.get(`${serverURl}/getweather?areaName=${this.state.area1.toLowerCase()}`);
    console.log(movieData2);

    try {

      // const getWetherData = await axios.get(url);
      let areaUrl2 = await axios.get(areaUrl);
      this.setState({

        areaData: areaUrl2.data[0],
        showing: true,
        megErrors: false,
        weatherDisplay: true,
        weatherInFoserver: weatherData2.data,
        movieDisplay:true,
        movieDetails:movieData2,



        // let reslut = await axios.get(url);
        // // console.log(reslut.data);
        // this.setState({
        //   areaData: reslut.data[0],
        //   mapping: true,
      })

    }
    catch {
      this.setState({
        showing: false,
        Errors:true,
        megErrors: true,
        weatherDisplay: false,
        movieDisplay: false

      })
    }

  }
  area3Det=(e)=>{
    this.setState({
      area1:e.target.value
    })
  }

  render() {
    return (
      <div>

        <Form onSubmit={this.area}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> City Explorer</Form.Label>
            <Form.Control onChange={this.area3Det} placeholder="Enter email" />
            <Form.Text className="text-muted">
             
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.06915dffe039345c0d7fadff6230b3cc&center= ${this.state.areaData.lat} ,${this.state.areaData.lon}&zoom='1-18' `} alt='mapping' />
          <Card.Body>
            <Card.Title> CityName: {this.state.areaData.display_name}</Card.Title>
            <Card.Text>
              LatNumber :{this.state.areaData.lat}
            </Card.Text>
            <Card.Text>
              LonNumber : {this.state.areaData.lon}
            </Card.Text>
          </Card.Body>
        </Card>
        {this.state.megErrors && this.state.Errors}
        Find Your Fav Area
        <Weather
       area1={this.state.area1}
       weatherInFoserver={this.state.weatherInFoserverweatherInFoserver}/>
        
      </div>
    )
  }
}
export default App;