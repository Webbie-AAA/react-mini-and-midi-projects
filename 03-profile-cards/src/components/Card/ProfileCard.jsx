import '../Avatar/Avatar';
import './ProfileCard.css';
import '../profiles_data';
import Avatar from '../Avatar/Avatar';



function Profile(props){
    return(
            
<div className='card'>
<div className='top'>
    
    <h2 className='name'>{props.name}</h2>
    <Avatar img={props.img}/>
</div>
<div className='bottom'>
    <div className='info'>
        <h2>{props.job_title}</h2>
        <p>tel: {props.tel}</p>
    </div>
</div>
</div>
)}



    
   
  



export default Profile