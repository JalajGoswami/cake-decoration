import React, { Component } from 'react';
import Options from './Options';
import { GiRose,GiCherry,GiCutDiamond,GiHearts } from "react-icons/gi";
import '../css/Decorations.css'

class Decorations extends Component {
    constructor(props) {
        super(props)
        let prevValue=0
        this.state = {
            remaining : this.props.max,
            currentValues : [0,0,0,0]
        }
    }
    static getDerivedStateFromProps(props,state){
        if(props.max>(state.remaining+state.currentValues.reduce((a, b) => a + b, 0)))
            return { remaining : props.max-state.currentValues.reduce((a, b) => a + b, 0)}
    }
    prevHandler = (e)=>{
        this.prevValue = parseInt(e.target.value)
    }
    remHandler = (e,i)=>{
        let rem = this.state.remaining-parseInt(e.target.value)+this.prevValue
        let newValue = [...this.state.currentValues]
        newValue[i]=parseInt(e.target.value)
        this.setState({
            remaining: rem,
            currentValues: newValue
        })
    }
    render() {
        const {max} = this.props
        const {remaining,currentValues} = this.state
        return (
            <div className="decor">
                <h2>Decorations</h2>
                <h3>Max {max}</h3>
                <form>
                    <div className="decorItem">
                    <GiRose id="rose" />
                    <label>Rose</label>
                    <Options count={remaining} item={0} currentValue={currentValues[0]}
                    prevHandler={this.prevHandler} remHandler={this.remHandler}/>
                    </div>
                    <div className="decorItem">
                    <GiCherry id="cherry" />
                    <label>Cherry</label>
                    <Options count={remaining} item={1} currentValue={currentValues[1]}
                    prevHandler={this.prevHandler} remHandler={this.remHandler}/>
                    </div>
                    <div className="decorItem">
                    <GiCutDiamond id="diamond" />
                    <label>Diamonds</label>
                    <Options count={remaining} item={2} currentValue={currentValues[2]}
                    prevHandler={this.prevHandler} remHandler={this.remHandler}/>
                    </div>
                    <div className="decorItem">
                    <GiHearts id="heart" />
                    <label>Hearts</label>
                    <Options count={remaining} item={3} currentValue={currentValues[3]}
                    prevHandler={this.prevHandler} remHandler={this.remHandler}/>
                    </div>
                </form>
                {console.log(this.state)}
            </div>
        )
    }
}

export default Decorations