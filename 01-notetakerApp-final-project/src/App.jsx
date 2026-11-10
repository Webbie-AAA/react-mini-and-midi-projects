import Note from './components/Note/Note'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import notes from './components/note_content'
import "./App.css"

const truncatedNotes =  notes.map(note =>{
        return {...note, content: note.content.substring(0,100)}
        })


function App() {
  return(

    <div>
      <header>
            <Header/>
      </header>
      {truncatedNotes.map((note, index) => {
        return (<Note
          key = {index}
          title = {note.title}
          paragraph = {note.content}/>
        )
          })
      }
      <footer>
        <Footer/>
      </footer>
    </div>
    
  )
}

export default App
