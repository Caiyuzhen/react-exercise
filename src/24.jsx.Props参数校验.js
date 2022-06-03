import "./App.css"
import React from 'react' 

//安装类型校验包 yarn add prop-types,里边有各种各样的校验规则
import PropType from 'prop-types'


//🚀 函数 Props 的【参数校验】

    //WHY?
      //别人调用你的组件库的时候，需要告知要传入什么参数类型

    //WHAT?
      //校验数据类型         比如 array, bool, function, number, object, string 都可以
      //React              元素类型 element
      //必填项              isRequired
      //特定的结构对象,比如   shape ({})

    //HOW?
      //PropType.array 
      //PropType.bool
      //PropType.func
      //PropType.number
      //PropType.string
      //PropType.func.isRequired
      //...


//🍎子组件：渲染列表结构
function Test( {list} ){
  return (
    <div>
      {list.map( item => <p> {item} </p>)}
    </div>
  )
}


//校验 Test, 让传入 list 的参数必须为数组 [] 类型的参数
Test.PropType = {
  //定义各种各样的规则
  list: PropType.array.isRequired  //鉴定传入 list 的参数必须为数组 isRequired 为必传
}



//🍎父组件：提供数据
class Data extends React.Component {
  render() {
    return (
      <div>
        {/* 👇 给 List 传参 */}
        <Test 
          list={[1,2]} //传入数组
        />
      </div>
    )
  }

};

// //——————————————————————


// //最后需要 export 一下！
export default Data


