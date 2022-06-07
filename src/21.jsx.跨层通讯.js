import "./App.css"
import React, { createContext } from 'react' //导入 createContext 方法


//⚡️⚡️⚡️ 组件通信(让组件内的数据 state 进行可以进行流转)
//🍎 跨（多）层传递 App -> ComA -> ComC 🔥🔥前提是要有上下层的【结构关系】！！！
  //🌟 HOW? 
    //🌟Provider 提供数据
    //🌟Consumer 消费数据   

        //1.导入 createContext 方法
            //import React, { createContext } from 'react'


        //2.创建 Context 对象 (解构赋值)
            //const { Provider,Consumer } = createContext()


        //3.使用 Provider 包裹根组件提供的数据 ，value 【也可以】作为【函数的参数】，比如 {value=>消费数据}
            //<Provider value={this.state.message} />


        //4.需要用到数据的组件用 Consumer 来获取数据,value 则是包裹好的数据, 箭头函数的格式是固定的
            //<Consumer {value => <div> {value} </div>}/>






//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//2.🔥创建【 Context 对象 】(解构赋值,将【属性/值】从【对象/数组】中提取出来并【进行赋值】)
const { Provider, Consumer } = createContext()


//🍎类组件 Father
class Father extends React.Component {

  state = {
    message: "我是父组件的数据"
  }

  render(){
    return(
      // 3.使用 Provider 包裹根组件提供的数据 🔥🔥🔥//注意：需要用【 value 】绑定一下我们【🌟 将要传递的数据】！！
      <Provider value={this.state.message}> 
        <div>
          <ComA />
        </div>
      </Provider>
    )
  }

};

//——————————————————————



//子组件
function ComA (){ 
  return(
    <div>这是组件A
      <ComC/>
    </div>
  )
}


//——————————————————————


//子组件
function ComC (){ 
  return(
    <div>这是组件C
      <Consumer>
      {/* 4.需要用到数据的组件用 Consumer 来获取数据,【🌟 value 则是包裹好的数据】, 箭头函数的格式是固定的 */}
        {value => <span> {value} </span>} 
      </Consumer>
    </div>
  )
}


//最后需要 export 一下！
export default Father


