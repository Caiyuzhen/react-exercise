import "./App.css"
import React, { useState } from 'react' 

//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————



//🍎类组件 Father

class Face extends React.Component {

  const [ Uname,setName ] = useState("")
  render(){
      return(
        <div
        style={{color:"#3370FF"}}>
          <button
            onClick={()=>{
              setName(Uname + "🍎")
            }}
          >
            你好{Uname}
          </button>
      </div>
      )
  }

};

// //——————————————————————


// //最后需要 export 一下！
export default Face


