import './App.css'
import CounterWidget from './Components/CounterWidget/CountingWidget';
import GetDateTime from './Components/DateTimeWidget/GetDateTime';
import CarCatalogue from './object_and_array_destructuring/destructuring';
function App(){
    return(
        <div className='app-container'>
            <div className='top-middle-section'>
                <GetDateTime/>
            </div>
            <div className='left-section'>
                <CounterWidget/>
            </div>
            <CarCatalogue/>
        </div>
    )
}

export default App;

//Challenge:
//1. Given that you can get the current time
//Show the latest time in the <h1> when the Get Time button
//is pressed.
//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);