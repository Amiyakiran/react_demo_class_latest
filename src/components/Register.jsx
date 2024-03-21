import React, { useState } from 'react'

function Register() {
    const [userDetails , setUserDetails]= useState({
        username:"",
        password:"",
        gender:"",
        course:""
    })

    const add = (e)=>{
        e.preventDefault()
        /* console.log(userDetails); */
        alert(`username is :${userDetails.username},
              password is ${userDetails.password},
              gender is ${userDetails.gender} 
              course is ${userDetails.course}`)
    }
   
  return (
    <div>
        <form onSubmit={add} style={{margin:'40px',padding:'20px', border:'1px solid black', width:'500px'}}>
                <h1 style={{textAlign:'center'}}>registration form</h1>
                <label htmlFor="">Username</label>
                <input className='form-control' type="text" placeholder='username' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} /> <br />

                <label htmlFor="">password</label>
                <input type="text" placeholder='password' onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} /> <br />

                <label htmlFor="">Gender</label> <br />
                <input name='gender' type="radio" value="male" onChange={(e)=>setUserDetails({...userDetails,gender:e.target.value})} />
                <label htmlFor="">male</label><br />
                <input name='gender' type="radio" value="female" onChange={(e)=>setUserDetails({...userDetails,gender:e.target.value})} />
                <label htmlFor="">Female</label><br />
                <input name='gender' type="radio" value="others" onChange={(e)=>setUserDetails({...userDetails,gender:e.target.value})}  />
                <label htmlFor="">others</label><br />

                <label htmlFor="">Course</label>
                <select name="" id="" onChange={(e)=>setUserDetails({...userDetails,course:e.target.value})}>
                    
                    <option value="" selected></option>
                    <option value="mearn">mearn</option>
                    <option value="python">python</option>
                    <option value="">AI</option>
                </select>

             <button>add</button>
        </form>
    </div>
  )
}

export default Register