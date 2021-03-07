import React from 'react'
import CounterUp from "./counter-up";
import CounterDisplay from "./counter-display";
import CounterDown from "./counter-down";
import {createStore} from "redux";
import {Provider} from "react-redux";

// not a stateless component

// declare a state here temp
const initialState = {
    count: 234
}

// reducer handles data and handles functions (states)
const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "UP":
            return {
                count: prevState.count + 1
            }

        case "DOWN":
            return {
                count: prevState.count - 1
            }

        default:
            return prevState

    }
}
//        {/* make reducer available to these components*/}
const store = createStore(reducer)

const CounterRedux = () =>
    // provide all the components under provider these components
    <Provider store={store}>
        <div>
            <CounterDisplay/>
            <CounterUp/>
            <CounterDown/>
        </div>
    </Provider>

export default CounterRedux