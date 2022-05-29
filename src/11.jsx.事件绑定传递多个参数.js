import "./App.css"
import React from "react"//引入 react 包

//传递自定义的函数参数
//写法从 {clickHandler} 变成 {()=>clickHandler('参数')} 

function Hello() {
  const clickHandler = (ee,msg) => { //同时打印 e 跟 msg 两个参数的做法
    console.log(ee,msg)
  }
  return <div 
    onClick={  (e) => clickHandler(e,'我是消息的实参')//传入实参
  }>点我发消息</div>
}




//二：渲染类组件
function App () {
  return (
      <div>
        <Hello/>
      </div>

  )
}


//最后需要 export 一下！
export default App


