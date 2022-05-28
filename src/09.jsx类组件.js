import "./App.css"
import React from "react"//引入 react 包

//组件化：函数组件 & 类组件
//原则：
// 🚀🚀 首字母也必须大写（大驼峰）
// 🚀🚀 类组件应该集成 React.Component 类，从中使用一些方法或属性
// 🚀🚀  没法直接返回一个函数组件，可以用 render(){} 方法来返回 UI 结构



//事件绑定的方式：
//on + 事件名称 = { 事件处理函数 },比如  <div onClick = { this.clickHandler } > </div>
//React 事件采用驼峰命名法，比如 onMouseDown、onFocus 等






//一：创建类组件
class HelloComponent extends React.Component {

  //🌟事件回调函数,👇相当于【实例】的方法, 🚀注意下面需要用 this 来访问！！这种写法可以避免 this 的指向问题,可以让它【指向当前组件的实例对象】
  clickHandler = () => {
      console.log('类组件中的方法被触发了！')
  }

  render() {
      return <div onClick = { this.clickHandler } >这是一个类组件</div>
  }
}





//二：渲染类组件
function App () {
  return (
      <div>

        {/* 自闭合标签 */}
        <HelloComponent/>

        {/* 函数式标签 */}
        <HelloComponent></HelloComponent>

      </div>

  )
}


//最后需要 export 一下！
export default App


