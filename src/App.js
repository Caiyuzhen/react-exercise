import "./App.css"
import React from "react"//引入 react 包


//⚡️⚡️⚡️ 组件通信(让组件内的数据 state 进行可以进行流转)
//🍎父子关系
//最重要的
//HOW (子传父）

//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————




//🍎类组件 Father
class Father extends React.Component {
  state = {
    message: '我是父组件的 state 数据',
    list: [1, 2, 3],
    userInfo: {
      name: 'cp',
      age: 18
    }
  }

  render () {
    return (
      <div>

      </div>
    )
  }
};



//🍎函数式 Son

function SonA ({ msg, list, userInfo, getMsg, child }) {

  // function SonA (props) { //props 是一个对象，存着父组件传过来的数据

  //👉解构赋值方法（方法二：声明赋值）
  // const { msg, list, userInfo, getMsg, child } = props

  return (
    //👇 通过 【props】 来接受父组件传过来的数据，其中列表为【遍历 list】 这个数组然后【放到】<p></p> 内，最后价格【key】
   
  )
};



//🍎类组件 Son
class SonB extends React.Component {
  render (props) {
    return (
      //👇 通过 【props】 来接受父组件传过来的数据

    )
  }
};





//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————





//最后需要 export 一下！
export default Father


