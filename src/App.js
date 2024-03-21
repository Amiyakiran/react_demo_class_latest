import './App.css';

import style from '../src/myStyle.module.css'
import Example from './components/Example';
import Random from './components/Random';
import User from './components/User';
import Register from './components/Register';

function App() {
   //js content
  const h3style = {
    color:'green',
    fontSize:'100px'
  }

  const subject = 'REACTJS'
  const username = 'Max'
  /* const age ='27' */

  return (
    //jsx code -
    <>
      <div className="App">
       <h1>react</h1>
       <Register/>
       <h2 style={{color:'red'}}>dom dhbvdbfvbdjbgdbjgfbh</h2>
       <h3 style={h3style}>welcome react</h3>
       <h4 className={style.reactstyle}>Components</h4>
       <h3>{subject}</h3>
       <Example sub={subject}/>
       <Random sub={subject}/>
       <User uname = {username} uage='27'/>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default App;
