import React, { useState } from 'react'

function Example(props) {
   const [user, setUser] = useState([
    {username:'max', age:'27'},
    {username:'manu', age:'28'},
    {username:'megha', age:'29'},
    {username:'Anu', age:'30'},
    {username:'maxwell', age:'20'},
   ])
    //js code
    console.log(props);
    /* function without argument */
    const check = ()=>{
      alert('check button click')
    }
    /* function with argument */
    const add = (user)=>{
      alert(`${user} is added successfully`)
    }
    const getUsername = (e)=>{
        console.log(e.target.value);
    }
  return (
    <>
        <div>Example</div>
      {
        props.sub ==='REACTJS' &&
        <h1>data shared from parent :{props.sub}</h1>
      }

        <button onClick={check} style={{backgroundColor:'blue',padding:'10px',borderRadius:'5px',color:'white',margin:'10px'}}>check</button>

        <button onClick={()=>add('max')} style={{backgroundColor:'green',padding:'10px',borderRadius:'5px',color:'white',margin:'10px'}}>add</button>

        <input type="text" placeholder='Enter your name' onChange={(e)=>getUsername(e)} />
        <h1>table</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item)=>(
              <tr>
                <th>{item.username}</th>
                <th>{item.age}</th>
              </tr>
            ))
              }
          </tbody>
        </table>
    </>
  )
}

export default Example