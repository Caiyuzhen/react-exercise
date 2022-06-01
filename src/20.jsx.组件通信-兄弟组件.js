import "./App.css"
import React from "react"//引入 react 包


//⚡️⚡️⚡️ 组件通信(让组件内的数据 state 进行可以进行流转)
//🍎兄弟关系

  //HOW (子->父->子）
        //1.先子传父，再父传子
        //2.比如 SonB 传给 Father , Father 再传给 SonA
        


//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


//🍎类组件 Father
class Father extends React.Component {

  //4.声明一个状态，储存来自 B 组件的数据
  state = {
    sendMsgToA: '初始值'
  }

  //1.声明一个从 B 组件接收数据的方法
  getMsg = (msg) => {
      //6.把从 B 组件获取到的数据【存储到】 state 内
      this.setState ({
        sendMsgToA: msg
      })
  }

  render() {
    return (
      <div>
        <SonA 
            //5.给 A 组件绑定 state 内的数据
            sendMsgToA = { this.state.sendMsgToA }
        />
        <br />

        <SonB 
            //2.给 B 组件加上接收时间的方法
            getMsg = {this.getMsg}
        />
      </div>
    );
  }
};

//——————————————————————




function SonA (props){ 
  return(
    <div>
      {/* //7.在 A 组件中从 props 内接收从 father 组件内绑定的数据 */}
      这是 A 子组件,{ props.sendMsgToA }
    </div>
  )
}


//——————————————————————


function SonB (props){
  //3.在 B 组件内声明一个数据
  const bMsg = '这是来自于 B 组件的数据'

  return(
    <div>
        这是 B 子组件
        {/* 3.给 B 组件定义一个事件，传入一个方法, 用 props 这个媒介来调用【父组件】的方法 */}
        <button onClick={ ()=>props.getMsg(bMsg) }>发送数据</button>
    </div>
  )
}


//最后需要 export 一下！
export default Father


