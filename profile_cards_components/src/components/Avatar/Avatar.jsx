import './Avatar.css'



function Avatar(props){
    return(
        <img className="circle-img" src={props.img} alt='profile avatar'/>
    )
}

export default Avatar