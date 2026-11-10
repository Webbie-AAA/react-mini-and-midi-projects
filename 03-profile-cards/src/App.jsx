import './App.css'
import Profile from './components/Card/ProfileCard';
import profiles from './components/profiles_data';

function App() {

  return (
  <div>
       <h1 className='heading'>Professional's Profiles</h1>
    <div>
      {profiles.map((profiles) => {
        return <Profile 
        key = {profiles.id}
        name = {profiles.name}
        img = {profiles.img}
        job_title = {profiles.profession}
        tel = {profiles.tel}/>
      })}
      
    </div>
  </div>
  )
}

export default App
