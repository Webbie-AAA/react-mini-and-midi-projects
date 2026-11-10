import './Cards.css'
function DefinitionCard(props){
    return (
    <div className='term'>
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
            </span>
            <span className="term-name">{props.term}</span>
        </dt>
        <dd>
            {props.definition}
        </dd>
    </div>
    );

}

export default DefinitionCard