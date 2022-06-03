import "./App.css"
import React from 'react' 


//🚀【函数组件】跟【类组件】的 Props 默认值



//🍎 类组件的默认值
  //方法一：Test.defaultProps
  //方法二：static 类静态属性定义 (推荐写法)

class Test extends React.Component {

    //方法二：static 类静态属性定义
    static defaultProps  = {
      wellDone: 'Hello',
    }

    render() {
      return (
        <div>
          {this.props.wellDone}
        </div>
      );
    }
}


//方法一:Test.defaultProps: 定义类组件的默认值
// Test.defaultProps = {
//   wellDone: 'Hello',
// }


class App extends React.Component {
    render() {
      return (
        <Test
          wellDone={"Hey"}
        />
      )
    }
}




// //最后需要 export 一下！
export default App


