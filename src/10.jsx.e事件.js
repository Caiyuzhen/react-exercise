import "./App.css"
import React from "react"//引入 react 包


//事件对象 e 


//比如阻止 a 标签的跳转
function Hello() {

  const clickMe = (e) => {
    console.log(e.target)
    console.log(e.currentTarget)

    //阻止跳转这个默认行为
    e.preventDefault()
  }

  return <div >
    👉点击:
    <br />
    <a  onClick = { clickMe }    href="http://www.google.com">点我阻止跳转</a>
  
    </div>
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


