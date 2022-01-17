import React, { Component }from 'react';
import CakeSize from './components/CakeSize';
import Decorations from './components/Decorations';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       max : 6
    }
  }
  sizeHandler = (e)=>{
    this.setState({max : parseInt(e.target.value)})
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Cake Decoration Problem</h1>
        </div>
        <div className="container">
        <div className="col1">
          <img src="https://yomacakeybakey.web.app/static/media/RicottaCheesecake04_detailPg_zoom_desktop.b5025dbc.png"/>
        </div>
        <div className="col2">
          <CakeSize sizeHandler={this.sizeHandler}/>
          <Decorations max={this.state.max} />
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

