import './Note.css'
function Note(props){
    return(
    <div className='note'>

            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>

    </div>

    
)}

export default Note;

