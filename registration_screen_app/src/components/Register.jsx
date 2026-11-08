import Input from "./Input";


export default function Register(){
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    const formData = new FormData(e.target);

    e.target.username.value = '';
    e.target.match_pw_1.value='';
    e.target.match_pw_2.value='';
    const user_reg_input = {}

    const username = formData.get('username')
    const password1 = formData.get('match_pw_1')
    const password2 = formData.get('match_pw_2')

    if (password2 !== password2){
      alert('There is a mismatch between username and password\nPlease try again')
    } else {
      user_reg_input['username'] = username
      user_reg_input['match_pw_1'] = password1
      user_reg_input['match_pw_2'] = password2
    }


    console.log(JSON.stringify(user_reg_input))
    
  }
    return (
    <div>
      <h1>Registration</h1>
      <form className="form" onSubmit={handleSubmit}>
              <Input type="text" placeholder="Username" name="username" autocomplete="off"/>
              <Input type="text" placeholder="Password" name="match_pw_1" autocomplete="off"/>
              <Input type="text" placeholder="Confirm Password" name="match_pw_2" autocomplete="off"/>
              <button type="submit">Register</button>
      </form>
    </div>
    
  );
}

