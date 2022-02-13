import React, { Component } from 'react'
import '../css/CakeSize.css'

class CakeSize extends Component {
    constructor(props) {
      super(props)
      this.buttonRefs=[React.createRef(),React.createRef(),React.createRef(),React.createRef()]
      this.state = {
         active: 0
      }
    }
    componentDidMount(){
        this.buttonRefs[this.state.active].current.classList.toggle('active')
    }
    static getDerivedStateFromProps({max}){
        switch(max){
            case 6:return {active:0}
            case 8:return {active:1}
            case 12:return {active:2}
            case 18:return {active:3}
        }
    }
    componentDidUpdate(){
        this.buttonRefs.forEach((el)=>el.current.classList.remove('active'))
        this.buttonRefs[this.state.active].current.classList.toggle('active')
    }
    render() {
        return (
            <div>
            <div className="sizebtns">
                <h2>Cake Size</h2>
                <div onClick={()=>this.props.sizeHandler(6)} ref={this.buttonRefs[0]}>
                6<div className='down-arrow'></div></div>
                <div onClick={()=>this.props.sizeHandler(8)} ref={this.buttonRefs[1]}>
                8<div className='down-arrow'></div>
                </div>
                <div onClick={()=>this.props.sizeHandler(12)} ref={this.buttonRefs[2]}>
                12<div className='down-arrow'></div>
                </div>
                <div onClick={()=>this.props.sizeHandler(18)} ref={this.buttonRefs[3]}>
                18*32<div className='down-arrow'></div>
                </div>
            </div>
            </div>
        )
    }
}

export default CakeSize