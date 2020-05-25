import React, { useEffect, useState,  Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:null,
        }
    }

    componentDidMount() {
        fetch('http://localhost/api/cars')
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => this.setState({ data }));
    }

    render() {
        const { data } = this.state;


        return (
            <div className="App">
                <header className="App-header">
                    <div className="car-list">
                        Yolo {data.map(a => <div>a</div>)}
                    </div>
                </header>
            </div>
        );
    }

}

function App2() {

    // const [cars, setCars] = useState([]);
    //
    // useEffect(() => {
    //     //Get cars from backend, using nginx proxy
    //     fetch("http://localhost/api/cars")
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .then(data => this.setScale({data}));
    // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div className="car-list">
  //           Yolo {}
  //         {cars.map(car => {
  //             return (
  //                 <div>
  //                     <b>{car.name}</b>, color: {car.color}
  //                 </div>
  //             );
  //         })}
  //       </div>
  //     </header>
  //   </div>
  // );
}

export default App;
