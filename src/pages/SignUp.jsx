import './sign-up.css'

function SignUp() {
    return (
        <>
        <h1 className='sign-up-title' id='top-title'>Sign Up</h1>
        <h1 className='sign-up-title' id='first-name'>First Name</h1>
        <input className='field' placeholder='John'></input>
        <h1 className='sign-up-title' id='last-name'>Last Name</h1>
        <input className='field' placeholder='Smith'></input>
        <h1  className='sign-up-title' id='email'>Email</h1>
        <input className='field' placeholder='myemail@gmail.com'></input>
        <h1 className='sign-up-title' id='username'>Username</h1>
        <input className='field' placeholder='JS1'></input>
        <h1 className='sign-up-title' id='password'>Password</h1>
        <input className='field' placeholder='12345'></input>
        <button className='submit-button'><span className='label'>Submit</span></button>
        </>
    )
}

export default SignUp