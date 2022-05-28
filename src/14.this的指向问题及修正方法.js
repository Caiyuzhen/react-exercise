import "./App.css"
import React from "react"//引入 react 包



// //写法一 🚀🚀🚀 在初始化阶段去修正 this 的老写法
// class Test extends React.Component {

  
//   //在初始化的阶段里边用去 bind（ ）去绑定 this
//   constructor() {
//     super()
//     this.handler = this.handler.bind(this) //不绑定则会 undefined
//   }

  
//   handler() { //🍎：老的方法在用普通函数去定义的方法时候，在 react 中 this 的指向会变为 undefined
//     console.log(this)
//   }

//   render() {
//       return(
//         <button onClick={ this.handler }>点击我</button>
//       )
//   }
// }


//————————————————————————————————————————————————————————————————————————


// //写法二 🚀🚀🚀 在【事件绑定的位置】采用【箭头函数】的写法来修正
// class Test extends React.Component {


//   handler() { //🍎：老的方法在用普通函数去定义的方法时候，在 react 中 this 的指向会变为 undefined
//     console.log(this)
//   }

//   render() {
//       return(
//         <button onClick={ ()=> this.handler() }>点击我</button>
//       )
//   }
// }


//————————————————————————————————————————————————————————————————————————


//写法三 🚀🚀🚀 标准的写法
class Test extends React.Component {


  handler = () => { //🍎：用箭头函数的写法来明确 this 
    console.log(this)
  }

  render() {
      return(
        <button onClick={ this.handler }>点击我</button>
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


