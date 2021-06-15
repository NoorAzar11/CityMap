import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaData: '', //we make '' because we want to give a default val
      Errors: '', //we add the errors msg if the code or api broke
      megErrors: false, // we added if the app broke this will show up
      mapping: false //we added to show when we need it 
    }
  }
  //we create a method for get location and reslut.
  //“async” before a function means one simple thing: a function always returns a promise //we used this .area because its a funaction
  // we need to prevent the default behvior 
  // because we are inside the `` we used ${}
  area = async (event) => {
    event.preventDefault();
    let search2 = event.target.search.value;
    let areaUrl = `https://us1.locationiq.com/v1/search.php?key=pk.06915dffe039345c0d7fadff6230b3cc&q=${search2}&format=json`;
    try {
      let reslut = await axios.get(areaUrl);
      // console.log(reslut.data);
      this.setState({
        areaData: reslut.data[0],
        mapping: true,
      })
    }
    catch {
      this.setState({
        Errors: "Ops ..Try Again",
        megErrors: true, //will work if link were borke 
      })
    }

  }
  render() {
    return (
      //we bring the displayname and lon and lat from the json file and we store on the state "data"
      //when we add the form we need a method to get the requset 
      //The try statement lets you test a block of code for errors.
      //The catch statement lets you handle the error.
      //if its true fist part will work if its false second part will work  {this.state.megErrors && this.state.Errors} 
      < div >

        {/* <h1>City Explorer</h1>
        <form onSubmit={this.area}>
          <input type='text' placeholder='Area' name='search' />
          <input type='submit' value='Explorer' />
        </form>
        <p>{this.state.areaData.display_name} </p>
        <p>{this.state.areaData.lat} </p>
        <p> {this.state.areaData.lon}</p>

        {this.state.mapping && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.06915dffe039345c0d7fadff6230b3cc&center= ${this.state.areaData.lat} ,${this.state.areaData.lon}&zoom='1-18' `} alt='mapping' />}

        {this.state.megErrors && this.state.Errors}
        Explorer Your Fav Area */}

        <Form onSubmit={this.area}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> City Explorer</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.06915dffe039345c0d7fadff6230b3cc&center= ${this.state.areaData.lat} ,${this.state.areaData.lon}&zoom='1-18' `} alt='mapping' />
          <Card.Body>
            <Card.Title>Name : {this.state.areaData.display_name}</Card.Title>
            <Card.Text>
            Lat :{this.state.areaData.lat}
            </Card.Text>
            <Card.Text> 
           Lon : {this.state.areaData.lon}
            </Card.Text>
          </Card.Body>
        </Card>
        {this.state.megErrors && this.state.Errors}
        Explorer Your Fav Area
      </div >
    )
  }
}
export default App;