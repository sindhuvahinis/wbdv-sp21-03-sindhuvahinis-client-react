import React from 'react'
import {connect} from 'react-redux'

const CounterDisplay = ({myCount}) =>
    <h1>
        Count: {myCount}
    </h1>


const stateToPropertyMapper = (state) => {
    return {
        myCount : state.count
    }
}

// connect returns a function that takes the Counter display as input
// const abc = connect()
// abc(CounterDisplay)
// abc is going to pass that properties to CounterDisplay
export default connect(stateToPropertyMapper)(CounterDisplay)