import "./App.css"

//组件化：函数组件 & 类组件
//原则：
// 🚀🚀 组件的名称必须首字母大写！是大写才会被当成组件
//🚀🚀 必须有返回值 （表示该组件的 html UI 结构）
//🚀🚀 组件可以像 html 一样被渲染到页面中
//🚀🚀 使用 ‘自闭合标签’ 或者 ‘函数式标签’ 来渲染组件


//事件绑定的方式：
//on + 事件名称 = { 事件处理函数 },比如  <div onClick = { this.clickHandler } > </div>
//React 事件采用驼峰命名法，比如 onMouseDown、onFocus 等






//一：【创建函数组件】并【绑定事件】
function Hello() {

  const clickHandler = () => {
    console.log("函数组件中的事件被触发了")
  }

  return <div onClick={ clickHandler }>hello</div> //当前组件要渲染的 html 模板是什么

}


//二：渲染函数组件
function App () {
  return (
      <div>

          {/* 自闭合标签 */}
          <Hello />

          {/* 函数式标签 */}
          <Hello></Hello>

      </div>

  )
}


//最后需要 export 一下！
export default App


