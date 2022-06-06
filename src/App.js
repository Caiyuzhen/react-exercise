import "./App.css"
import React from 'react'
//1.从 react 中导入 useState,useEffect 函数
import { useState,useEffect } from 'react'


//🚀 Hook - useLocalStorage

  //What?
    //1.可以通过函数的参数，自定义传入 useState 的默认值
    //2.每次只要修改 message 数据的时候，都会自动的向本地同步一份

  //How?
    //const [message,setMessage] = useLocalStorage(defaultValue)



//——————————————————————————————————————————————————————————————————



function useLocalStorage (defaultValue){

  const [message,setMessage] = useState(defaultValue)//1.可以通过函数的参数，自定义传入 useState 的默认值


  useEffect(()=>{
    //每次只要修改 message 数据的时候，都会自动的向本地同步一份
    window.localStorage.setItem('message',message)

  },[message])

  return [message,setMessage]
}




// 最后需要 export 一下！
export default useLocalStorage



