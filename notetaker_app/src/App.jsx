import Header from "./components/header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import './App.css'

function App() {
  return(
    <body>
      <header><Header/></header>
      <div className="note">
        <Note />
      </div>
      <footer><Footer /></footer>
    </body>
    
  )
}

export default App
