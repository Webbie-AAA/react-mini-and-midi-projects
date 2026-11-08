import './App.css'
import DefinitionCard from './components/DictCards';
import emoji_data from './components/emoji_data'
import './practice_es6_functions'
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className='dictionary'>
      {emoji_data.map(data => {
      return(
        <DefinitionCard
      key = {data.id}
      emoji = {data.emoji}
      term = {data.name}
      definition = {data.meaning}
      />)

      })}
      
        
      </dl>
    </div>
  )
}

export default App;

