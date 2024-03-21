import React, { useState } from 'react'


function User({uname}) {
  const [concept,setConcept] = useState("REACT")

  const [color , setColor] = useState({
    color1:'green',
    color2:'red',
    color3:'blue'
  })

  const [username,setUsername]= useState("")
    /* console.log(props); */
   const change = ()=>{
      setConcept("ANGULAR")
    }

    const changeValue = ()=>{
      /* rest operator */
      setColor({...color,color3:'yellow'})
    }
    const add = (e)=>{
     e.preventDefault()
      console.log(username);
    }
  return (
    <>
        <div>User</div>
       {
        uname ==='max'? <h1 style={{color:'red',fontSize:'100px'}}>Username is:{uname} </h1>:<p style={{color:'red',fontSize:'100px'}}>user not found</p>
       }
        {/* <h2>age is : {uage}</h2> */}

        <h2>{concept}</h2>
        <button onClick={change} style={{backgroundColor:'black',padding:'10px',borderRadius:'5px',color:'white',margin:'10px'}}>change</button>


        <ul>
          <li>{color.color1}</li>
          <li>{color.color2}</li>
          <li>{color.color3}</li>
        </ul>

        <button onClick={changeValue} style={{backgroundColor:'purple',padding:'10px',borderRadius:'5px',color:'white',margin:'10px'}}>change</button>


        <form action="" onSubmit={add}>
          <label htmlFor="uname">username</label>
          <input id='uname' type="text" placeholder='enter username' onChange={(e)=>setUsername(e.target.value)} />
          <button>add</button>
        </form>
    </>
  )
}

export default User