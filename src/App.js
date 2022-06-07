import "./App.css"
import React from 'react'
//1.导入 useRef 函数
import { useRef, useEffect } from 'react'


//🚀 Hook - useRef

//How?
//1.导入 useRef 函数
//2.定义 useRef 函数并传入 null，返回值作为一个对象
//3.通过 ref 绑定元素
//4.ref 内部有个 current 属性来存放拿到的 DOM 对象 


//🔥场景一：获取组件实例 （函数组件没有实例，这里指的都是类组件）
//🔥场景二：获取 DOM 对象 、标签

class TestC extends React.Component {

  tellName = () => {
    return '啦啦啦'
  }

  render () {
    return (
      <div>我是一个类组件的元素</div>
    )
  }
}



function APP () {

  //2.执行 useRef 函数并传入 null，返回值作为一个对象
  const testRef = useRef(null)
  const h1Ref = useRef(null)


  useEffect(() => {
    //4.ref 内部有个 current 属性来存放拿到的 DOM 对象 
    console.log(testRef.current) //可以通过 current.XXX 来调用实例对象内的方法
    console.log(h1Ref.current)
  }, [])


  return (
    <div>
      {/* 3.🔥通过 ref 绑定元素 */}
      <TestC ref={testRef} />
      <h1 ref={h1Ref}> 这是 h1 元素</h1>
    </div>
  )
}




// 最后需要 export 一下！
export default APP



