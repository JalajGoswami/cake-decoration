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
  sizeHandler = (v)=>{
    this.setState({max : parseInt(v)})
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Cake Decoration Problem</h1>
        </div>
        <div className="container">
        <div className="col1">
          <img src="https://yomacakeybakey.web.app/static/media/RicottaCheesecake04_detailPg_zoom_desktop.b5025dbc.png" alt='Cake'/>
        </div>
          <CakeSize sizeHandler={this.sizeHandler} max={this.state.max}/>
          <Decorations max={this.state.max} />
        </div>
        <div className='descrip'><h2>Description</h2>
          The maximum decoration items that can be placed
          on top of the cake depends upon the Cake Size selected
          by the User. Once the cake size is selected, user is shown item count options 
          such that he can select decoratable items adding 
          (i.e. the sum of individual items) only upto the CakeSize limit.<br/>
          With the help of <b>States and Props</b> the user can continuously change his
          choices for the count of different itmes and the WebApp will synchronously change
          the options for all items according to the latest choice.
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

