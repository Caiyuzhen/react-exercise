import "./App.css"
import React from 'react'
//1.从 react 中导入 useState,useEffect 函数
import { useState,useEffect } from 'react'


//🚀 Hook - useEffect 清除副作用(🌟在末尾写个 return 就行了)

  //useEffect(()=>{   🌟return ()=>{ }🌟    }

  //👆这个 【 return 的时机】 就是设置了 useEffect 的【🔥宿主函数】本身被销毁的时候



function Timer(){
//把定时器的结果嵌入到 html 内 
  const [time,setTime] = useState(0)


  useEffect(()=>{
    //设置定时器
    let timer = setInterval(()=>{//循环更新时间
      setTime(time+1)
    },1000)

    return ()=>{ //因为在下面的 APP() 判断了 Timer() 函数什么时候出现什么时候销毁，因此这里的 return 函数就是在下面的（条件为 false ）的时候（销毁的时候）才会返回的！
      //🔥🔥🔥再在 useEffect 中 return 一个【清理时间】的动作🚀🚀
      clearInterval(timer) //下面的条件满足后，才会 return 这个清理定时器的函数,这样就不会再执行定时器了
    }
  },[time])


  return (
    <>
      <div 
        style={{fontSize:time*2+'px'}}>  {time}  </div>
    </>
  )

}


function APP(){

  const [flag,setFlag] = useState(true) //flag 为 true 的话，就开始定时器
  return(
    <div>
      
      {flag ? <Timer /> : null} 
      <button onClick={() =>setFlag(!flag)}> 函数的销毁&重建 </button>

    </div>
  )
}

// 最后需要 export 一下！
export default APP



