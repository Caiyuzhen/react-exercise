import "./App.css"
import React from 'react'
//1.导入 useRef 函数
import { createContext,useState,useContext } from 'react'


//🚀 Hook - useContext
    //What?
      //函数组件之间的【数据通讯】
    
    //How?
    // 1.解构赋值 MyContext() 方法给到 MyContext 名字可自定义，就是个变量
    // 2.在爷爷组件内定义变量调用 createContext() 并解构赋值: const MyContext = createContext()
    // 3  .在爷爷组件内【包裹】数据 <MyContext.Provider value={🍎}> ... </MyContext.Provider>
    // 4.在儿子组件内调用 useContext(MyContext)， 解构赋值获取 MyContext 内容给 count
    // 5.可以在爷爷组件内使用 useState() 方法去修改调用了爷爷组件的数据的父亲跟儿子组件！！🔥🔥
    


//1.解构赋值 MyContext() 方法给到 MyContext 名字可自定义，就是个变量
const MyContext = createContext()



function APP () {

  //1.在爷爷组件内定义变量调用 createContext() 并解构赋值: const MyContext = createContext()
  const [count,setCount] = useState(20) //APP 爷爷组件内的数据
  
  return(
    //2.在爷爷组件内【包裹】数据 <MyContext.Provider value={🍎}> ... </MyContext.Provider>
      <MyContext.Provider value={count}>
        <div>
            <ComA />
            {/* 4.相当于爷爷组件去控制父组件跟子组件的信息！因为下面的数据都是来自 APP 🔥🔥 */}
            <button onClick={()=> {setCount(count+1)} }> + </button>
        </div>
      </MyContext.Provider>
  )
}




function ComA() {
  // 3.在儿子组件内调用 useContext(MyContext)， 解构赋值获取 MyContext 内容给 count
  const count = useContext(MyContext)

  return(
    <>
      <div>从 APP 传过来的数据👉: {count} </div>
      <br />
      <ComB />
    </>
  )
}



function ComB() {

// 3.在儿子组件内调用 useContext(MyContext)， 解构赋值获取 MyContext 内容给 count
  const count = useContext(MyContext)

  return(
    <div>从 APP 来的👉: {count} </div>
  )
}





// 最后需要 export 一下！
export default APP



