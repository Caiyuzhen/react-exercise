import "./App.css"
import React from 'react' 
//1.从 react 中导入 useState,useEffect 函数
import {useState,useEffect} from 'react'


//🚀 Hooks - useEffect (副作用函数及其依赖项)

    //Why?
      //不写 class 的生命周期函数也能够完成业务代码

    //What？ 
      //比如函数内会修改全局的变量, 实际例子:
        //1.发送 ajax 请求
        //2.手动修改 DOM
        //3.localStorage 操作(本地存储)
    

    //How?
      //使用步骤 🌟
        //1.导入 useEffect 函数
        //2.在函数组件中执行 useEffect,传入回调并定义副作用
        //3.当通过修改状态更新组件时，副作用也会不断的执行


    //🔥通过依赖项来控制副作用的执行时机
      //使用步骤 🌟
        //1.默认状态为【没有依赖项】，所以副作用会在组件初始化时执行一次，并且每次修改数据的时候组件更新后才会【再次执行】
        //2.当有依赖项时（🌟在末尾传入空数组），副作用就【只执行一次！】,所以可以用来发送 ajax 请求
            //当【🌟依赖项发生变化】时，副作用才会执行！！



//——————————————————————————————————————————————————————————————————





function App() {
  //👇相当于从【setState的数组中】解构出【数字、方法】
  const [count,setCount] = useState(0)//2.执行 useState 函数并传入初始值（初始值必须在函数组件中）  3.从函数的执行结果中解构出 [数据，修改数据的方法]
  const [name,setName] = useState('Kim')


  
  useEffect(()=>{ //副作用函数 1

    //2.在函数组件中执行 useEffect,传入回调并定义副作用
    
    //修改 h1 标签
    document.querySelector('h1').innerHTML = count
    //修改页面顶部的文档名字
    document.title = count
    //点击修改页面颜色
    document.body.style.backgroundColor = `rgb(${count*4},${count*2},${count*6})`
    //点击修改标题颜色
    document.querySelector('h1').style.color = `rgb(${count*120},${count*20},${count*20})`

    console.log("无依赖项的副作用");
  })


  useEffect(()=>{ //副作用函数 2

    document.querySelector('h2').innerHTML = name
    
    console.log("有依赖项的副作用");
  },[count])//👈添加依赖项, 当 count 修改时 name 才会变！！,添加两个参数的话就是 [count,name]，那就是或的关系，count 或 name 修改都会执行 hook 函数





  return(
    <div>
      <h1
        style={{color:'white'}}>啦啦</h1>
      <h2
        style={{color:'white'}}>姓名</h2>
      {/* jsx 内不能写为 ++ */}
      <br />
        <button onClick = {() => setCount(count+1)}> 点击 + {count}  </button>
        <button onClick = {() => setName('Jimmy')}> 修改 + {name}  </button>
      <br />
    </div>
  )
}




// //最后需要 export 一下！
export default App


