import React, { Component } from 'react'

class Options extends Component {
    constructor(props) {
        super(props)
        this.selRef=React.createRef()
    }
    render() {
        const {count,item,currentValue,prevHandler,remHandler} = this.props
        let optionItems = []
        let num = count+currentValue
        for(let i=0;i<=num;i++)
            optionItems.push(<option key={i} value={i}>{i}</option>)

        return (
            <>
                <select value={currentValue} ref={this.selRef} onFocus={prevHandler} 
                 onChange={(e)=>remHandler(e,item)}>
                    {optionItems}
                </select>
            </>
        )
    }
}
export default Options