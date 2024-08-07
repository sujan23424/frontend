import React,{useState} from 'react'
import {validEmail, validPassword} from './regex.js'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [cpassword, setCPassword] = useState("")
    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    const [matchPassErr, setMatchPassErr] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!validEmail.test(email)){
         setEmailErr(true)
        }else{
            setEmailErr(false)
        }
        if(!validPassword.test(password)){
            setPassErr(true)
        }else{
            setPassErr(false)
        }
        if(password !== cpassword){
            setMatchPassErr(true)
        }else{
            setMatchPassErr(false)
        }
    }
    console.log(email);
    return (
        <div className="flex justify-center my-24">
            <form action="" className='flex flex-col w-96 gap-4' onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} name="username" id='username' className='px-4 py-2 border-slate-400 border-2 border-solid rounded-md '/>
                <label>Email: </label>
                <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id='email' className='px-4 py-2 border-slate-400  border-2 border-solid rounded-md'/>
               
                <label>Password: </label>
                <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} name="pass1" id='pass1' className='px-4 py-2 border-slate-400  border-2 border-solid rounded-md'/>
         
                <label>Confirm Password: </label>
                <input type='password' value={cpassword} onChange={(e)=>{setCPassword(e.target.value)}} name="pass2" id='pass2' className='px-4 py-2 border-slate-400  border-2 border-solid rounded-md'/>
                <input type="submit" value="Submit" className='bg-indigo-600 text-white px-3 py-1 rounded-md' />
                {emailErr && <h1 className='text-red-500 font-semibold'>Email is invalid</h1>}
                {matchPassErr && <h1 className='text-red-500 font-semibold'>Passwords do not matches !</h1>}
                {passErr && <h1 className='text-red-500 font-semibold'>Password is invalid</h1>}
            </form>
        </div>
    )
}

export default Signup