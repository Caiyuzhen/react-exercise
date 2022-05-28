import "./App.css"
import React from "react"//引入 react 包



class Test extends React.Component {


  render() {
      return(
        <div>1</div>
      )
  }
}


//渲染类组件(根组件)
function App () {
  return (
      <div>
        <Test/>
      </div>

  )
}


//最后需要 export 一下！
export default App


