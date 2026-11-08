import './App.css'
import Login from './components/login';
import Register from './components/Register';

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
function App() {

  const userIsRegistered = false
  return (
    <div className="page-container">
      
      <div className='card'>
        {userIsRegistered ? <Login/> : <Register/>}
      </div>
    </div> 
  )
}





export default App
