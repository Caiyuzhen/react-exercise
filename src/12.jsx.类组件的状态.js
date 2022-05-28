import "./App.css"
import React from "react"//引入 react 包


//🌟🌟类组件的状态(有状态组件，一般用来提供交互，而函数组件一般负责静态结构的展示)
//函数式组件的【状态】，在 react hook 出来之前，函数式组件是没有状态的，只能通过类组件来调用
//🍎步骤：初始化状态 -> 读取状态（渲染到视图） -> 修改状态 -> 影响视图
//⚠️注意：【🔥不能够】直接做数值赋值的修改，比如 this.name = XX，比如通过 setState() 来修改状态


//类组件状态
class TestComponent extends React.Component {
  state = { //1.定义组件状态
    //3.定义组件的各种属性，都是当前组件的状态
    name:'cp teacher'
  } 


  //5.修改状态,注意，React 【🔥不能够】直接做数值赋值的修改，比如 this.name = XX，比如通过 setState() 来修改状态
  changeName = () => {
    this.setState({
      name:'Ming'
    })
  }

  render() {//1.render 是必须的，先定义 render()
    return (
      // 4.读取状态，渲染到视图
        <div> 
          这是一个 div 
          当前 name 为：{this.state.name}
          
          {/* 6.用一个触发来影响视图 */}
          <button onClick={ this.changeName }> 点击修改 Name </button>

        </div>
    )
  }
}




//二：渲染类组件(根组件)
function App () {
  return (
      <div>
        <TestComponent />
      </div>

  )
}


//最后需要 export 一下！
export default App


