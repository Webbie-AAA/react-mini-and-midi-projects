import './CountingWidget.css'
import { useState } from 'react'
export default function CounterWidget(){
    const [counter, setCounter] = useState(0)
        const incrementCounter = () => setCounter(counter + 1)
        const decrementCounter = () => setCounter(counter - 1)
        const reset = () => setCounter(0)
        return(
            <div>
                <div className='counter-sticker'>
                    <p>Counter Widget</p>
                    <h1 id='count'>{counter}</h1>

                    <div className='button-group'>
                        <button onClick={incrementCounter}> + </button>
                        <button onClick={decrementCounter}> - </button>
                        <button onClick={reset}> Reset </button>
                    </div>
                </div>
            </div>
        
        )
}

