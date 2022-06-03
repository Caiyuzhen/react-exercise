import "./App.css"
import React from 'react' 


//🚀【函数组件】跟【类组件】的 Props 默认值


//🍎 函数组件的默认值
  //方法一： Test.defaultProps，会改到 props (不推荐这么写)
  //方法二：{pageSize=10} //推荐写法,函数参数默认值，不会改到 props

function Test ({pageSize=10}) {
  return (
    <div>
      这是一个函数组件
      {/* 方法二👇 需要调用才看得到 */}
      {pageSize}
    </div>
  )
}


// //方法一：设置默认值
// Test.defaultProps = {
//   pageSize: 10 //🔥🔥如果不传 pageSize ，则默认值为 10
// }

class App extends React.Component {
  render () {
    return (
      <div>
        <Test 
            pageSize = {20}
        />
      </div>
    )
  }
}



// //最后需要 export 一下！
export default App


