import "./App.css"
import React from 'react'
//1.从 react 中导入 useState,useEffect 函数
import { useState,useEffect } from 'react'


//🚀 Hook - useState 回调函数生成初始值的写法 🔥

  //Why？
    //让 useState() 的参数不是固定写死的，是可以计算的

  //How?
    //const [count,setCount] = useState (()=>{})


    
//🔥 比如要通过 一万次 的查找才能计算出初始值，就可以使用此方法
  //第一步：
    // function getDefaultCount(){
    //   for(let i=0;i <1000;i++){
    //     //...
    //   }
    //   return 'ZZZ'
    // }


  //第二步：
    // function Counter (){ //🔥🔥 通过 props 来接收从 APP() 这个父函数传递过来的 count 值

    //   const [count,setCount] = useState( ()=>{ return getDefaultCount()} //🔥获取上面的函数计算出来的初始值)

    //   return(
    //     <button 
    //       onClick={()=> setCount(count+1)}> {count} </button>
    //   )
    // }




function Counter (props){ //🔥🔥 通过 props 来接收从 APP() 这个父函数传递过来的 count 值

  const [count,setCount] = useState( ()=>{ return props.count - 5} )

  return(
    <button 
      onClick={()=> setCount(count+1)}> {count} </button>
  )
}


function APP(){
  return(
    <div>
      <Counter count={10}/>
      <Counter count={20}/>
      <Counter count={30}/>
    </div>
  )
}

// 最后需要 export 一下！
export default APP



