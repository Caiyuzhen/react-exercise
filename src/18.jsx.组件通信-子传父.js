import "./App.css"
import React from "react"//引入 react 包


//⚡️⚡️⚡️ 组件通信(让组件内的数据 state 进行可以进行流转)
//🍎父子关系

  //HOW (子传父）
      //关键:
        //1.父组件准备一个函数
        //2.在父组件内把函数绑定给子组件
        //3.子组件声明一个 props 来解构赋值
        //4.子组件调用父组件传过来的函数, 并且把想要传递的数据作为函数的实参



//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


//🍎类组件 Father
class Father extends React.Component {
  state = {
    list: [1, 2, 3],
  }

  //1.准备一个函数传给子组件()
  getMsgFromSon = ( sonMsgXXX ) => { //定义一个参数，接受子组件回传的数据
      console.log(sonMsgXXX)
  }

  render () {
    return (
      <div>
        <SonA 
          getMsgFromSon = { this.getMsgFromSon } 
        />
      </div>
    )
  }
};





//🍎函数式 Son

//🔥方法一: 复杂的写法
// function SonA (props) { //props 包含了所有父组件传过来的参数

//   const { getMsgFromSon } = props //解构赋值
//   return (
//     <div>
//       这是子组件
//       <br />
//       <button onClick = { ()=>getMsgFromSon('这是来自于子组件的数据') }>用箭头函数的方式给父组件传数据</button> 
//     </div>
//   )
// };

//🔥方法二:简洁的写法
function SonA (props){

  const { getMsgFromSon } = props //解构赋值

  
  function clickFn () {

    const someThing = '这是来自于子组件的数据' //不写死的方式，声明一个变量来承载【子组件的数据】

    getMsgFromSon( someThing )//👇点击后，把数据回调给父组件
  }


  return(
    <div>
      <button onClick = { clickFn }>给父组件传数据</button>
    </div>
  )
}



//最后需要 export 一下！
export default Father


