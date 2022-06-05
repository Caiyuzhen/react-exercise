import "./App.css"
import React from 'react' 
//1.从 react 中导入 useState 函数
import {useState} from 'react'


//🚀 Hooks - useState
    // Why？
      //总结来说，解决两个问题：
        //1.组件的状态逻辑复用 🌟
        //2.class 自身的问题，class 很复杂
    


    //What？
      //本质是什么？
        //Hook 的本质是一套能使【函数组件】具备更强大更灵活的“钩子函数（在某个时机下自动执行）”


      //有什么优势？
        //1.解决业务逻辑难以拆分的问题
        //2.使状态的逻辑复用变得简单可行
        //3.更加契合 React 的设计理念: `UI = fn(data)`, 起因是函数组件没有自己的状态，于是出现了 Hook，Hook 是为了让函数组件拥有自己的状态
      

      //hook 函数是什么
        //🔥useState 函数
            //const [count,setCount] = useState(x)

            //count 名字可以自定义，setCount 名字可以自定义， x 为初始值, 顺序不能换，前一个是【数据状态值】，后一个是【修改数据的函数】
            //🌟🌟数组的解构赋值是有顺序的，对象的解构赋值是无顺序的🔥🔥
            //setCount 不是修改原值，而是【🔥🔥生成一个新值来替换原值】
            //count 跟 setCount 是【⚡️绑定在一起⚡️】的，只能用来修改 count 的值，不能修改其他的


        //🔥useState 内 setCount 方法的更新过程
                  //⚡️1.首次渲染：（初始值只在首次渲染时生效，⛰️第二次调用的时候就【不是初始值了】！！）
                  //⚡️2.更新阶段：count 拿到的永远是更新之后的最新值

        
        //🔥特点
            //可以定义多个 useState 函数, 各自函数的【数据】跟【方法】都是独立的, 互相不影响

        
          
        //🔥注意事项
          //只能在函数组件中使用 🌟



        //🔥不能出现在【if/for/内部函数（嵌套函数）】中, 因为依赖于 react hook API 的调用顺序
          //比如if（num / 2 === 0）{ const [name,steName] = setState('cp) }

        
  
    //How?
      //使用步骤 🌟
        //1.从 react 中导入 useState 函数
        //2.执行 useState 函数并传入初始值（初始值必须在函数组件中）
        //3.从函数的执行结果中解构出 【数据状态值，修改数据的方法】
        //4.使用数据、修改数据




//——————————————————————————————————————————————————————————————————




function App() {
  //👇相当于从【useState的数组中】解构出【数字、方法】
  const [count,setCount] = useState(0)//2.执行 useState 函数并传入初始值（初始值必须在函数组件中）  3.从函数的执行结果中解构出 [数据，修改数据的方法]
  const [flag,setFlag] = useState(true)
  const [list,setList] = useState([])

  function changeManyState(){
    setFlag(false)
    setList([1,2,3])
  }

  return(
    <div>
      {/* jsx 内不能写为 ++ */}
      <button onClick = {() => setCount(count+1)}> 点击 + {count}  </button>
          <br />
          <br />
        <div>
          flag:{flag ? '1' : '0'} 
          <br />
          list:{list.join('-')} 
        </div>
      <button onClick = {changeManyState}> 点击触发修改多个 state 的函数 </button>
    </div>
  )
}




// //最后需要 export 一下！
export default App


