import Input from './Input'



function Login() {
    const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    console.log(e)
  
    // 1. Create a FormData object from the form element (e.target)
    
    const formData = new FormData(form);
    e.target.username.value = '';
    e.target.user_password.value = '';
    //2. Extract values using the input's 'name' attribute
    const username = formData.get('username')
    const password = formData.get('user_password')
  
    console.log('Username:', username);
    console.log('Password:', password);}

  
  return (
    <div>
      <h1> Login </h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" name="username" autocomplete="off"/>
        <Input type="password" placeholder="Password" name="user_password" autocomplete="off"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}







export default Login;