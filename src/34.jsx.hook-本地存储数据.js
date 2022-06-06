import "./App.css"
import React from 'react'
//1.从 react 中导入 useState,useEffect 函数
import { useState,useEffect } from 'react'


//🚀 Hook - useLocalStorage 🔥

  //What?
    //当 message 被修改时，自动的保存数据到本地

  //How?
    //1.定义一个函数，传入两个参数，一个是【键】，一个是【默认值】
    //2.用 useState 让函数变成可以通过函数的参数来设置数据的函数
    //3.每次只要修改 message 数据的时候，都会自动的向本地同步一份数据进行保存



//——————————————————————————————————————————————————————————————————



function useLocalStorage (key,defaultValue){ //1.定义一个函数，传入两个参数，一个是【键】，一个是【默认值】

  //🔥🔥🔥🔥前一个是用【 message 】来做【默认值】的新值(🔥🔥相当于让 defaultValue = message) ，setMessage 则是修改 message 的方法
  const [message,changeMessage] = useState(defaultValue)//2.用 useState 来解构函数，使其变成可以通过函数的参数来设置数据的函数


  //👇相当于变成监听 defaultValue，只要 defaultValue 有改变就会自动保存数据到本地
  useEffect(()=>{
    //🔥3.每次只要修改 message 数据的时候，都会自动的向本地同步一份数据进行保存
    window.localStorage.setItem(key,message) //语法：storage.setItem(keyName, keyValue);
  },[key,message]) //A 或 B 修改了都满足

  return [message,changeMessage] //🔥🔥🔥返回此方法，可以用 setMessage 来修改 message 的数据，并且只要数据修改了就会自动保存到本地
  
}




function APP () {

  //2.👇👇🔥🔥相当于调用了【 useLocalStorage 并传入两个参数(相当于定义初始值)】，🔥🔥并且进行了解构赋值
  const[message,changeMessage] = useLocalStorage('hook-key-1','加菲猫') 


  setTimeout(()=>{
    changeMessage('蓝白猫')
  },3000)// 3s 后修改 message 的数据

  return(
    <div>
      {message}
    </div>
  )
}



// 最后需要 export 一下！
export default APP



