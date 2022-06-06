import "./App.css"
import React from 'react'
//1.从 react 中导入 useState,useEffect 函数
import { useState } from 'react'


// Hook: - useState 的应用场景, 比如用于承载 y 轴位置的状态

//What?
  //获取滚动距离 Y

//How?
  //const [y, setY] = useState(0)


//——————————————————————————————————————————————————————————————————


function useWindowScroll () {

  const [y, setY] = useState(0) //定义一个承载 y 轴位置的状态

  //在滚动行为发生的时候，不断的获取滚动值，并交给 y
  window.addEventListener('scroll', () => {
    //监控滚动的【距离】
    const deltaY = document.documentElement.scrollTop
    setY(deltaY) //把【距离】赋值给 y，直接传参就可以了🔥
  })

  return [y]
}


function APP () {
  const [y] = useWindowScroll()
  console.log(y)
  return (
    <div
      style={{ height: '12000px' }}>
      {/* 居中 */}
      <span style={{
        padding: '2rem',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#3370FF',
        // display: 'block',
        position: 'fixed',
        float: 'left',
        textAlign: 'center'
      }}>
        滚动距离：{y} px
      </span>
    </div>
  )
}





// //最后需要 export 一下！
export default APP


