
import "./App.css"
import React from 'react'
//1.从 react 中导入 useState,useEffect 函数
import { useEffect } from 'react'


//🚀 Hook - 发送网络请求


//🌟 useEffect 的执行时期
    //1.如果不加依赖项                   =>      初始化 + 重新渲染完后都会执行
    //2.如果加 [] 空数组 (在此步发送数据)  =>      只会执行初始化
    //3.加特定的依赖项 [count,name]      =>      首次执行 + 任意一个依赖项变化都会执行


//🌟 原生的发送网络请求的方法
    //旧一代：   XMLHttpRequest
    //新一代：   fetch
    //封装的方法：axios


function APP () {


  useEffect(() => {
    //发送请求,注意，🔥这里的 async 不能包裹在 useEffect 的回调中, 只能加在内部函数
    async function loadData () {
      //🚀第一步：发送请求
      // const response = await fetch('http://geek.itheima.net/v1_0/channels')
      fetch('http://geek.itheima.net/v1_0/channels')

        //🚀第二步：将数据进行 Json 化的操作
        .then(response => response.json())

        // //🚀第三步：打印拿到 Json 化后的数据
        .then(data => console.log(data))
    }

    loadData()//🔥调用这个发送请求的函数！！ 
  }, [])

  return (
    <div>

    </div>
  )
}

// 最后需要 export 一下！
export default APP



