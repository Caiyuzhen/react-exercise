import "./App.css"
import React from "react"//引入 react 包


//🌟🌟通过类组件的方式做 counter （点赞自增）s


class Counter extends React.Component {

  state = {
    count: 0
  }


  //🍎事件回调函数
  changeCount = () => {

    //在 React 这个体系下，【数据不可变】，不可以 ++，不可以直接 = XX
    //Value 用于都是上一次的值 +1,相当于【重新赋一次值】
    this.setState({ count: this.state.count +1 })
  }

  
  render() {
    return (
      <button onClick={this.changeCount } >
        点赞数 + {this.state.count}
      </button>
    )
  }


}




//二：渲染类组件(根组件)
function App () {
  return (
      <div>
        <Counter/>
      </div>

  )
}


//最后需要 export 一下！
export default App


