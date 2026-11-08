import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import "./App.css";

function App() {
  return(
    <div>
      <header><Header/></header>
      <div className="note">
        <Note />
      </div>
      <footer><Footer /></footer>
    </div>
    
  )
}

export default App
